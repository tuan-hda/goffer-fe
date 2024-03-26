import { Avatar } from '@nextui-org/react';
import classNames from 'classnames';
import useSelfProfileQuery from 'src/hooks/useSelfProfileQuery';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu';
import { TbHomePlus } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

type UserPopoverProps = {
    collapsed: boolean;
};

const UserPopover = ({ collapsed }: UserPopoverProps) => {
    const { data: user } = useSelfProfileQuery();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="mb-5 mt-7 w-full outline-none ring-0">
                <button className="relative -mx-0.5 flex w-full items-center gap-3 rounded-lg p-2 transition hover:bg-gray-100">
                    <Avatar className="h-7 w-7" src={user?.avatar} />
                    <p
                        className={classNames(
                            'pointer-events-auto absolute left-12 overflow-hidden whitespace-nowrap opacity-100 transition',
                            collapsed ? 'pointer-events-none !opacity-0' : 'pointer-events-auto opacity-100',
                        )}
                    >
                        {user?.name}
                    </p>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[240px] rounded-xl">
                <DropdownMenuLabel>Individual</DropdownMenuLabel>
                <DropdownMenuItem>
                    <button className="relative -mx-0.5 flex w-full items-center gap-3 rounded-lg px-1 py-0.5 transition">
                        <Avatar className="h-7 w-7" src={user?.avatar} />
                        <p
                            className={classNames(
                                'pointer-events-auto overflow-hidden whitespace-nowrap opacity-100 transition',
                                collapsed ? 'pointer-events-none !opacity-0' : 'pointer-events-auto opacity-100',
                            )}
                        >
                            {user?.name}
                        </p>
                    </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Organizations</DropdownMenuLabel>
                <p className="px-2 text-left text-sm text-text/60">You have no organizations.</p>
                <div className="mb-2 mt-[10px] px-2">
                    <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex w-full items-center gap-2 text-sm transition hover:text-text"
                    >
                        <Link to="/organization/new">
                            <TbHomePlus className="text-base" />
                            <span>New organization</span>
                        </Link>
                    </Button>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserPopover;
