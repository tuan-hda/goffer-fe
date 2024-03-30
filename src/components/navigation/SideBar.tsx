import { Sidebar, Menu } from 'react-pro-sidebar';
import {
    TbBaguette,
    TbCompass,
    TbHelp,
    TbLayoutSidebarLeftCollapseFilled,
    TbLayoutSidebarLeftExpandFilled,
    TbLogout,
    TbNotification,
    TbPaint,
    TbSettings,
    TbSparkles,
    TbWallet,
} from 'react-icons/tb';
import { Fragment, useEffect, useState } from 'react';
import useDiscoverStore from 'src/stores/discoverStore';
import classNames from 'classnames';
import { Link, matchRoutes, useLocation, useParams } from 'react-router-dom';
import useSelfProfileQuery from 'src/hooks/useSelfProfileQuery';
import useAuthStore from 'src/stores/authStore';
import { shallow } from 'zustand/shallow';
import SidebarItem from './SidebarItem';
import UserPopover from './UserPopover';
import { Organization } from 'src/types/organization.type';

const textColor = 'hsl(var(--nextui-primary-foreground) / 1)';

type ButtonItem = {
    type: 'button';
    element: {
        startContent: React.ReactNode;
        content: React.ReactNode;
    };
    divider?: boolean;
};

type LinkItem = {
    type: 'link';
    element: {
        path: string;
        startContent: React.ReactNode;
        content: React.ReactNode;
    };
    divider?: boolean;
};

export type Item = ButtonItem | LinkItem;

const items: Item[] = [
    {
        type: 'button',
        element: {
            startContent: <TbSparkles className="text-xl" />,
            content: 'Ask Goffer',
        },
    },
    {
        type: 'link',
        element: {
            path: '/app/individual/notifications',
            startContent: <TbNotification className="text-xl" />,
            content: 'Notifications',
        },
    },
    {
        type: 'link',
        element: {
            path: '/app/settings',
            startContent: <TbSettings className="text-xl" />,
            content: 'Settings',
        },
    },
    {
        type: 'link',
        element: {
            path: '/app/discover',
            startContent: <TbCompass className="text-xl" />,
            content: 'Discover',
        },
        divider: true,
    },
    {
        type: 'link',
        element: {
            path: '/app/discover/jobs',
            startContent: <TbBaguette className="text-xl" />,
            content: 'Jobs',
        },
    },
    {
        type: 'link',
        element: {
            path: '/app/discover/portfolio',
            startContent: <TbPaint className="text-xl" />,
            content: 'Portfolio',
        },
    },
    {
        type: 'link',
        element: {
            path: '/app/individual/wallet',
            startContent: <TbWallet className="text-xl" />,
            content: 'Wallet',
        },
    },
];

const orgItems: (_: string) => Item[] = (id: string) => [
    {
        type: 'link',
        element: {
            path: `/app/organization/${id}/settings`,
            startContent: <TbSettings className="text-xl" />,
            content: 'Settings',
        },
    },
];

type SideBarProps = {
    org?: Organization;
};

const SideBar = ({ org }: SideBarProps) => {
    const { domain } = useParams();

    // TODO: Remove logout from this file
    const [logout] = useAuthStore((state) => [state.logOut, state.access], shallow);
    const { data: user } = useSelfProfileQuery();
    const [collapsed, setCollapsed] = useState(false);
    const { sideBarPinned, updateSideBarPinned } = useDiscoverStore();
    const onMouseEnter = () => setCollapsed(!sideBarPinned && false);
    const onMouseLeave = () => setCollapsed(!sideBarPinned && true);
    const togglePinned = () => updateSideBarPinned(!sideBarPinned);

    const location = useLocation();
    const matches = matchRoutes(
        items.filter((item) => item.type === 'link').map((item) => (item as LinkItem).element),
        location,
    );

    useEffect(() => {
        setCollapsed(!sideBarPinned);
    }, [sideBarPinned]);

    return (
        <div className="fixed z-50 bg-white text-sm text-text" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Sidebar width={'280px'} className="child-bg border-r !border-r-gray-200/70" collapsed={collapsed}>
                <Menu
                    className="h-full bg-pale"
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
                    <div className={classNames('flex items-center gap-3 px-5')}>
                        <Link
                            to={org ? `/app/organization/${org.domain}` : `/app/individual`}
                            className="flex items-start gap-[10px]"
                        >
                            <img
                                src={org ? org.logo : '/logo.svg'}
                                className="h-7 min-h-7 w-7 min-w-7 flex-shrink-0 rounded-full"
                                alt="logo"
                            />
                            {!collapsed && (
                                <p className="min-w-0 text-left font-serif text-[28px] font-black leading-[28px] text-text">
                                    {org ? 'Home' : 'Goffer'}
                                </p>
                            )}
                        </Link>
                        {!collapsed && (
                            <>
                                {sideBarPinned ? (
                                    <TbLayoutSidebarLeftCollapseFilled
                                        onClick={togglePinned}
                                        className="ml-auto cursor-pointer text-2xl"
                                    />
                                ) : (
                                    <TbLayoutSidebarLeftExpandFilled
                                        onClick={togglePinned}
                                        className="ml-auto cursor-pointer text-2xl"
                                    />
                                )}
                            </>
                        )}
                    </div>
                    <div className="flex h-full w-full flex-col">
                        <div className="mx-[14px]">
                            <UserPopover collapsed={collapsed} />
                            {(org ? orgItems(domain!) : items).map((item, index) => (
                                <Fragment key={index}>
                                    {item.divider && <div className="mx-2 my-4 border-t border-t-gray-200/70" />}
                                    <SidebarItem matches={matches} collapsed={collapsed} item={item} />
                                </Fragment>
                            ))}
                        </div>
                        <div className="mx-3 mt-auto">
                            <button className="relative flex w-full items-center gap-[18px] rounded-lg p-2 transition hover:bg-gray-100">
                                <TbHelp className="text-xl" />
                                <p
                                    className={classNames(
                                        'pointer-events-auto absolute left-[46px] overflow-hidden whitespace-nowrap opacity-100 transition',
                                        collapsed
                                            ? 'pointer-events-none !opacity-0'
                                            : 'pointer-events-auto opacity-100',
                                    )}
                                >
                                    Help
                                </p>
                            </button>
                            <button
                                onClick={logout}
                                className="relative flex w-full items-center gap-[18px] rounded-lg p-2 transition hover:bg-gray-100"
                            >
                                <TbLogout className="text-xl" />
                                <p
                                    className={classNames(
                                        'pointer-events-auto absolute left-[46px] overflow-hidden whitespace-nowrap opacity-100 transition',
                                        collapsed
                                            ? 'pointer-events-none !opacity-0'
                                            : 'pointer-events-auto opacity-100',
                                    )}
                                >
                                    Log out
                                </p>
                            </button>
                        </div>
                    </div>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SideBar;
