import { Avatar } from '@nextui-org/react';
import { Button } from '../ui/button';

const Notification = () => {
    return (
        <div className="flex gap-3 border-t border-t-gray-100 px-6 py-5">
            <div className="relative">
                <Avatar src="https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg" />
                <div className="absolute left-0 top-0 h-[12px] w-[12px] rounded-full border-2 border-white bg-primary" />
            </div>
            <div>
                <p>
                    <span className="font-medium">Tuan Hoang Dinh Anh</span> wants to connect with you.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <p>5 min ago</p>•<p>Software Engineer</p>
                </div>
                <div className="mt-3 flex items-center gap-2">
                    <Button size="sm" variant="black">
                        Accept
                    </Button>
                    <Button size="sm" variant="outline">
                        Decline
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Notification;
