'use client';

import { ComposerPrimitive, MessagePrimitive, ThreadPrimitive } from '@assistant-ui/react';
import type { FC } from 'react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { SendHorizonalIcon } from 'lucide-react';
import { HiMiniPaperAirplane } from 'react-icons/hi2';

export const Thread: FC = () => {
    return (
        <ThreadPrimitive.Root className="flex h-full max-h-full flex-col items-center pb-3">
            <ThreadPrimitive.Viewport className="flex max-h-[500px] w-full flex-grow flex-col items-center overflow-y-auto scroll-smooth px-4 pt-12">
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

            <Composer />
        </ThreadPrimitive.Root>
    );
};

const ThreadEmpty: FC = () => {
    return (
        <div className="flex flex-grow flex-col items-center justify-center">
            <Avatar>
                <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <p className="my-4 text-xl">I'm your AI assistant. Ask me anything about hiring and Goffer.</p>
        </div>
    );
};

const Composer: FC = () => {
    return (
        <ComposerPrimitive.Root className="flex w-[calc(100%-32px)] max-w-[42rem] items-end rounded-2xl border p-0.5 transition-shadow focus-within:shadow-sm">
            <ComposerPrimitive.Input
                placeholder="Write a message..."
                className="h-12 max-h-40 flex-grow resize-none bg-transparent p-3.5 text-base outline-none placeholder:text-foreground/50"
            />
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
};

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
                <p className="max-w-xl whitespace-pre-line break-words font-serif text-[19px] text-foreground">
                    <MessagePrimitive.Content />
                </p>
            </div>
        </MessagePrimitive.Root>
    );
};
