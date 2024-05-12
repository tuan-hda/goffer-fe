import { Outlet } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import AutoCenterLayout from './AutoCenterLayout';
import AuthRequiredLayout from './AuthRequiredLayout';

const AppLayout = () => {
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
