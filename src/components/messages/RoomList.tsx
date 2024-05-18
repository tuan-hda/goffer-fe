import { Avatar, BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbChartBubble, TbSearch } from 'react-icons/tb';
import { Input } from '../ui/input';
import { useRef } from 'react';

const RoomList = () => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className="h-full overflow-y-auto py-5">
            <Breadcrumbs className="mt-[5px] px-4">
                <BreadcrumbItem>
                    <TbChartBubble className="text-lg" /> Messages
                </BreadcrumbItem>
            </Breadcrumbs>

            <div
                onClick={() => ref.current?.focus()}
                className="mt-5 flex h-16 items-center gap-0 border-y border-y-[#EEEEF0] bg-[#FAFAFA] px-4 text-text"
            >
                <TbSearch className="text-base" />
                <Input
                    ref={ref}
                    placeholder="Search contacts"
                    className="flex-1 border-0 px-1 shadow-none outline-0 focus-visible:ring-0"
                />
            </div>

            <button className="flex h-[88px] w-full items-center gap-[10px] px-5 text-left">
                <Avatar
                    src="https://cirsova.files.wordpress.com/2023/11/image-3.png"
                    classNames={{
                        base: 'rounded-xl',
                    }}
                />
                <div className="min-w-0 flex-1">
                    <div className="flex w-full items-center justify-between">
                        <p className="text-[13px] font-semibold">Robert Fox</p>
                        <p className="text-xs text-text/50">10:30 AM</p>
                    </div>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap text-text/80">
                        Hi I want to talk about the lorem ipsum
                    </p>
                </div>
            </button>
            <div className="relative flex h-[88px] items-center gap-[10px] bg-[#FAFAFA] px-5">
                <Avatar
                    src="https://cirsova.files.wordpress.com/2023/11/image-3.png"
                    classNames={{
                        base: 'rounded-xl',
                    }}
                />
                <div className="min-w-0 flex-1">
                    <div className="flex w-full items-center justify-between">
                        <p className="text-[13px] font-semibold">Robert Fox</p>
                        <p className="text-xs text-text/50">10:30 AM</p>
                    </div>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap text-text/80">
                        Hi I want to talk about the lorem ipsum
                    </p>
                </div>
                <div className="absolute right-0 top-0 h-[88px] w-1 bg-black" />
            </div>
            <button className="flex h-[88px] w-full items-center gap-[10px] px-5 text-left ">
                <Avatar
                    src="https://cirsova.files.wordpress.com/2023/11/image-3.png"
                    classNames={{
                        base: 'rounded-xl',
                    }}
                />
                <div className="min-w-0 flex-1">
                    <div className="flex w-full items-center justify-between">
                        <p className="text-[13px] font-semibold">Robert Fox</p>
                        <p className="text-xs text-text/50">10:30 AM</p>
                    </div>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap text-text/80">
                        Hi I want to talk about the lorem ipsum
                    </p>
                </div>
            </button>
        </div>
    );
};

export default RoomList;
