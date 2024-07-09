import { useAudioRecorder } from 'react-audio-voice-recorder';
import { Button } from '../ui/button';
import { TbMicrophone } from 'react-icons/tb';
import { IoStopCircle } from 'react-icons/io5';
import { useEffect } from 'react';
import { formatMinSec } from '@/utils/time';

type Props = {
    onFinish?: (file: File) => void;
};

const VoiceRecorder = ({ onFinish }: Props) => {
    const {
        startRecording,
        stopRecording,
        togglePauseResume,
        recordingBlob,
        isRecording,
        isPaused,
        recordingTime,
        mediaRecorder,
    } = useAudioRecorder();

    const handleRecord = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    const createAudioFile = (blob: any) => {
        const file = new File([blob], 'audio.webm', { type: blob.type });
        return file;
    };

    useEffect(() => {
        if (recordingTime === 120) {
            stopRecording();
        }
    }, [recordingTime]);

    useEffect(() => {
        if (recordingBlob && onFinish) {
            onFinish(createAudioFile(recordingBlob));
        }
    }, [recordingBlob]);

    return (
        <Button
            onClick={handleRecord}
            type="button"
            size="sm"
            variant="ghost"
            className="gap-1 px-2 text-sm text-black/60"
        >
            {isRecording ? (
                <>
                    <IoStopCircle className="text-base text-red-500" /> {formatMinSec(recordingTime)}
                </>
            ) : (
                <>
                    <TbMicrophone className="text-base" /> Voice
                </>
            )}
        </Button>
    );
};
export default VoiceRecorder;
