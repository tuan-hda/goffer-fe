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

const sidebarClasses = {
    root: 'ps-sidebar-root',
    container: 'ps-sidebar-container',
    content: 'my-custom-sidebar-content',
};
const textColor = 'hsl(var(--nextui-primary-foreground) / 1)';
const bgColor = 'hsl(var(--nextui-default-foreground)/0.8)';

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
            <Sidebar
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: bgColor,
                        top: 0,
                        left: 0,
                        height: '100vh',
                        color: textColor,
                        paddingTop: 20,
                        paddingBottom: 20,
                    },
                }}
                width={'256px'}
                collapsed={collapsed}
            >
                <Menu>
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
                        style={{
                            backgroundColor: 'transparent',
                            transition: 'background-color 0.2s ease-in-out',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        <p className="pr-8 text-left text-3xl font-semibold text-primary-foreground">Goffer</p>
                    </MenuItem>

                    <Card
                        isPressable
                        shadow="none"
                        radius="sm"
                        fullWidth={collapsed}
                        className={classNames(
                            'hover my-12 bg-transparent',
                            !collapsed && 'mx-5 my-12 w-[216px] border border-primary-foreground bg-transparent',
                        )}
                    >
                        <CardHeader className={classNames(collapsed ? 'justify-center' : 'justify-between')}>
                            <div className=" flex items-center justify-center gap-5">
                                <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                                {!collapsed && (
                                    <div className="flex flex-col items-start justify-center gap-1">
                                        <h4 className="text-small font-semibold leading-none text-primary-foreground">
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

                    <MenuItem icon={<TbHomeEco size={28} color="white" />}>Home</MenuItem>
                    <MenuItem icon={<PiCompass size={28} color="white" />}>Discover</MenuItem>
                    <MenuItem icon={<PiUserCircle size={28} color="white" />}>Profile</MenuItem>
                    <div className="flex flex-1 flex-row" />
                    <MenuItem icon={<TbLogout size={28} color="white" />}>Log out</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SideBar;
