import { Outlet } from 'react-router-dom';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';

const RootLayout = () => {
    useSelfProfileQuery();
    return <Outlet />;
};

export default RootLayout;
