import { Avatar } from '@nextui-org/react';
import classNames from 'classnames';
import useSelfProfileQuery from 'src/hooks/useSelfProfileQuery';

type UserPopoverProps = {
    collapsed: boolean;
};

const UserPopover = ({ collapsed }: UserPopoverProps) => {
    const { data: user } = useSelfProfileQuery();

    return (
        <button className="relative -mx-0.5 mb-5 mt-7 flex w-full items-center gap-3 rounded-lg p-2 transition hover:bg-gray-100">
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
    );
};

export default UserPopover;
