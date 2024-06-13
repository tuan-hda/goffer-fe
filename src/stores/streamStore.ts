import config from '@/configs/config';
import { DefaultGenerics, StreamChat } from 'stream-chat';
import { create } from 'zustand';

type State = {
    client?: StreamChat<DefaultGenerics>;
};

type Action = {
    initClient: () => Promise<void>;
};

const useStreamStore = create<State & Action>()((set, get) => ({
    client: undefined,
    initClient: async () => {
        if (get().client) return;
        const client = StreamChat.getInstance(config.STREAM_KEY);
        await client.connectUser(
            {
                id: 'admin',
                name: 'admin',
            },
            client.devToken('admin'),
        );
        set(() => ({
            client,
        }));
    },
}));

export default useStreamStore;
