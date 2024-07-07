import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { NotFound } from '@/pages';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    const { data: self } = useSelfProfileQuery();
    if (!self || self.role !== 'admin') return <NotFound />;

    return <Outlet />;
};

export default AdminLayout;
