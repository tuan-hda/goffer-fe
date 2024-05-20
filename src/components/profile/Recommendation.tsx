import { Avatar } from '@nextui-org/react';
import { TbDots, TbEyeOff, TbStarFilled } from 'react-icons/tb';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const Recommendation = () => {
    return (
        <div className="group relative">
            <div className="relative flex items-center gap-4">
                <Avatar
                    src="http://res.cloudinary.com/doxsstgkc/image/upload/v1714386131/goffer/ig8lpaodzrhtwzzkdaj3.jpg"
                    className="h-16 w-16"
                />
                <div className="space-y-0.5">
                    <div className="flex items-baseline gap-2 text-base">
                        <span className="font-medium">Tuan Hoang Dinh Anh</span> <span>•</span>
                        <span>Software Engineer @ Bosch</span>
                    </div>
                    <p className="text-gray-500">21 March 2024</p>
                </div>
                <TbStarFilled className="absolute left-[46px] top-0 text-xl text-yellow-400" />
            </div>
            <p className="mt-4 text-[15px]">
                Pushed the limits of Framer to deliver the details we needed on an incredibly complex Thought Leadership
                CMS architecture.
            </p>
            <DropdownMenu>
                <DropdownMenuTrigger className="absolute right-2 top-2 opacity-0 transition group-hover:opacity-100">
                    <TbDots className="text-lg" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                        Hide this recommendation <TbEyeOff className="ml-3 text-lg" />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default Recommendation;
