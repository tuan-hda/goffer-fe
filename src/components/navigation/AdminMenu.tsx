import { TbDashboard, TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarLeftExpandFilled } from 'react-icons/tb';
import { Menu } from 'react-pro-sidebar';
import { Link, matchRoutes, useLocation } from 'react-router-dom';
import UserPopover from './UserPopover';
import SidebarItem from './SidebarItem';

const textColor = 'hsl(var(--nextui-primary-foreground) / 1)';

type AdminMenuProps = {
    collapsed: boolean;
    sideBarPinned: boolean;
    togglePinned: () => void;
};

const AdminMenu = ({ collapsed, sideBarPinned, togglePinned }: AdminMenuProps) => {
    const location = useLocation();
    const match = matchRoutes(
        [
            {
                path: '/app/admin',
                exact: true,
            },
        ],
        location.pathname,
    );

    return (
        <Menu
            className="h-full text-white"
            menuItemStyles={{
                button: ({ active }) => {
                    return {
                        color: active ? textColor : '#A0A2AA',
                        backgroundColor: active ? '#3F3F46' : undefined,
                        borderRadius: '14px !important',
                        '&:hover': {
                            backgroundColor: 'hsl(var(--nextui-default)/0.4)',
                            color: textColor + ' !important',
                            fontWeight: 'bold !important',
                        },
                    };
                },
            }}
        >
            <div className={'flex items-center gap-3 px-5'}>
                <Link to={`/app/admin`} className="flex items-start gap-[10px]">
                    <img src={'/logo.svg'} className="h-8 min-h-8 w-8 min-w-8 flex-shrink-0 rounded-full" alt="logo" />
                    {!collapsed && (
                        <p className="min-w-0 text-left font-serif text-[28px] font-black leading-[28px] text-white">
                            Goffer
                        </p>
                    )}
                </Link>
                {!collapsed && (
                    <>
                        {sideBarPinned ? (
                            <TbLayoutSidebarLeftCollapseFilled
                                onClick={togglePinned}
                                className="ml-auto cursor-pointer text-2xl text-white"
                            />
                        ) : (
                            <TbLayoutSidebarLeftExpandFilled
                                onClick={togglePinned}
                                className="ml-auto cursor-pointer text-2xl text-white"
                            />
                        )}
                    </>
                )}
            </div>
            <div className="flex h-full w-full flex-col">
                <div className="mx-[14px]">
                    <UserPopover isAdmin collapsed={collapsed} />
                    <SidebarItem
                        isAdmin
                        collapsed={collapsed}
                        item={{
                            type: 'link',
                            element: {
                                content: 'Dashboard',
                                path: '/app/admin',
                                startContent: <TbDashboard className="text-xl" />,
                            },
                        }}
                        isMatched={!!match?.at(0)}
                    />
                </div>
            </div>
        </Menu>
    );
};

export default AdminMenu;
