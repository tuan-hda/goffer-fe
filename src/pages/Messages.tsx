import { DetailsPanel, MessagePanel, RoomList } from '@/components/messages';
import { Channel, Thread, Window } from 'stream-chat-react';
import { EmojiPicker } from 'stream-chat-react/emojis';
import { init, SearchIndex } from 'emoji-mart';
import data from '@emoji-mart/data';
import 'stream-chat-react/dist/css/v2/index.css';
import { Spinner } from '@nextui-org/react';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { useEffect } from 'react';
import { client, connectStreamUser } from '@/utils/streamchat';

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

const Messages = () => {
    const { data: user } = useSelfProfileQuery();

    useEffect(() => {
        if (user && client) connectStreamUser(user);
    }, [user, client]);

    if (!client || !user)
        return (
            <div className="flex h-screen w-full">
                <Spinner className="m-auto" />
            </div>
        );

    return (
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
    );
};

export default Messages;
