import { MessageList as StreamMessageList } from 'stream-chat-react';
import Message from './Message';

const MessageList = () => {
    return (
        <div className="flex min-h-0 flex-1 flex-col-reverse overflow-y-auto text-text">
            <StreamMessageList Message={Message} />
            <div className="min-h-[72px] w-full flex-1" />
        </div>
    );
};

export default MessageList;
