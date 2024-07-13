import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import SideBar from '@/components/navigation/SideBar';
import useListOrganizations from '@/hooks/useListOrganizations';
import useDiscoverStore from '@/stores/discoverStore';
import useStreamStore from '@/stores/streamStore';
import useNotificationStore from '@/stores/notifications';
import { useEffect } from 'react';
import useCurrOrganizatio from '@/hooks/useCurrOrganization';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { shallow } from 'zustand/shallow';

type DashboardLayoutProps = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const sideBarPinned = useDiscoverStore((state) => state.sideBarPinned);
    const { data } = useListOrganizations({ limit: 1000 });
    const { domain } = useParams();
    const { data: self } = useSelfProfileQuery();
    const org = data?.results.find((org) => org.domain === domain);
    console.log('org', org);

    const { notifications, hasNewNotification, fetchNotifications, disconnectChannel, setClient } =
        useNotificationStore(
            (state) => ({
                notifications: state.notifications,
                hasNewNotification: state.hasNewNotification,
                clearNewNotification: state.clearNewNotification,
                fetchNotifications: state.fetchNotifications,
                disconnectChannel: state.disconnectChannel,
                setClient: state.setClient,
            }),
            shallow,
        );

    const client = useStreamStore((state) => state.client);

    useEffect(() => {
        if (client) {
            setClient(client);
            fetchNotifications(!domain && self ? `notifications-${self.id}` : org ? `notifications-${org.id}` : '');
        }

        return () => {
            disconnectChannel();
        };
    }, [client, self, org, setClient, fetchNotifications, disconnectChannel]);

    useEffect(() => {
        if (hasNewNotification) {
            const unreadMessages = notifications.filter((notif) => !notif.read); // Example filter logic for unread messages
        }
    }, [hasNewNotification, notifications]);

    return (
        <div className="relative flex bg-pale">
            <SideBar org={org} />
            <div
                className={classNames(
                    'transition-all',
                    !sideBarPinned ? 'ml-[67px] w-[calc(100%-67px)]' : 'ml-[280px] w-[calc(100%-280px)]',
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
