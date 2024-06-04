import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { HiPaperAirplane } from 'react-icons/hi';
import MessageList from './MessageList';
import { Channel, Window, useChannelStateContext } from 'stream-chat-react';
import { EmojiPicker } from 'stream-chat-react/emojis';
import { init, SearchIndex } from 'emoji-mart';
import data from '@emoji-mart/data';

init({ data });

const MessagePanel = () => {
    const { channel } = useChannelStateContext();
    console.log('🚀 ~ file: MessagePanel.tsx:14 ~ MessagePanel ~ channel:', channel);
    return (
        <div className="relative h-screen">
            <img src="/gradient.png" className="absolute h-full w-full object-cover" />
            <div className="relative z-[1] flex h-full w-full flex-col bg-white/90 backdrop-blur-3xl">
                <div className="absolute top-0 z-[100] flex h-[66px] w-full items-center border-b bg-white/40 px-8 backdrop-blur-md">
                    <p className="font-serif text-2xl font-bold">{channel.data?.name}</p>
                </div>
                <MessageList />
                <div className="relative mb-[1px] flex h-[72px] min-h-[72px] w-full items-center border-t bg-white">
                    <Input
                        placeholder="Write your reply here..."
                        className="h-full w-full rounded-none border-0 pl-8 pr-[92px] tracking-wide"
                    />
                    <Button variant="black" size="icon" className="absolute right-8 h-8 w-8 rounded-full p-0">
                        <HiPaperAirplane className="-mr-0.5 -mt-0.5 rotate-45 text-lg" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MessagePanel;
