import { DetailsPanel, MessagePanel, RoomList } from '@/components/messages';

import { useEffect } from 'react';
import type { ChannelFilters, ChannelSort, ChannelOptions, User } from 'stream-chat';
import {
    useCreateChatClient,
    Chat,
    Channel,
    ChannelHeader,
    ChannelList,
    MessageInput,
    MessageList,
    Thread,
    Window,
} from 'stream-chat-react';
import { EmojiPicker } from 'stream-chat-react/emojis';

import { init, SearchIndex } from 'emoji-mart';
import data from '@emoji-mart/data';

// your Stream app information
const apiKey = 't442dfkucxcj';
const userId = 'little-wood-9';
const userName = 'Little Wood';
const userToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGl0dGxlLXdvb2QtOSJ9.CqE75Jdcw_Gv2CySKWsgkGd2ECVe7dR3_Knxap5mlZg';

const user: User = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
};

init({ data });

const Messages = () => {
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });

    if (!client) return <div>Setting up client & connection...</div>;

    // return (
    //     <Chat client={client}>
    //         <ChannelList filters={filters} sort={sort} options={options} />
    //         <Channel EmojiPicker={EmojiPicker} emojiSearchIndex={SearchIndex}>
    //             <Window>
    //                 <ChannelHeader />
    //                 <MessageList />
    //                 <MessageInput />
    //             </Window>
    //             <Thread />
    //         </Channel>
    //     </Chat>
    // );
    return (
        <Chat client={client}>
            <div className="h-screen text-sm">
                <div className="flex h-full">
                    <div className="h-full w-[360px]">
                        <RoomList />
                    </div>
                    <div className="h-full border-r border-r-[#EEEEF0]" />
                    <div className="h-full flex-1">
                        <Channel
                            // Message={CustomMessage}
                            EmojiPicker={EmojiPicker}
                            emojiSearchIndex={SearchIndex}
                        >
                            <Window>
                                <MessagePanel />
                            </Window>
                        </Channel>
                    </div>
                    <div className="h-full border-r border-r-[#EEEEF0]" />
                    <div className="flex h-full w-[360px] flex-col">
                        <DetailsPanel />
                    </div>
                </div>
            </div>
        </Chat>
    );
};

export default Messages;
