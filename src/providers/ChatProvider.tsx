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

const sort: ChannelSort = { last_message_at: -1 };
const filters: ChannelFilters = {
    type: 'messaging',
    members: { $in: [userId] },
};
const options: ChannelOptions = {
    limit: 10,
};

init({ data });
const ChatProvider = () => {
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });

    if (!client) return <div>Setting up client & connection...</div>;

    return (
        <Chat client={client}>
            <ChannelList filters={filters} sort={sort} options={options} />
            <Channel EmojiPicker={EmojiPicker} emojiSearchIndex={SearchIndex}>
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput />
                </Window>
                <Thread />
            </Channel>
        </Chat>
    );
};

export default ChatProvider;
