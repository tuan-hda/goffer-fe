import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import AuthRequiredLayout from './AuthRequiredLayout';
import useCurrTakingAssessment from '@/hooks/useCurrTakingAssessment';
import { useEffect } from 'react';
import { remainTime } from '@/utils/time';
import { TakeAssessment } from '@/types/takingAssessment.type';
import { Assessment, AssessmentUpdate } from '@/types/assessment.type';
import useGetCurrAssessment from '@/hooks/useGetCurrAssessment';
import useGetAssessment from '@/hooks/useGetAssessment';

const AssessmentLayout = () => {
    const { data: session, isLoading } = useCurrTakingAssessment();
    const navigate = useNavigate();
    const location = useLocation();
    const { assessmentId } = useParams();
    const { data: assessment } = useGetAssessment(assessmentId);

    const isSuccess = (session?: TakeAssessment) => {
        return session && (session.status === 'closed' || remainTime(session.endingAt) <= 0);
    };

    const isTaking = (session?: TakeAssessment) => {
        return session && session.status !== 'closed' && remainTime(session.endingAt) > 0;
    };

    const isNotStarted = (session?: TakeAssessment) => {
        return !session;
    };

    const getSessionLink = (assessment: Assessment) => {
        if (assessment?.type === 'coding') {
            return `/assessment/${assessment?.id}/coding-session`;
        }
        return `/assessment/${assessment?.id}/session`;
    };

    useEffect(() => {
        if (!assessment) {
            return;
        }

        if (!isLoading) {
            if (isNotStarted(session) && location.pathname !== `/assessment/${assessment.id}`) {
                return navigate(`/assessment/${assessment.id}`);
            }
            if (isSuccess(session) && location.pathname !== `/assessment/${assessment.id}/success`) {
                return navigate(`/assessment/${assessment.id}/success`);
            }
            if (isTaking(session) && location.pathname !== getSessionLink(assessment)) {
                return navigate(getSessionLink(assessment));
            }
        }
    }, [session, location, isLoading, assessment, navigate]);

    return (
        <AuthRequiredLayout>
            <Outlet />
        </AuthRequiredLayout>
    );
};

export default AssessmentLayout;
