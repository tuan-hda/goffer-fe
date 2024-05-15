import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Avatar, Image } from '@nextui-org/react';
import classNames from 'classnames';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { TbHourglassHigh, TbLogout, TbUser } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [current, setCurrent] = useState(0);
    const { data: user } = useSelfProfileQuery();

    return (
        <div className="fixed left-0 top-10 flex h-[calc(100vh-48px)] w-12 flex-col justify-between gap-0">
            <div className="z-[10] m-2 flex w-full flex-col items-center overflow-hidden rounded-xl bg-[#000] pt-2">
                <Link to="/app/individual/home">
                    <Image
                        classNames={{
                            wrapper: 'aspect-square h-8 w-8 mb-2',
                        }}
                        src="/logo.svg"
                    />
                </Link>
                <div className="w-full">
                    {Array(4)
                        .fill(0)
                        .map((_, i) => (
                            <button
                                onClick={() => setCurrent(i)}
                                key={i}
                                className={classNames(
                                    'flex aspect-square w-full items-center justify-center font-mono',
                                    current !== i ? 'bg-[#000] text-white' : 'bg-white text-[#333]',
                                )}
                            >
                                {i + 1}
                            </button>
                        ))}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="mt-2 aspect-square h-12 w-full">
                        <Avatar
                            classNames={{
                                img: 'rounded-none w-full h-full p-0 m-0',
                                base: 'rounded-none w-full h-full p-0 m-0',
                            }}
                            src={user?.avatar}
                        />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="text-sm">
                        <DropdownMenuItem className="cursor-pointer gap-2">
                            <TbUser /> My account
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer gap-2">
                            <TbLogout /> Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="ml-2 flex w-full justify-end">
                <div className="flex w-full flex-col items-center gap-0 rounded-xl bg-black p-3 text-center">
                    <TbHourglassHigh className="text-lg" />
                    <p className="mt-2 font-mono text-lg font-semibold text-white">32</p>
                    <p className="font-mono text-lg font-semibold text-white">10</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
