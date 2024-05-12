import { Outlet } from 'react-router-dom';
import AuthRequiredLayout from './AuthRequiredLayout';

const AssessmentLayout = () => {
    return (
        <AuthRequiredLayout>
            <Outlet />
        </AuthRequiredLayout>
    );
};

export default AssessmentLayout;
