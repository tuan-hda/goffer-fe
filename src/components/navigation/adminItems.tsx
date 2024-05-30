import { TbDashboard, TbReport } from 'react-icons/tb';

export const adminItems = [
    {
        title: 'Dashboard',
        startIcon: <TbDashboard className="text-xl" />,
        path: '/app/admin',
    },
    {
        title: 'Reports',
        startIcon: <TbReport className="text-xl" />,
        path: '/app/admin/reports',
    },
];
