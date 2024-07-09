import { ComposerPrimitive, MessagePrimitive, ThreadPrimitive } from '@assistant-ui/react';
import { forwardRef, Ref, useRef, useState, type FC } from 'react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { HiMiniPaperAirplane } from 'react-icons/hi2';
import { IoSparkles } from 'react-icons/io5';
import { Button } from '../button';
import { TbLoader, TbMicrophone, TbPaperclip } from 'react-icons/tb';
import useChatbotStore from '@/stores/chatbotStore';
import Suggestions from './suggestions';
import VoiceRecorder from '@/components/askAI/VoiceRecorder';
import catchAsync from '@/utils/catchAsync';
import { uploadFileService } from '@/services/file.service';
import { speechToText } from '@/services/speech.service';

type ThreadProps = {
    value?: string;
    onChange?: (value: string) => void;
    extensions?: {
        suggestions?: boolean;
    };
};

export const Thread = ({ value, onChange, extensions }: ThreadProps) => {
    const ref = useRef<HTMLTextAreaElement>(null);
    const hasMessage = useChatbotStore((state) => state.hasMessage);

    const triggerChangeEvent = (value: string) => {
        if (ref.current) {
            ref.current.value = value;
            ref.current.dispatchEvent(new Event('input', { bubbles: true }));
        }
    };

    return (
        <ThreadPrimitive.Root className="flex h-full max-h-full flex-col items-center pb-5 pt-2">
            <ThreadPrimitive.Viewport className="flex max-h-[calc(90vh-300px)] w-full flex-grow flex-col items-center overflow-y-auto scroll-smooth px-6">
                <ThreadPrimitive.Empty>
                    <ThreadEmpty />
                </ThreadPrimitive.Empty>

                <ThreadPrimitive.Messages
                    components={{
                        UserMessage,
                        AssistantMessage,
                    }}
                />
            </ThreadPrimitive.Viewport>

            <Composer ref={ref} value={value} onChange={onChange} />
            {extensions?.suggestions && !hasMessage && (
                <Suggestions
                    suggestions={[
                        'What are subscription plans in Goffer?',
                        'How to create a new job?',
                        'Guide me how to improve my resume.',
                    ]}
                    onChange={triggerChangeEvent}
                />
            )}
        </ThreadPrimitive.Root>
    );
};

const ThreadEmpty: FC = () => {
    return (
        <div className="mb-8 mt-4 flex flex-grow items-center justify-center gap-6">
            <IoSparkles className="h-9 w-9" />
            <p className="font-serif text-4xl">Hello, I'm your Assistant</p>
        </div>
    );
};

type ComposerProps = {
    value?: string;
    onChange?: (value: string) => void;
};

const Composer = forwardRef(({ value, onChange }: ComposerProps, ref: Ref<HTMLTextAreaElement>) => {
    const [node, setNode] = useState<HTMLTextAreaElement | null>(null);
    const [loading, setLoading] = useState(false);

    const transcribe = (file: File) =>
        catchAsync(
            async () => {
                if (!node) return;
                setLoading(true);
                const upload = await uploadFileService(file, 'audio');
                const url = upload.data.file.url;
                const transcript = await speechToText(url);
                onChange?.(transcript);
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <ComposerPrimitive.Root className="relative flex w-[calc(100%-32px)] max-w-[42rem] items-end rounded-2xl border p-0.5 transition-shadow focus-within:shadow-medium">
            <ComposerPrimitive.Input
                ref={(el) => {
                    if (ref) {
                        (ref as any).current = el;
                    }
                    setNode(el);
                }}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                placeholder="How can I help you today?"
                className="h-12 max-h-80 min-h-28 flex-grow resize-none bg-transparent p-3.5 text-base outline-none placeholder:text-foreground/50"
            />
            <div className="absolute bottom-2 left-2 flex items-center gap-1">
                <Button type="button" size="sm" variant="ghost" className="gap-1 px-2 text-sm text-black/60">
                    <TbPaperclip className="text-base" /> Attach
                </Button>
                {loading ? <TbLoader className="animate-spin text-lg" /> : <VoiceRecorder onFinish={transcribe} />}
            </div>
            <ThreadPrimitive.If running={false}>
                <ComposerPrimitive.Send className="m-2 flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-2xl font-bold shadow transition-opacity disabled:opacity-10">
                    <HiMiniPaperAirplane className="text-base text-background" />
                </ComposerPrimitive.Send>
            </ThreadPrimitive.If>
            <ThreadPrimitive.If running>
                <ComposerPrimitive.Cancel className="m-3.5 flex size-5 items-center justify-center rounded-full border-2 border-foreground">
                    <div className="size-2 rounded-[1px] bg-foreground" />
                </ComposerPrimitive.Cancel>
            </ThreadPrimitive.If>
        </ComposerPrimitive.Root>
    );
});

const UserMessage: FC = () => {
    return (
        <MessagePrimitive.Root className="relative mb-6 flex w-full max-w-2xl flex-col items-end gap-2 pl-24">
            <div className="relative mr-1 flex items-start gap-3">
                <p className="max-w-xl whitespace-pre-line break-words rounded-3xl bg-foreground/5 px-5 py-2.5 text-foreground">
                    <MessagePrimitive.Content />
                </p>
            </div>
        </MessagePrimitive.Root>
    );
};

const AssistantMessage: FC = () => {
    return (
        <MessagePrimitive.Root className="relative mb-6 flex w-full max-w-2xl gap-3">
            <Avatar>
                <AvatarFallback>A</AvatarFallback>
            </Avatar>

            <div className="flex-grow rounded-2xl bg-gradient-to-b from-[#F6F6F6] to-[#F3F2ED] p-4 shadow-small">
                <MessagePrimitive.InProgress className="inline-block size-3 animate-pulse rounded-full bg-foreground" />
                <p className="max-w-xl whitespace-pre-line break-words text-base text-foreground">
                    <MessagePrimitive.Content />
                </p>
            </div>
        </MessagePrimitive.Root>
    );
};
