import { HiMiniPaperAirplane } from 'react-icons/hi2';
import VoiceRecorder from '../askAI/VoiceRecorder';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import { TbLoader } from 'react-icons/tb';

type GenAIComposerProps = {
    value: string;
    setValue: (value: string) => void;
    onSubmit: (() => Promise<void>) | (() => void);
};

const GenAIComposer = ({ value, setValue, onSubmit }: GenAIComposerProps) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            await onSubmit();
        } catch (error) {
            // Do nothing
        }
        setLoading(false);
    };

    return (
        <div className="relative flex w-[calc(100%)] max-w-[42rem] flex-col items-end rounded-2xl border bg-white p-0.5 transition-shadow focus-within:shadow-medium">
            <Textarea
                value={value}
                disabled={loading}
                onChange={loading ? undefined : (e) => setValue(e.target.value)}
                placeholder="Brief description here."
                className="h-12 max-h-80 min-h-20 flex-grow resize-none rounded-2xl border-none bg-transparent p-3.5 text-base shadow-none outline-none placeholder:text-foreground/50 focus-visible:!ring-0"
            />
            <div className="flex w-full pb-2 pl-1 pr-2">
                <div className="mr-auto flex items-center gap-1">
                    <VoiceRecorder onTranscribe={setValue} />
                </div>
                {loading ? (
                    <div className="mr-1 mt-2">
                        <TbLoader className="animate-spin text-xl" />
                    </div>
                ) : (
                    <Button
                        onClick={handleSubmit}
                        className="h-8 w-8 rounded-xl"
                        disabled={!value}
                        variant="black"
                        size="icon"
                    >
                        <HiMiniPaperAirplane className="text-lg text-white" />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default GenAIComposer;
