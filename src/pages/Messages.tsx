import { DetailsPanel, MessagePanel, RoomList } from '@/components/messages';
import { StreamChat, type User } from 'stream-chat';
import { useCreateChatClient, Chat, Channel, Thread, Window } from 'stream-chat-react';
import { EmojiPicker } from 'stream-chat-react/emojis';
import { init, SearchIndex } from 'emoji-mart';
import data from '@emoji-mart/data';
import 'stream-chat-react/dist/css/v2/index.css';
import { Spinner } from '@nextui-org/react';
import config from '@/configs/config';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { User as MyUser } from '@/types/user.type';
import { useEffect } from 'react';

// Test Stream app information
// const apiKey = 't442dfkucxcj';
// const userId = 'little-wood-9';
// const userName = 'Little Wood';
// const userToken =
//     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGl0dGxlLXdvb2QtOSJ9.CqE75Jdcw_Gv2CySKWsgkGd2ECVe7dR3_Knxap5mlZg';

// const user: User = {
//     id: userId,
//     name: userName,
//     image: `https://getstream.io/random_png/?name=${userName}`,
// };

init({ data });

const connectStreamUser = async (client: StreamChat, user: MyUser) => {
    await client.connectUser(
        {
            id: user.id,
            name: user.name,
            image: user.avatar,
        },
        client.devToken(user.id),
    );
};

const Messages = () => {
    const client = new StreamChat(config.STREAM_KEY);
    const { data: user } = useSelfProfileQuery();

    useEffect(() => {
        if (client && user) connectStreamUser(client, user);
    }, [user]);

    if (!client || !user)
        return (
            <div className="flex h-screen w-full">
                <Spinner className="m-auto" />
            </div>
        );

    return (
        <Chat client={client}>
            <div className="h-screen text-sm">
                <div className="flex h-full">
                    <div className="h-full w-[360px]">
                        <RoomList />
                    </div>
                    <div className="h-full border-r border-r-[#EEEEF0]" />
                    <div className="h-full flex-1">
                        <Channel EmojiPicker={EmojiPicker} emojiSearchIndex={SearchIndex}>
                            <Window>
                                <MessagePanel />
                            </Window>
                            <Thread />
                        </Channel>
                    </div>
                    <div className="h-full border-r border-r-[#EEEEF0]" />
                    <div className="flex h-full w-[360px] flex-col">
                        <DetailsPanel user={user} />
                    </div>
                </div>
            </div>
        </Chat>
    );
};

export default Messages;
