import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import AuthRequiredLayout from './AuthRequiredLayout';
import useCurrTakingAssessment from '@/hooks/useCurrTakingAssessment';
import { useEffect } from 'react';

const AssessmentLayout = () => {
    const { data: session, isLoading } = useCurrTakingAssessment();
    const navigate = useNavigate();
    const location = useLocation();
    const { assessmentId } = useParams();

    useEffect(() => {
        if (!isLoading) {
            if (session) {
                if (location.pathname !== `/assessment/${assessmentId}/session`)
                    navigate(`/assessment/${assessmentId}/session`, {
                        replace: true,
                    });
            } else {
                if (location.pathname !== `/assessment/${assessmentId}`)
                    navigate(`/assessment/${assessmentId}`, {
                        replace: true,
                    });
            }
        }
    }, [session, location, isLoading, assessmentId, navigate]);

    return (
        <AuthRequiredLayout>
            <Outlet />
        </AuthRequiredLayout>
    );
};

export default AssessmentLayout;
