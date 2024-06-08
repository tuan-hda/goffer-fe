import config from '@/configs/config';
import { User } from '@/types/user.type';
import { Channel, StreamChat } from 'stream-chat';

export const client = new StreamChat(config.STREAM_KEY);

export const connectStreamUser = async (user: User) => {
    await client.connectUser(
        {
            id: user.id,
            name: user.name,
            image: user.avatar,
        },
        client.devToken(user.id),
    );
};

export const getOtherUser = (channel: Channel) => {
    return Object.values(channel.state.members).find((member) => member.user_id !== client.userID);
};

export const getUnread = async (userId?: string) => {
    const numUnread = client.getUnreadCount(userId);
    return (await numUnread).total_unread_count;
};
