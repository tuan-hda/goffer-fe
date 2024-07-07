import NotificationsContent from '@/components/notifications/NotificationsContent';
import { analytics } from '@/configs/firebase';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import { TbBell } from 'react-icons/tb';

const Notifications = () => {
    useEffect(() => {
        logEvent(analytics, 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname,
        })
    },[])
    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <TbBell className="text-lg" /> Notifications
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="mx-auto mt-5 max-w-[600px]">
                <NotificationsContent />
            </div>
        </div>
    );
};

export default Notifications;
