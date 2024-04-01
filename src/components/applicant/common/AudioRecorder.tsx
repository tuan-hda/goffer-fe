/* eslint-disable react/jsx-no-undef */
import { Button, Progress } from '@nextui-org/react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { TbMicrophone, TbPlayerPauseFilled, TbPlayerPlayFilled, TbPlayerStopFilled } from 'react-icons/tb';
import { LiaUndoAltSolid } from 'react-icons/lia';

interface StartProps {
    Icon: ReactNode;
    color: 'default' | 'danger' | 'success' | 'warning';
    event: () => void;
}

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const AudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);
    const [audioURL, setAudioURL] = useState<string | undefined>();
    const [leftTime, setLeftTime] = useState(0);
    const [rightTime, setRightTime] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        // Hàm làm sạch khi component unmount
        return () => {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
            }
            if (stream) {
                stream.getTracks().forEach((track) => track.stop());
            }
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

            const newMediaRecorder = new MediaRecorder(stream);
            setMediaRecorder(newMediaRecorder);
            let audioChunks: Blob[] = [];

            newMediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            newMediaRecorder.start();
            setLeftTime(0);
            const intervalId = setInterval(() => {
                setLeftTime((prevDuration) => prevDuration + 1);
            }, 1000);
            // Set a timer to stop recording after 3 minutes (180000 milliseconds)
            setTimeout(() => {
                if (newMediaRecorder.state !== 'inactive') {
                    newMediaRecorder.stop();
                }
            }, 180000);

            newMediaRecorder.onstop = () => {
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
                const barWidth = (canvas.width / bufferLength) * 6;
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
                    x += barWidth + 2;
                }
                setAnimationFrameId(frameId);
            };
            draw();
        } catch (err) {
            console.error('Error accessing the microphone', err);
        }
    };

    const handleStart = () => {
        // It's a good idea to ask the user before starting recording
        setAudioURL(undefined);
        setIsPlaying(false);
        setIsRecording(true);
        startRecording();
    };

    const handleStop = () => {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
            setLeftTime((currentLeftTime) => {
                setRightTime(currentLeftTime);
                return 0;
            });
            setMediaRecorder(null);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId); // Hủy requestAnimationFrame sử dụng frame ID
            }
            setIsRecording(false);
        }
    };

    const handlePlay = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                audio.play();
                setIsPlaying(true);
                console.log('first');
                audio.ontimeupdate = () => {
                    setLeftTime(audio.currentTime);
                    console.log('playing');
                };
            }
        }
    };

    const handleEnded = () => {
        setLeftTime(0);
        setIsPlaying(false);
    };

    const starts: StartProps[] = [
        {
            Icon: <TbPlayerPlayFilled />,
            event: handlePlay,
            color: 'success',
        },
        {
            Icon: <TbPlayerStopFilled />,
            event: handleStop,
            color: 'danger',
        },
        {
            Icon: <TbMicrophone />,
            event: handleStart,
            color: 'default',
        },
        {
            Icon: <TbPlayerPauseFilled />,
            event: handlePlay,
            color: 'warning',
        },
    ];

    const getStart = () => {
        if (audioURL) return isPlaying ? starts[3] : starts[0];
        else if (isRecording) return starts[1];
        else return starts[2];
    };

    return (
        <div className="relative flex items-center justify-around gap-6 rounded-full border bg-pale p-4 shadow-md">
            <Button onPress={getStart().event} isIconOnly variant="flat" color={getStart().color} radius="full">
                {getStart().Icon}
            </Button>
            <p>{formatTime(leftTime)}</p>

            {audioURL ? (
                <Progress color="success" size="md" value={(leftTime / rightTime) * 100} />
            ) : (
                <canvas
                    ref={canvasRef}
                    id="visualizer"
                    className="hidden flex-1 md:block"
                    width={400}
                    height={40}
                ></canvas>
            )}

            <audio src={audioURL} ref={audioRef} className="hidden" controls onEnded={handleEnded}>
                <track kind="captions" />
            </audio>

            <p>{audioURL ? formatTime(rightTime) : '3:00'}</p>
            <Button isDisabled={!audioURL} onPress={handleStart} isIconOnly variant="flat" radius="full">
                <LiaUndoAltSolid />
            </Button>
        </div>
    );
};

export default AudioRecorder;
