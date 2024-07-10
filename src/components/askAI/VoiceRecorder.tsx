import { useAudioRecorder } from 'react-audio-voice-recorder';
import { Button } from '../ui/button';
import { TbLoader, TbMicrophone } from 'react-icons/tb';
import { IoStopCircle } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { formatMinSec } from '@/utils/time';
import catchAsync from '@/utils/catchAsync';
import { uploadFileService } from '@/services/file.service';
import { speechToText } from '@/services/speech.service';
import { isAxiosError } from 'axios';
import { toast } from 'sonner';

type Props = {
    onFinish?: (file: File) => void;
    onTranscribe?: (text: string) => void;
};

const VoiceRecorder = ({ onFinish, onTranscribe }: Props) => {
    const {
        startRecording,
        stopRecording,
        // togglePauseResume,
        recordingBlob,
        isRecording,
        // isPaused,
        recordingTime,
        // mediaRecorder,
    } = useAudioRecorder();
    const [loading, setLoading] = useState(false);

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

    const doTranscribe = async (file: File, onTranscribe: (text: string) => void) => {
        try {
            setLoading(true);
            const upload = await uploadFileService(file, 'audio');
            const url = upload.data.file.url;
            const transcript = await speechToText(url);
            onTranscribe(transcript);
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response?.data?.message || 'Something went wrong. Please try again later.');
            } else {
                toast.error('Something went wrong. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (recordingTime === 120) {
            stopRecording();
        }
    }, [recordingTime]);

    useEffect(() => {
        if (recordingBlob) {
            if (onFinish) onFinish(createAudioFile(recordingBlob));
            if (onTranscribe) {
                doTranscribe(createAudioFile(recordingBlob), onTranscribe);
            }
        }
    }, [recordingBlob]);

    if (loading) return <TbLoader className="m-[6px] animate-spin text-lg" />;

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
