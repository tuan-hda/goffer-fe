import { PiBank } from 'react-icons/pi';
import {
    TbAtom,
    TbBaguette,
    TbBell,
    TbChartBubble,
    TbCompass,
    TbExternalLink,
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
        isPrimary?: boolean;
        endContent?: React.ReactNode;
    };
    divider?: boolean;
    onClick?: () => void;
};

type LinkItem = {
    type: 'link';
    element: {
        path: string;
        pattern?: string;
        startContent: React.ReactNode;
        content: React.ReactNode;
        endContent?: React.ReactNode;
    };
    divider?: boolean;
};

export type Item = ButtonItem | LinkItem;

export const items: ({ onClickMap }: { onClickMap: Record<number, () => void> }) => Item[] = ({ onClickMap }) => [
    {
        type: 'button',
        element: {
            startContent: <TbSparkles className="text-xl" />,
            content: 'Ask Goffer',
            isPrimary: true,
        },
        onClick: onClickMap[0],
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
            content: 'Notifications',
            startContent: <TbBell className="text-xl" />,
            path: '/app/notifications',
            endContent: <div className="ml-auto h-2 w-2 rounded-full bg-primary" />,
        },
    },
    {
        type: 'link',
        element: {
            content: 'Messages',
            startContent: <TbChartBubble className="text-xl" />,
            path: '/app/messages',
            endContent: <div className="ml-auto h-2 w-2 rounded-full bg-primary" />,
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
            path: '/app/jobs',
            startContent: <TbBaguette className="text-xl" />,
            content: 'Jobs',
        },
    },
    {
        type: 'link',
        element: {
            path: '/app/portfolio',
            startContent: <TbPaint className="text-xl" />,
            content: 'Portfolio',
        },
    },
    {
        type: 'button',
        element: {
            startContent: <TbWallet className="text-xl" />,
            content: 'Wallet',
            endContent: <TbExternalLink className="ml-auto text-xl" />,
        },
        onClick: onClickMap[1],
    },
];

export const orgItems: (_: string, { onClickMap }: { onClickMap: Record<number, () => void> }) => Item[] = (
    domain: string,
    { onClickMap },
) => [
    {
        type: 'button',
        element: {
            startContent: <TbSparkles className="text-xl" />,
            content: 'Ask Goffer',
            isPrimary: true,
        },
        onClick: onClickMap[0],
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
            content: 'Notifications',
            startContent: <TbBell className="flex-shrink-0 text-xl" />,
            path: `/app/organization/${domain}/notifications`,
            endContent: <div className="ml-auto h-2 w-2 rounded-full bg-primary" />,
        },
    },
    {
        type: 'link',
        element: {
            content: 'Messages',
            startContent: <TbChartBubble className="text-xl" />,
            path: `/app/organization/${domain}/messages`,
            endContent: <div className="ml-auto h-2 w-2 rounded-full bg-primary" />,
        },
    },
    {
        type: 'link',
        element: {
            content: 'Assessment',
            startContent: <TbAtom className="text-xl" />,
            path: `/app/organization/${domain}/assessment`,
        },
        divider: true,
    },
    {
        type: 'link',
        element: {
            content: 'Question bank',
            startContent: <PiBank className="text-xl" />,
            path: `/app/organization/${domain}/bank`,
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
