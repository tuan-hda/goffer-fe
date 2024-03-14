import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSelfService } from 'src/services/users.service';

const RootLayout = () => {
    useQuery({ queryKey: ['getSelf'], queryFn: getSelfService });

    return <Outlet />;
};

export default RootLayout;
