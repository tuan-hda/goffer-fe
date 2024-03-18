import { Outlet } from 'react-router-dom';
import useSelfProfileQuery from 'src/hooks/useSelfProfileQuery';

const RootLayout = () => {
    useSelfProfileQuery();
    return <Outlet />;
};

export default RootLayout;
