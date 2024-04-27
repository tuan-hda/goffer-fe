/* eslint-disable react/jsx-no-undef */
import { Button, Progress } from '@nextui-org/react';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { TbMicrophone, TbPlayerPauseFilled, TbPlayerPlayFilled, TbPlayerStopFilled } from 'react-icons/tb';
import { LiaUndoAltSolid } from 'react-icons/lia';
import { Question } from '@/types/question.type';
import moment from 'moment';

interface IconButtonProps {
    ariaLabel: string;
    color?: 'default' | 'danger' | 'success' | 'warning';
    onPress?: () => void;
    Icon: ReactNode;
    isDisabled?: boolean;
}

const formatTime = (x: number) => {
    var d = moment.duration(x, 'milliseconds');
    var minutes = Math.floor(d.asMinutes());
    var seconds = Math.floor(d.asSeconds()) % 60;
    return `${minutes < 10 ? minutes : `0${minutes}`}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const IconButton = ({ ariaLabel, color, onPress, Icon, isDisabled }: IconButtonProps) => (
    <Button
        aria-label={ariaLabel}
        onPress={onPress}
        isIconOnly
        variant="flat"
        color={color}
        radius="full"
        isDisabled={isDisabled}
    >
        {Icon}
    </Button>
);

interface Props {
    data: Question;
}

const AudioRecorder = ({ data }: Props) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [audioURL, setAudioURL] = useState<string | undefined>();
    const [leftTime, setLeftTime] = useState(0);
    const [rightTime, setRightTime] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const frameRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
            }
            stream && stream.getTracks().forEach((track) => track.stop());
        };
    }, [mediaRecorder, stream]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            setStream(stream);
            const audioContext = new AudioContext();
            const source = audioContext.createMediaStreamSource(stream);
            const analyzer = audioContext.createAnalyser();
            analyzer.fftSize = 2048;
            const bufferLength = analyzer.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            source.connect(analyzer);

            const mediaRecorderInstance = new MediaRecorder(stream);
            setMediaRecorder(mediaRecorderInstance);
            let audioChunks: Blob[] = [];

            mediaRecorderInstance.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            mediaRecorderInstance.start();
            setLeftTime(0);
            const intervalId = setInterval(() => {
                setLeftTime((prevDuration) => prevDuration + 1000);
            }, 1000);
            // Set a timer to stop recording after 3 minutes (180000 milliseconds)
            setTimeout(() => {
                if (mediaRecorderInstance.state !== 'inactive') {
                    mediaRecorderInstance.stop();
                }
            }, data.constraint);

            mediaRecorderInstance.onstop = () => {
                // Dừng mọi tracks của stream để không còn sử dụng microphone nữa.
                stream.getTracks().forEach((track) => track.stop());

                // Xử lý các phần tử audio như trước đây.
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                setAudioURL(URL.createObjectURL(audioBlob));
                clearInterval(intervalId);
                audioChunks = [];
            };

            const canvas = document.getElementById('visualizer') as HTMLCanvasElement;
            if (!canvas) {
                console.log('Canvas is null');
                return;
            }
            canvas.height = 28;
            const canvasContext = canvas.getContext('2d');
            if (!canvasContext) {
                console.log('canvasContext is null');
                return;
            }

            const draw = () => {
                const frameId = requestAnimationFrame(draw);

                analyzer.getByteFrequencyData(dataArray); // Lấy dữ liệu tần suất

                // Xóa canvas trước khi vẽ mới
                canvasContext.clearRect(0, 0, canvas.width, canvas.height);

                // Định nghĩa chiều rộng của mỗi cột (bin) và khoảng cách giữa các cột
                const barWidth = (canvas.width / bufferLength) * 4;
                const maxBarHeight = canvas.height * 2;
                let barHeight;
                let x = 0;

                for (let i = 0; i < bufferLength; i++) {
                    // Tính chiều cao của bar, không quá 80% canvas.height
                    barHeight = (dataArray[i] / 255) * maxBarHeight;

                    // Đặt màu cho cột
                    canvasContext.fillStyle = '#FA8050';

                    // Vẽ cột đối xứng qua trục nằm giữa canvas
                    canvasContext.fillRect(x, (canvas.height - barHeight) / 2, barWidth, barHeight);

                    // Thêm 1 pixel để tạo khoảng cách giữa các cột
                    x += barWidth + 1;
                }
                frameRef.current = frameId;
            };
            draw();
        } catch (err) {
            console.error('Error accessing the microphone', err);
        }
    };

    const handleStart = useCallback(() => {
        audioURL && setAudioURL(undefined);
        isPlaying && setIsPlaying(false);
        setIsRecording(true);
        startRecording();
    }, [audioURL, isPlaying]);

    const handleStop = useCallback(() => {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            setLeftTime((currentLeftTime) => {
                setRightTime(currentLeftTime);
                return 0;
            });
            setMediaRecorder(null);
            frameRef.current && cancelAnimationFrame(frameRef.current);
            setIsRecording(false);
        }
    }, [mediaRecorder]);

    const handlePlayPause = useCallback(() => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
                setIsPlaying(true);
                audio.ontimeupdate = () => setLeftTime(audio.currentTime * 1000);
            }
            setIsPlaying(!isPlaying);
        }
    }, [isPlaying]);

    const handleReset = () => {
        setLeftTime(0);
        setRightTime(0);
        handleStart();
    };

    const startProps: IconButtonProps = (() => {
        if (isRecording) {
            return { ariaLabel: 'stop', Icon: <TbPlayerStopFilled />, onPress: handleStop, color: 'danger' };
        } else if (isPlaying) {
            return {
                ariaLabel: 'pause',
                Icon: <TbPlayerPauseFilled />,
                onPress: handlePlayPause,
                color: 'warning',
            };
        } else if (audioURL) {
            return { ariaLabel: 'play', Icon: <TbPlayerPlayFilled />, onPress: handlePlayPause, color: 'success' };
        } else {
            return { ariaLabel: 'recording', Icon: <TbMicrophone />, onPress: handleStart, color: 'default' };
        }
    })();

    return (
        <div className="relative flex items-center justify-around gap-6 rounded-full border bg-white p-4 shadow-none">
            <IconButton {...startProps} />

            <p>{formatTime(leftTime)}</p>

            {audioURL ? (
                <Progress
                    aria-label="progress"
                    className="h-2"
                    color="success"
                    size="md"
                    value={(leftTime / rightTime) * 100}
                />
            ) : (
                <canvas
                    ref={canvasRef}
                    id="visualizer"
                    className="hidden flex-1 md:block"
                    width={400}
                    height={40}
                ></canvas>
            )}

            <audio ref={audioRef} src={audioURL} onEnded={() => setIsPlaying(false)} className="hidden" controls />

            <p>{audioURL ? formatTime(rightTime) : formatTime(data.constraint)}</p>
            <IconButton ariaLabel="Reset" onPress={handleReset} Icon={<LiaUndoAltSolid />} isDisabled={!audioURL} />
        </div>
    );
};

export default AudioRecorder;
