import { Avatar, Button, Card, CardHeader } from '@nextui-org/react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {
    TbBaguette,
    TbChevronRight,
    TbCompass,
    TbGlobe,
    TbHelp,
    TbHome,
    TbHomeEco,
    TbLayoutSidebarLeftCollapse,
    TbLayoutSidebarLeftCollapseFilled,
    TbLayoutSidebarLeftExpand,
    TbLayoutSidebarLeftExpandFilled,
    TbLayoutSidebarRightCollapseFilled,
    TbLogout,
    TbNetwork,
    TbNotification,
    TbPaint,
    TbSettings,
    TbSettings2,
    TbSparkles,
    TbWallet,
} from 'react-icons/tb';
import { PiCompass, PiUserCircle } from 'react-icons/pi';
import { useEffect, useState } from 'react';
import useDiscoverStore from 'src/stores/discoverStore';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import useSelfProfileQuery from 'src/hooks/useSelfProfileQuery';

const textColor = 'hsl(var(--nextui-primary-foreground) / 1)';

const SideBar = () => {
    const { data: user } = useSelfProfileQuery();
    const [collapsed, setCollapsed] = useState(true);
    const { sideBarPinned, updateSideBarPinned } = useDiscoverStore();
    const onMouseEnter = () => setCollapsed(!sideBarPinned && false);
    const onMouseLeave = () => setCollapsed(!sideBarPinned && true);
    const togglePinned = () => updateSideBarPinned(!sideBarPinned);

    useEffect(() => {
        setCollapsed(!sideBarPinned);
    }, [sideBarPinned]);

    return (
        <div className="fixed z-50 bg-white text-sm text-text" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Sidebar width={'280px'} className="child-bg ot !border-none" collapsed={collapsed}>
                <Menu
                    className="bg-pale h-full"
                    menuItemStyles={{
                        button: ({ active }) => {
                            return {
                                color: active ? textColor : '#A0A2AA',
                                backgroundColor: active ? '#27272A' : undefined,
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
                    {/* <MenuItem
                        component={<Link to="/" />}
                        suffix={
                            <Button isIconOnly variant="light" onPress={togglePinned}>
                                {sideBarPinned ? (
                                    <TbLayoutSidebarLeftCollapse size={28} color="white" />
                                ) : (
                                    <TbLayoutSidebarLeftExpand size={28} color="white" />
                                )}
                            </Button>
                        }
                        className="sidebar_header"
                    ></MenuItem> */}
                    <div className={classNames('flex items-center gap-3 px-5', collapsed && 'pt-0.5')}>
                        <Link to={`/app/${user?.initialType}`} className="flex items-center gap-[10px]">
                            <img src="/logo.svg" className="h-7 w-7" alt="logo" />
                            {!collapsed && (
                                <p className="text-left font-serif text-3xl font-black leading-[32px] text-text">
                                    Goffer
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
                            <Link
                                to="/app/individual"
                                className="-mx-0.5 mb-5 mt-7 flex items-center gap-3 rounded-lg p-2 transition hover:bg-gray-100"
                            >
                                <Avatar className="h-7 w-7" src={user?.avatar} />
                                <p>{user?.name}</p>
                            </Link>
                            <Link
                                to="/app/individual"
                                className="flex w-full items-center gap-[18px] rounded-lg p-2 transition hover:bg-gray-100"
                            >
                                <TbHome className="text-xl" /> <p>Home</p>
                            </Link>
                            <Link
                                to="/app/wallet"
                                className="flex w-full items-center gap-[18px] rounded-lg p-2 transition hover:bg-gray-100"
                            >
                                <TbSparkles className="text-xl" /> <p>Ask Goffer</p>
                            </Link>
                            <Link
                                to="/app/wallet"
                                className="flex w-full items-center gap-[18px] rounded-lg p-2 transition hover:bg-gray-100"
                            >
                                <TbNotification className="text-xl" /> <p>Notifications</p>
                            </Link>
                            <Link
                                to="/app/wallet"
                                className="flex w-full items-center gap-[18px] rounded-lg p-2 transition hover:bg-gray-100"
                            >
                                <TbSettings className="text-xl" /> <p>Settings</p>
                            </Link>
                            <div className="mx-2 my-4 border-t border-t-gray-200/70" />
                            <Link
                                to="/app/discover"
                                className="flex w-full items-center gap-[18px] rounded-lg p-2 transition hover:bg-gray-100"
                            >
                                <TbCompass className="text-xl" /> <p>Discover</p>
                            </Link>
                            <Link
                                to="/app/wallet"
                                className="flex w-full items-center gap-[18px] rounded-lg p-2 transition hover:bg-gray-100"
                            >
                                <TbPaint className="text-xl" /> <p>Portfolio</p>
                            </Link>
                            <Link
                                to="/app/discover"
                                className="flex w-full items-center gap-[18px] rounded-lg p-2 transition hover:bg-gray-100"
                            >
                                <TbBaguette className="text-xl" /> <p>Jobs</p>
                            </Link>
                            <Link
                                to="/app/wallet"
                                className="flex w-full items-center gap-[18px] rounded-lg p-2 transition hover:bg-gray-100"
                            >
                                <TbWallet className="text-xl" /> <p>Wallet</p>
                            </Link>
                        </div>
                        <div className="mx-3 mt-auto">
                            <button className="flex w-full items-center gap-[18px] rounded-lg p-2 transition hover:bg-gray-100">
                                <TbHelp className="text-xl" /> <p>Help</p>
                            </button>
                            <button className="flex w-full items-center gap-[18px] rounded-lg p-2 transition hover:bg-gray-100">
                                <TbLogout className="text-xl" /> <p>Log out</p>
                            </button>
                        </div>
                    </div>

                    {/* <Card
                        isPressable
                        shadow="none"
                        radius="lg"
                        fullWidth={collapsed}
                        className={classNames(
                            'hover my-12 border border-transparent bg-transparent',
                            !collapsed && 'mx-5 w-[216px] border-primary-foreground bg-transparent',
                        )}
                    >
                        <CardHeader className={classNames(collapsed ? 'justify-center' : 'justify-between')}>
                            <div className=" flex items-center justify-center gap-3">
                                <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                                {!collapsed && (
                                    <div className="flex flex-col items-start justify-center gap-1">
                                        <h4 className="max-w-28 overflow-hidden text-ellipsis text-nowrap text-small font-semibold leading-none text-primary-foreground">
                                            Zoey Lang
                                        </h4>
                                        <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                                    </div>
                                )}
                            </div>
                            {!collapsed && (
                                <Button radius="full" size="sm" isIconOnly variant="light">
                                    <TbChevronRight size={20} color="white" />
                                </Button>
                            )}
                        </CardHeader>
                    </Card>

                    <MenuItem active icon={<TbHomeEco size={28} />}>
                        Home
                    </MenuItem>
                    <MenuItem icon={<PiCompass size={28} />}>Discover</MenuItem>
                    <MenuItem icon={<PiUserCircle size={28} />}>Profile</MenuItem>
                    <MenuItem disabled className=" flex flex-1 flex-row" />
                    <MenuItem icon={<TbLogout size={28} />}>Log out</MenuItem> */}
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SideBar;
