import { Avatar, Button, Card, CardHeader } from '@nextui-org/react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {
    TbChevronRight,
    TbHomeEco,
    TbLayoutSidebarLeftCollapse,
    TbLayoutSidebarLeftExpand,
    TbLogout,
} from 'react-icons/tb';
import { PiCompass, PiUserCircle } from 'react-icons/pi';
import { useEffect, useState } from 'react';
import useDiscoverStore from 'src/stores/discoverStore';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const textColor = 'hsl(var(--nextui-primary-foreground) / 1)';

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const { sideBarPinned, updateSideBarPinned } = useDiscoverStore();
    const onMouseEnter = () => setCollapsed(!sideBarPinned && false);
    const onMouseLeave = () => setCollapsed(!sideBarPinned && true);
    const togglePinned = () => updateSideBarPinned(!sideBarPinned);

    useEffect(() => {
        setCollapsed(!sideBarPinned);
    }, [sideBarPinned]);

    return (
        <div className="fixed z-50" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Sidebar width={'256px'} collapsed={collapsed}>
                <Menu
                    className="h-full"
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
                    <MenuItem
                        icon={<img src="/logo-inverted.svg" alt="logo" className="h-[35px] w-[35px]" />}
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
                    >
                        <p className="pr-8 text-left text-3xl font-semibold text-primary-foreground">Goffer</p>
                    </MenuItem>

                    <Card
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
                    <MenuItem icon={<TbLogout size={28} />}>Log out</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SideBar;
