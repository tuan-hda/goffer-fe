import { Button, Progress } from '@nextui-org/react';
import { Dispatch, ReactNode, SetStateAction, memo, useCallback, useEffect, useRef, useState } from 'react';
import { TbMicrophone, TbPlayerPauseFilled, TbPlayerPlayFilled, TbPlayerStopFilled } from 'react-icons/tb';
import { LiaUndoAltSolid } from 'react-icons/lia';
import moment from 'moment';
import classNames from 'classnames';
import { uploadFileService } from '@/services/file.service';
import { isAxiosError } from 'axios';
import { toast } from 'sonner';
import { AnswerResponse } from '@/types/answer.type';
import { Question } from '@/types/question.type';
import useApplyStore from '@/stores/applyStore';

interface IconButtonProps {
    ariaLabel: string;
    color?: 'default' | 'danger' | 'success' | 'warning';
    onPress?: () => void;
    Icon: ReactNode;
    isDisabled?: boolean;
}

const formatTime = (x: number) => {
    const d = moment.duration(x, 'seconds');
    const minutes = Math.floor(d.asMinutes());
    const seconds = Math.floor(d.asSeconds()) % 60;
    return `${minutes < 10 ? minutes : `${minutes}`}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const uploadAudio = async (blobUrl: string) => {
    try {
        const response = await fetch(blobUrl);
        const blob = await response.blob();
        const file = new File([blob], 'audio.webm', { type: blob.type });

        const result = await uploadFileService(file, 'audio');
        return result.data;
    } catch (error) {
        console.log('Error uploading file:', error);
        if (isAxiosError(error)) {
            toast.error(error.response?.data.message || 'Error uploading file. Please try again.');
            return;
        }
    }
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
    audio?: AnswerResponse;
    question: Question;
    mock?: boolean;
    outerSetLeftTime?: Dispatch<SetStateAction<number>>;
}

const AudioRecorder = ({ audio, question, mock, outerSetLeftTime }: Props) => {
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

    const { phase, setAnswer, setLoading } = useApplyStore();
    // const constraint = question.constraint ?? 180;

    useEffect(() => {
        if (mock) {
            setAudioURL(
                'https://res.cloudinary.com/doxsstgkc/video/upload/v1715399372/Y2meta.app_-_Tell_Me_About_Yourself_-_Sample_Answer_Food_Service___Hospitality_128_kbps_zrxqkk.mp3',
            );
            setRightTime(47);
        }
    }, [mock]);

    useEffect(() => {
        const audioInstall = audioRef.current;

        const handleError = () => {
            console.error('Error loading the audio file.');
            setAudioURL(undefined);
        };

        if (!mock && audioInstall && audio) {
            audioInstall.src = audio.url;
            setAudioURL(audio.url);
            setRightTime(audio.duration ? audio.duration : 0);
            audioInstall.addEventListener('error', handleError);
        } else if (!mock) {
            setAudioURL(undefined);
            setRightTime(0);
        }

        return () => {
            audioInstall && audioInstall.removeEventListener('error', handleError);
        };
    }, [audio]);

    useEffect(() => {
        if (audioURL) {
            setAnswer({
                url: audioURL,
                duration: rightTime,
                question: question.id,
                ref: audio?.ref!,
            });
        }
    }, [audioURL]);

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
                setLeftTime((prevDuration) => prevDuration + 1);
            }, 1000);
            // Set a timer to stop recording after 3 minutes (180000 milliseconds)
            // setTimeout(() => { // Why do we need this?
            //     if (mediaRecorderInstance.state !== 'inactive') {
            //         mediaRecorderInstance.stop();
            //     }
            // }, constraint * 1000);

            mediaRecorderInstance.onstop = () => {
                // Dừng mọi tracks của stream để không còn sử dụng microphone nữa.
                stream.getTracks().forEach((track) => track.stop());

                // Xử lý các phần tử audio.
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
        if (audioURL) {
            URL.revokeObjectURL(audioURL);
            setAudioURL(undefined);
        }
        isPlaying && setIsPlaying(false);
        setIsRecording(true);
        setLoading(true);
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
            setLoading(false);
        }
    }, [mediaRecorder]);

    const handlePlayPause = useCallback(() => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
                audio.ontimeupdate = () => {
                    setLeftTime(audio.currentTime);
                    outerSetLeftTime && outerSetLeftTime(audio.currentTime);
                };
            }
            setIsPlaying(!isPlaying);
        }
    }, [isPlaying]);

    const handleReset = () => {
        if (isPlaying && audioRef.current) audioRef.current.pause();
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
        <div>
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
                    />
                )}

                <audio ref={audioRef} src={audioURL} onEnded={() => setIsPlaying(false)} className="hidden" controls />

                <p>{formatTime(audioURL ? rightTime : 600)}</p>
                <IconButton
                    ariaLabel="Reset"
                    onPress={handleReset}
                    Icon={<LiaUndoAltSolid />}
                    isDisabled={!audioURL || phase !== 'init'}
                />
            </div>
            <p
                className={classNames(
                    'my-3 text-center text-sm',
                    !isRecording && 0 < rightTime && rightTime < (question.constraint ?? 20) && 'text-danger',
                )}
            >
                Recording must be at least {question.constraint} seconds long.
            </p>
        </div>
    );
};

export default memo(
    AudioRecorder,
    (prevProps, nextProps) =>
        prevProps.audio?.url === nextProps.audio?.url &&
        prevProps.mock === nextProps.mock &&
        prevProps.question.id === nextProps.question.id,
);
