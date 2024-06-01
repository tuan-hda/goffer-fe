import { TbDashboard, TbReport, TbUsers } from 'react-icons/tb';

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
    {
        title: 'Users',
        startIcon: <TbUsers className="text-xl" />,
        path: '/app/admin/users',
    },
];
