import { DetailsPanel, MessagePanel, RoomList } from '@/components/messages';
const Messages = () => {
    return (
        <div className="h-screen text-sm">
            <div className="flex h-full">
                <div className="h-full w-[360px]">
                    <RoomList />
                </div>
                <div className="h-full border-r border-r-[#EEEEF0]" />
                <div className="h-full flex-1">
                    <MessagePanel />
                </div>
                <div className="h-full border-r border-r-[#EEEEF0]" />
                <div className="flex h-full w-[360px] flex-col">
                    <DetailsPanel />
                </div>
            </div>
        </div>
    );
};

export default Messages;
