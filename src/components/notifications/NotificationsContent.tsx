import { Tab, Tabs } from '@nextui-org/react';
import { Card } from '../ui/card';
import Notification from './Notification';
import { Fragment, useEffect } from 'react';
import useNotification from '@/hooks/useNotification';
import { Button } from '../ui/button';

const NotificationsContent = () => {
    const { notifications, channel } = useNotification('admin');

    useEffect(() => {
        console.log(notifications);
    }, [notifications]);

    return (
        <Tabs variant="underlined">
            <Tab key="Account" title={<span className="flex items-center gap-2">All</span>}>
                <Card className="overflow-hidden border-none shadow-medium">
                    {Array(4)
                        .fill(0)
                        .map((_, index) => (
                            <Fragment key={index}>
                                <Notification />
                                {index < 3 && <div className="border-t border-gray-200/70" />}
                            </Fragment>
                        ))}
                    <Button
                        onClick={() => {
                            channel?.sendMessage({
                                text: 'Hello, world212312!',
                            });
                        }}
                    >
                        Send msg
                    </Button>
                </Card>
            </Tab>
            <Tab key="Work" title={<span className="flex items-center gap-2">Following</span>}>
                <Card className="overflow-hidden border-none shadow-medium">
                    <div className="m-auto flex h-[160px] w-full items-center justify-center">
                        There's no notification from following.
                    </div>
                </Card>
            </Tab>
            <Tab key="Subscription" title={<span className="flex items-center gap-2">Archive</span>}>
                <Card className="overflow-hidden border-none shadow-medium">
                    <div className="m-auto flex h-[160px] w-full items-center justify-center">
                        There's no notification from archive.
                    </div>
                </Card>
            </Tab>
        </Tabs>
    );
};

export default NotificationsContent;
