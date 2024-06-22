import create from 'zustand';
import { Notification } from '@/types/notification.type';
import { toast } from 'sonner';
import { Channel, DefaultGenerics, Event, StreamChat } from 'stream-chat';

interface NotificationState {
    client: StreamChat | null;
    channel: Channel | null;
    notifications: Notification[];
    hasNewNotification: boolean;
    setClient: (client: StreamChat) => void;
    setChannel: (channel: Channel) => void;
    fetchNotifications: (id: string) => void;
    clearNewNotification: () => void;
    disconnectChannel: () => void;
    onNewMessage: (event: Event<DefaultGenerics>) => void;
}

const useNotificationStore = create<NotificationState>((set, get) => ({
    client: null,
    channel: null,
    notifications: [],
    hasNewNotification: false,
    setClient: (client) => set({ client }),
    setChannel: (channel) => set({ channel }),
    fetchNotifications: async (id: string) => {
        const { client, onNewMessage } = get();
        if (!client || !id) return;

        const channel = client.channel('messaging', id);
        const response = await channel.query({
            messages: { limit: 1000 },
        });
        try {
            set({
                notifications: response.messages.reverse().map((message) => ({
                    ...JSON.parse(message.text || '{}'),
                })),
                hasNewNotification: (channel.state.unreadCount || 0) > 0,
            });
        } catch (error) {
            // Handle error if needed
        }

        channel.watch();
        channel.on('message.new', onNewMessage);

        set({ channel });
    },
    clearNewNotification: async () => {
        const { channel } = get();
        if (channel) {
            await channel.markRead();
            set({ hasNewNotification: false });
        }
    },
    disconnectChannel: () => {
        const { channel, onNewMessage } = get();
        if (channel) {
            channel.off('message.new', onNewMessage);
            channel.stopWatching();
            set({ channel: null });
        }
    },
    onNewMessage: (event: Event<DefaultGenerics>) => {
        set((state) => ({
            notifications: [JSON.parse(event.message?.text || ''), ...state.notifications],
            hasNewNotification: true,
        }));
        toast.info('You have a new notification');
    },
}));

export default useNotificationStore;
