import { Avatar } from '@nextui-org/react';
import classNames from 'classnames';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TbHomePlus } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Link, useParams } from 'react-router-dom';
import useListOrganizations from '@/hooks/useListOrganizations';

type UserPopoverProps = {
    collapsed: boolean;
    isAdmin?: boolean;
};

const UserPopover = ({ collapsed, isAdmin }: UserPopoverProps) => {
    const { data: user } = useSelfProfileQuery();
    const { data: organizations } = useListOrganizations();
    const { domain } = useParams();
    const org = organizations?.results.find((org) => org.domain === domain);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="mb-5 mt-7 w-full outline-none ring-0">
                <button
                    className={classNames(
                        'relative -mx-0.5 flex w-full items-center gap-3 rounded-xl p-2 transition',
                        isAdmin ? 'hover:bg-white/20' : 'hover:bg-gray-100',
                    )}
                >
                    <Avatar
                        className="h-7 w-7 flex-shrink-0 bg-white"
                        src={isAdmin ? '/chad.webp' : org ? org.logo : user?.avatar}
                    />
                    <p
                        className={classNames(
                            'pointer-events-auto absolute left-12 min-w-0 overflow-hidden whitespace-nowrap opacity-100 transition',
                            collapsed ? 'pointer-events-none !opacity-0' : 'pointer-events-auto opacity-100',
                        )}
                    >
                        {org ? org.name : user?.name}
                    </p>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent data-user-popover className={classNames('w-[240px] rounded-xl')}>
                <DropdownMenuLabel>Individual</DropdownMenuLabel>
                <DropdownMenuItem className="p-0">
                    <Link
                        to="/app"
                        className="relative -mx-0.5 flex w-full items-center gap-3 rounded-lg px-3 py-2 transition"
                    >
                        <Avatar className="h-7 w-7" src={user?.avatar} />
                        <p
                            className={classNames(
                                'pointer-events-auto overflow-hidden whitespace-nowrap opacity-100 transition',
                            )}
                        >
                            {user?.name}
                        </p>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Organizations</DropdownMenuLabel>
                {organizations?.results.map((organization) => (
                    <DropdownMenuItem className="p-0" key={organization.id}>
                        <Link
                            to={`/app/organization/${organization.domain}`}
                            className="relative -mx-0.5 flex w-full items-center gap-3 rounded-lg px-3 py-2 transition"
                        >
                            <Avatar className="h-7 w-7 bg-white" src={organization.logo} />
                            <p
                                className={classNames(
                                    'pointer-events-auto overflow-hidden whitespace-nowrap opacity-100 transition',
                                )}
                            >
                                {organization.name}
                            </p>
                        </Link>
                    </DropdownMenuItem>
                ))}
                {organizations?.results.length === 0 && (
                    <p className="px-2 text-left text-sm text-text/60">You have no organizations.</p>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Admin</DropdownMenuLabel>
                <DropdownMenuItem className="p-0">
                    <Link
                        to={`/app/admin`}
                        className="relative -mx-0.5 flex w-full items-center gap-3 rounded-lg px-3 py-2 transition"
                    >
                        <Avatar className="h-7 w-7 bg-white" src="/chad.webp" />
                        <p
                            className={classNames(
                                'pointer-events-auto overflow-hidden whitespace-nowrap opacity-100 transition',
                            )}
                        >
                            Admin dashboard
                        </p>
                    </Link>
                </DropdownMenuItem>
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
