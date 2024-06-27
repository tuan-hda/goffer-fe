import { Card } from '../ui/card';
import Notification from './Notification';
import { Fragment, useEffect } from 'react';
import NotificationWrapper from './NotificationWrapper';
import useNotificationStore from '@/stores/notifications';
import { shallow } from 'zustand/shallow';

const NotificationsContent = () => {
    const { notifications, clearNewNotification } = useNotificationStore(
        (state) => ({
            notifications: state.notifications,
            clearNewNotification: state.clearNewNotification,
        }),
        shallow,
    );

    useEffect(() => {
        notifications.length > 0 && clearNewNotification();
    }, []);

    const isEmpty = notifications.length === 0;

    return (
        <Card className="min-h-[400px] overflow-hidden border-none shadow-medium">
            <NotificationWrapper isEmpty={isEmpty}>
                {notifications.map((notification, index) => (
                    <Fragment key={index}>
                        <Notification notification={notification} />
                        {index < notifications.length - 1 && <div className="border-t border-gray-200/70" />}
                    </Fragment>
                ))}
            </NotificationWrapper>
        </Card>
    );
};

export default NotificationsContent;
