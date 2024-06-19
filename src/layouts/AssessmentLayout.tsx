import { Outlet, useNavigate, useParams } from 'react-router-dom';
import AuthRequiredLayout from './AuthRequiredLayout';
import useCurrTakingAssessment from '@/hooks/useCurrTakingAssessment';
import { useEffect } from 'react';

const AssessmentLayout = () => {
    const { data: session } = useCurrTakingAssessment();
    const navigate = useNavigate();
    const { assessmentId } = useParams();

    useEffect(() => {
        if (session) {
            navigate(`/assessment/${assessmentId}/session`);
        }
    }, [session]);

    return (
        <AuthRequiredLayout>
            <Outlet />
        </AuthRequiredLayout>
    );
};

export default AssessmentLayout;
