import { TbDashboard, TbExternalLink, TbReport, TbUsers } from 'react-icons/tb';

export const adminItems = [
    {
        title: 'Reports',
        startIcon: <TbReport className="text-xl" />,
        path: '/app/admin',
    },
    {
        title: 'Users',
        startIcon: <TbUsers className="text-xl" />,
        path: '/app/admin/users',
    },
    {
        title: 'Analytics',
        startIcon: <TbDashboard className="text-xl" />,
        endIcon: <TbExternalLink className="ml-auto text-xl" />,
        path: 'https://analytics.google.com/analytics/web/#/analysis/p448715312/edit/w5NPTYBiT-KTkaMiS372iA',
        target: '_blank',
    },
];
