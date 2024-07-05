import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import AuthRequiredLayout from './AuthRequiredLayout';
import useCurrTakingAssessment from '@/hooks/useCurrTakingAssessment';
import { useEffect } from 'react';
import { remainTime } from '@/utils/time';

const AssessmentLayout = () => {
    const { data: session, isLoading } = useCurrTakingAssessment();
    const navigate = useNavigate();
    const location = useLocation();
    const { assessmentId } = useParams();

    // useEffect(() => {
    //     if (!isLoading) {
    //         if (session) {
    //             if (
    //                 location.pathname !== `/assessment/${assessmentId}/success` &&
    //                 (remainTime(session.endingAt) <= 0 || session.status === 'closed')
    //             ) {
    //                 navigate(`/assessment/${assessmentId}/success`);
    //             } else if (
    //                 location.pathname !== `/assessment/${assessmentId}/session` &&
    //                 remainTime(session.endingAt) > 0 &&
    //                 session.status !== 'closed'
    //             ) {
    //                 navigate(`/assessment/${assessmentId}/session`);
    //             }
    //         } else {
    //             if (location.pathname !== `/assessment/${assessmentId}`) navigate(`/assessment/${assessmentId}`);
    //         }
    //     }
    // }, [session, location, isLoading, assessmentId, navigate]);

    return (
        <AuthRequiredLayout>
            <Outlet />
        </AuthRequiredLayout>
    );
};

export default AssessmentLayout;
