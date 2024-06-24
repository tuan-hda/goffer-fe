import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import AutoCenterLayout from './AutoCenterLayout';
import AuthRequiredLayout from './AuthRequiredLayout';
import { useEffect } from 'react';

const AppLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/app') {
            navigate('/app/profile');
        }
    }, [location]);

    return (
        <AuthRequiredLayout>
            <DashboardLayout>
                <AutoCenterLayout>
                    <Outlet />
                </AutoCenterLayout>
            </DashboardLayout>
        </AuthRequiredLayout>
    );
};

export default AppLayout;
