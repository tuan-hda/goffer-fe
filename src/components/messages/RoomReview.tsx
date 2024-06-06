import { Avatar } from '@nextui-org/react';
import moment from 'moment';
import { ChannelPreviewProps } from 'stream-chat-react';

const RoomReview = (props: ChannelPreviewProps) => {
    const { channel, setActiveChannel } = props;

    const { messages } = channel.state;
    const messagePreview = messages[messages.length - 1]?.text?.slice(0, 30);

    return (
        <button
            onClick={() => setActiveChannel?.(channel)}
            className="flex h-[88px] w-full items-center gap-[10px] px-5 text-left"
        >
            <Avatar
                src={channel.data?.image}
                classNames={{
                    base: 'rounded-xl',
                }}
            />
            <div className="min-w-0 flex-1">
                <div className="flex w-full items-center justify-between">
                    <p className="text-[13px] font-semibold">{channel.data?.name || 'Unnamed Channel'}</p>
                    <p className="text-xs text-text/50">{moment(channel.data?.last_message_at as string).fromNow()}</p>
                </div>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-text/80">{messagePreview}</p>
            </div>
        </button>
    );
};

export default RoomReview;
