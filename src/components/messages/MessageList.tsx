import Message from './Message';

const MessageList = () => {
    return (
        <div className="flex min-h-0 flex-1 flex-col-reverse overflow-y-auto text-text">
            <Message />
            <Message isOwner />
            <Message />
            <Message isOwner />
            <Message />
            <Message isOwner />
            <Message />
            <Message isOwner />
            <Message />
            <Message isOwner />
            <Message />
            <Message isOwner />
            <Message />
            <Message isOwner />
            <Message />
            <Message isOwner />
            <div className="min-h-[72px] w-full flex-1" />
        </div>
    );
};

export default MessageList;
