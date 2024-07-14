import { MessageInput, MessageList, useChannelStateContext } from 'stream-chat-react';
import { init } from 'emoji-mart';
import data from '@emoji-mart/data';
import 'stream-chat-react/dist/css/v2/index.css';
import { getOtherUser } from '@/utils/streamchat';

init({ data });

const MessagePanel = () => {
    const { channel } = useChannelStateContext();
    const otherUser = getOtherUser(channel);

    return (
        <div className="relative h-full">
            <img src="/gradient.png" className="absolute h-full w-full object-cover" />
            <div className="relative z-[1] flex h-full w-full flex-col bg-white/90 pt-20 backdrop-blur-3xl">
                <div className="absolute top-0 z-[100] flex h-[66px] w-full items-center border-b bg-white/40 px-8 backdrop-blur-md">
                    <p className="font-serif text-2xl font-bold">{otherUser?.user?.name}</p>
                </div>

                <div className="min-h-0 flex-1">
                    <MessageList messageLimit={30} />
                </div>

                <div className="relative mb-[1px] flex min-h-[72px] w-full items-center border-t bg-white">
                    <MessageInput />
                </div>
            </div>
        </div>
    );
};

export default MessagePanel;
