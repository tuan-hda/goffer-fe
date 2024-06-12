import { getOtherUser } from '@/utils/streamchat';
import { Avatar } from '@nextui-org/react';
import classNames from 'classnames';
import moment from 'moment';
import { ChannelPreviewProps } from 'stream-chat-react';

const RoomReview = (props: ChannelPreviewProps) => {
    const { channel, setActiveChannel, activeChannel } = props;

    const { messages } = channel.state;
    const messagePreview = messages[messages.length - 1]?.text?.slice(0, 30);
    const otherUser = getOtherUser(channel);

    return (
        <button
            onClick={() => setActiveChannel?.(channel)}
            className={classNames(
                'mx-auto my-2 flex h-20 w-[98%] items-center gap-[10px] rounded-xl px-5 text-left',
                activeChannel?.cid === channel?.cid && 'bg-beige/30',
            )}
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
                    <p className={classNames('text-xs text-text/50', channel.countUnread() > 0 && 'font-semibold')}>
                        {moment(channel.data?.last_message_at as string).fromNow()}
                    </p>
                </div>
                <div className="flex w-full items-center justify-between">
                    <p
                        className={classNames(
                            'overflow-hidden text-ellipsis whitespace-nowrap text-text/80',
                            channel.countUnread() > 0 && 'font-medium text-black',
                        )}
                    >
                        {messagePreview}
                    </p>
                    {channel.countUnread() > 0 && <div className="ml-auto h-2 w-2 rounded-full bg-primary" />}
                </div>
            </div>
        </button>
    );
};

export default RoomReview;
