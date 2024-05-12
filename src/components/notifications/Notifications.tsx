import { TbBell } from 'react-icons/tb';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import NotificationsContent from './NotificationsContent';

const Notifications = () => {
    return (
        <Popover>
            <PopoverTrigger className="fixed right-6 top-6 z-50 rounded-xl border p-2">
                <TbBell className="text-xl" />
                <div className="absolute bottom-[6px] right-[6px] h-2 w-2 rounded-full bg-primary" />
            </PopoverTrigger>
            <PopoverContent className="w-[440px] rounded-2xl p-5 text-sm">
                <div className="flex items-center justify-between">
                    <p className="text-lg font-medium">Notifications</p>
                    <p className="underline">Mark all as read</p>
                </div>
                <NotificationsContent />
            </PopoverContent>
        </Popover>
    );
};

export default Notifications;
