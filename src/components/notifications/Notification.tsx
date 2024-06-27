import { Avatar } from '@nextui-org/react';
import { Button } from '../ui/button';
import classNames from 'classnames';
import { Notification as NotificationType } from '@/types/notification.type';
import { Link } from 'react-router-dom';
import moment from 'moment';

type NotificationProps = {
    isRead?: boolean;
    notification: NotificationType;
};

const Notification = ({ isRead, notification }: NotificationProps) => {
    return (
        <div className={classNames('flex gap-3 px-8 py-7', isRead && 'bg-primary/10')}>
            <div className="relative">
                <Avatar src={notification?.owner?.avatar} />
                {isRead && (
                    <div className="absolute left-0 top-0 h-[12px] w-[12px] rounded-full border-2 border-white bg-primary" />
                )}
            </div>
            <div>
                <p>{notification.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    {notification.createdAt && <p>{moment(notification.createdAt).fromNow()}</p>}
                </div>
                <div className="mt-3 flex items-center gap-2">
                    {notification.link && (
                        <Button size="sm" variant="black" asChild>
                            <Link to={notification.link}>View</Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notification;
