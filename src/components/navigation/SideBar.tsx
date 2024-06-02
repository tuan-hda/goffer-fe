import { Sidebar, Menu } from 'react-pro-sidebar';
import {
    TbHelp,
    TbLayoutSidebarLeftCollapseFilled,
    TbLayoutSidebarLeftExpandFilled,
    TbLogout,
    TbPlus,
} from 'react-icons/tb';
import { CSSProperties, Fragment, useEffect, useState } from 'react';
import useDiscoverStore from '@/stores/discoverStore';
import classNames from 'classnames';
import { Link, useLocation, matchPath, useParams, matchRoutes } from 'react-router-dom';
import useAuthStore from '@/stores/authStore';
import { shallow } from 'zustand/shallow';
import SidebarItem from './SidebarItem';
import UserPopover from './UserPopover';
import { Organization } from '@/types/organization.type';
import { Image } from '@nextui-org/react';
import { items, orgItems } from './items';
import AskAI from '../askAI/AskAI';
import AdminMenu from './AdminMenu';
import { adminItems } from './adminItems';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { toast } from 'sonner';

const textColor = 'hsl(var(--nextui-primary-foreground) / 1)';

type SideBarProps = {
    org?: Organization;
};

const SideBar = ({ org }: SideBarProps) => {
    const { domain } = useParams();
    const { data: self } = useSelfProfileQuery();

    // TODO: Remove logout from this file
    const [logout] = useAuthStore((state) => [state.logOut, state.access], shallow);
    const [collapsed, setCollapsed] = useState(false);
    const { sideBarPinned, updateSideBarPinned } = useDiscoverStore();

    // Either open ask AI modal
    const [open, setOpen] = useState(false);

    const onMouseEnter = () => setCollapsed(!sideBarPinned && false);
    const onMouseLeave = () => {
        const popover = document.querySelector('[data-user-popover=true]');
        if (popover && popover.getAttribute('data-state') === 'open') return;
        setCollapsed(!sideBarPinned && true);
    };
    const togglePinned = () => updateSideBarPinned(!sideBarPinned);

    const location = useLocation();
    const match = (domain ? orgItems(domain, { onClickMap: {} }) : items({ onClickMap: {} })).find((item) => {
        if (item.type === 'link') {
            return matchPath(item.element.pattern || item.element.path, location.pathname);
        }
    });

    const isAdmin =
        matchRoutes(
            adminItems.map((item) => ({ path: item.path, exact: true })),
            location.pathname,
        ) !== null;

    const openAskAI = () => {
        setOpen(true);
    };

    const openBillingCustomerPortal = () => {
        const email = self?.email || '';
        toast.error('You need to purchase a plan to access this feature.');
        // window.open(
        //     `https://billing.stripe.com/p/login/test_eVa6ss93Jd772Sk144?prefilled_email=${encodeURI(email)}`,
        //     '_blank',
        // );
    };

    useEffect(() => {
        setCollapsed(!sideBarPinned);
    }, [sideBarPinned]);

    return (
        <div className="fixed z-50 bg-white text-sm text-text" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <AskAI isOpen={open} onClose={() => setOpen(false)} />

            <Sidebar
                width={'280px'}
                className="child-bg border-r !border-r-gray-200/70"
                style={
                    (isAdmin
                        ? {
                              '--bg-color': '#1E1E1E',
                          }
                        : {}) as CSSProperties
                }
                collapsed={collapsed}
            >
                {isAdmin ? (
                    <AdminMenu collapsed={collapsed} sideBarPinned={sideBarPinned} togglePinned={togglePinned} />
                ) : (
                    <Menu
                        className="h-full bg-white"
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
                                to={org ? `/app/organization/${org.domain}` : `/app`}
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
                                {(org
                                    ? orgItems(domain!, {
                                          onClickMap: {
                                              0: openAskAI,
                                          },
                                      })
                                    : items({
                                          onClickMap: {
                                              0: openAskAI,
                                              1: openBillingCustomerPortal,
                                          },
                                      })
                                ).map((item, index) => (
                                    <Fragment key={index}>
                                        {item.divider && <div className="mx-2 my-4 border-t border-t-gray-200/70" />}
                                        <SidebarItem
                                            onClick={'onClick' in item ? item.onClick : undefined}
                                            match={match}
                                            collapsed={collapsed}
                                            item={item}
                                        />
                                    </Fragment>
                                ))}
                            </div>
                            <div className="mx-4 mt-auto">
                                {domain && !collapsed && (
                                    <Link
                                        to={`/app/organization/${domain}/team`}
                                        className="absolute bottom-24 mb-4 block w-[248px] overflow-hidden rounded-xl border p-4 text-left"
                                    >
                                        <div className="absolute -right-10  z-0">
                                            <Image
                                                src="/flower.png"
                                                classNames={{
                                                    wrapper: 'w-36 h-36',
                                                }}
                                            />
                                        </div>
                                        <div className="relative z-[1] flex items-center gap-3">
                                            <div>
                                                <p className="font-medium">Invite member</p>
                                                <p className="mt-1 text-xs font-light mix-blend-difference">
                                                    Collaborate with your team on hiring stuffs
                                                </p>
                                            </div>
                                            <div className="flex rounded-full bg-white/70 p-3 shadow-large backdrop-blur-3xl">
                                                <TbPlus className="text-2xl" />
                                            </div>
                                        </div>
                                    </Link>
                                )}
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
                )}
            </Sidebar>
        </div>
    );
};

export default SideBar;
