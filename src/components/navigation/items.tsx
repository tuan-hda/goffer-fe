import {
    TbBaguette,
    TbCompass,
    TbNotification,
    TbPaint,
    TbSettings,
    TbSparkles,
    TbUser,
    TbUsers,
    TbWallet,
} from 'react-icons/tb';

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
        pattern?: string;
        startContent: React.ReactNode;
        content: React.ReactNode;
    };
    divider?: boolean;
};

export type Item = ButtonItem | LinkItem;

export const items: Item[] = [
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
            path: '/app/profile',
            startContent: <TbUser className="text-xl" />,
            content: 'Profile',
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
            path: '/app/individual/discover',
            startContent: <TbCompass className="text-xl" />,
            content: 'Discover',
        },
        divider: true,
    },
    {
        type: 'link',
        element: {
            path: '/app/individual/jobs',
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

export const orgItems: (_: string) => Item[] = (domain: string) => [
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
            path: `/app/organization/${domain}`,
            pattern: '/app/organization/:domain',
            startContent: <TbBaguette className="text-xl" />,
            content: 'Jobs',
        },
    },
    {
        type: 'link',
        element: {
            path: `/app/organization/${domain}/team`,
            pattern: '/app/organization/:domain/team',
            startContent: <TbUsers className="text-xl" />,
            content: 'Team',
        },
    },
    {
        type: 'link',
        element: {
            path: `/app/organization/${domain}/settings`,
            pattern: '/app/organization/:domain/settings',
            startContent: <TbSettings className="text-xl" />,
            content: 'Settings',
        },
    },
];
