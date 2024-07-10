import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { TbLoader, TbSparkles } from 'react-icons/tb';
import { useRef, useState } from 'react';
import catchAsync from '@/utils/catchAsync';
import classNames from 'classnames';
import { generateResponseService } from '@/services/genai.service';
import { toast } from 'sonner';
import { IoSparkles } from 'react-icons/io5';
import GenAIComposer from './GenAIComposer';

type GenAIProviderProps = {
    children?: React.ReactNode;
    title: string;
    systemMessage: string;
    onResponse: (result: string) => void;
    maxTokens?: number;
    min?: number;
    maxWidth?: string;
};

const GenAIProvider = ({
    children,
    title,
    onResponse,
    systemMessage,
    min,
    maxTokens,
    maxWidth,
}: GenAIProviderProps) => {
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [opened, setOpened] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    const isAborted = useRef(false);

    const clear = () => {
        setPrompt('');
        setLoading(false);
        isAborted.current = false;
    };

    const handleSubmit = () =>
        catchAsync(
            async () => {
                if (prompt.length < (min || 1)) {
                    toast.error(`Prompt is too short, need at least ${min} characters.`);
                    return;
                }
                setLoading(true);
                const response = await generateResponseService(prompt, systemMessage, maxTokens);
                if (!isAborted.current) onResponse(response.response);
                setOpened(false);
                clear();
            },
            () => {
                setLoading(false);
            },
        );

    const handleOpenChange = (isOpen: boolean) => {
        setOpened(isOpen);
    };

    return (
        <AlertDialog open={opened} onOpenChange={handleOpenChange}>
            <AlertDialogTrigger asChild>
                <div>{children}</div>
            </AlertDialogTrigger>
            <AlertDialogContent
                className={classNames('max-w-[700px] !rounded-3xl px-8 py-6', loading && 'aspect-square w-[200px]')}
            >
                {loading ? (
                    <div className="flex h-[100px] flex-col items-center justify-center gap-4">
                        <span className="text-center text-sm">Generating response...</span>
                        <TbLoader className="m-auto animate-spin text-2xl" />
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <AlertDialogHeader>
                            <div className="mb-8 mt-4 flex flex-grow items-center justify-center gap-6">
                                <IoSparkles className="h-9 w-9" />
                                <p className="font-serif text-4xl">{title}</p>
                            </div>
                        </AlertDialogHeader>
                        <GenAIComposer />
                        {/* <Textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="mt-2 min-h-[120px]"
                            placeholder="Your prompt here"
                        /> */}
                        {/* {min && <div className="ml-auto text-sm">{prompt.length} chars</div>} */}
                    </div>
                )}
                <AlertDialogFooter>
                    <AlertDialogCancel
                        onClick={() => {
                            isAborted.current = true;
                        }}
                        className={classNames(loading && 'w-full')}
                        ref={ref}
                    >
                        Cancel
                    </AlertDialogCancel>

                    {!loading && (
                        <Button onClick={handleSubmit} variant="black">
                            <TbSparkles className="mr-2 text-lg" />
                            Generate
                        </Button>
                    )}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default GenAIProvider;
