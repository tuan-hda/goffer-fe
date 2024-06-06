import { getOtherUser } from '@/utils/streamchat';
import { Avatar } from '@nextui-org/react';
import moment from 'moment';
import { ChannelPreviewProps } from 'stream-chat-react';

const RoomReview = (props: ChannelPreviewProps) => {
    const { channel, setActiveChannel } = props;

    const { messages } = channel.state;
    const messagePreview = messages[messages.length - 1]?.text?.slice(0, 30);
    const otherUser = getOtherUser(channel);

    return (
        <button
            onClick={() => setActiveChannel?.(channel)}
            className="flex h-[88px] w-full items-center gap-[10px] px-5 text-left"
        >
            <Avatar
                src={otherUser?.user?.image as string}
                classNames={{
                    base: 'rounded-xl',
                }}
            />
            <div className="min-w-0 flex-1">
                <div className="flex w-full items-center justify-between">
                    <p className="text-[13px] font-semibold">{otherUser?.user?.name}</p>
                    <p className="text-xs text-text/50">{moment(channel.data?.last_message_at as string).fromNow()}</p>
                </div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-text/80">{messagePreview}</p>
            </div>
        </button>
    );
};

export default RoomReview;
