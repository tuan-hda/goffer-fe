import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { client, connectStreamUser } from '@/utils/streamchat';
import { useEffect } from 'react';
import { Chat } from 'stream-chat-react';

type Props = {
    children: React.ReactNode;
};

const ChatProvider = ({ children }: Props) => {
    const { data: user } = useSelfProfileQuery();

    useEffect(() => {
        if (user) connectStreamUser(user);
    }, [user]);

    return <Chat client={client}>{children}</Chat>;
};

export default ChatProvider;
