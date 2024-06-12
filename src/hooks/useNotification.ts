import useStreamStore from '@/stores/streamStore';
import { useEffect, useRef, useState } from 'react';
import { Channel, DefaultGenerics, Event } from 'stream-chat';

const useNotification = (id: string) => {
    const client = useStreamStore((state) => state.client);
    const channel = useRef<Channel | null>(null);
    const [notifications, setNotifications] = useState<string[]>([]);

    useEffect(() => {
        const onNewMessage = (event: Event<DefaultGenerics>) => {
            setNotifications((prev) => [event.message?.text || '', ...prev]);
        };

        if (!client) return;
        (async () => {
            channel.current = client.channel('messaging', id);
            const response = await channel.current.query({
                messages: { limit: 1000 },
            });
            setNotifications(response.messages.reverse().map((message) => message.text || ''));
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
