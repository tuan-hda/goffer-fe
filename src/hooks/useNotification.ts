import useStreamStore from '@/stores/streamStore';
import { Notification } from '@/types/notification.type';
import { useEffect, useRef, useState } from 'react';
import { Channel, DefaultGenerics, Event } from 'stream-chat';

const useNotification = (id?: string) => {
    const client = useStreamStore((state) => state.client);
    const channel = useRef<Channel | null>(null);
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        const onNewMessage = (event: Event<DefaultGenerics>) => {
            setNotifications((prev) => [JSON.parse(event.message?.text || ''), ...prev]);
        };

        if (!client || !id) return;
        (async () => {
            channel.current = client.channel('messaging', id);
            const response = await channel.current.query({
                messages: { limit: 1000 },
            });
            setNotifications(response.messages.reverse().map((message) => JSON.parse(message.text || '')));
            channel.current.watch();
            channel.current.on('message.new', onNewMessage);
        })();
    }, [client]);

    return {
        notifications,
        client,
        channel: channel.current,
    };
};

export default useNotification;
