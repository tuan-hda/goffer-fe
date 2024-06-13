import { Card } from '../ui/card';
import Notification from './Notification';
import { Fragment } from 'react';
import useNotification from '@/hooks/useNotification';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import NotificationWrapper from './NotificationWrapper';

const NotificationsContent = () => {
    const { data: self } = useSelfProfileQuery();

    const { notifications, channel } = useNotification(self ? `notifications-${self.id}` : undefined);

    console.log(channel?.id);

    const isEmpty = notifications.length === 0;

    return (
        <Card className="min-h-[200px] overflow-hidden border-none p-7 shadow-medium">
            <NotificationWrapper isEmpty={isEmpty}>
                {notifications.map((notification, index) => (
                    <Fragment key={index}>
                        <Notification notification={notification} />
                        {index < 3 && <div className="border-t border-gray-200/70" />}
                    </Fragment>
                ))}
            </NotificationWrapper>
        </Card>
    );
};

export default NotificationsContent;
