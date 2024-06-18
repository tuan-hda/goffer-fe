import useGetCurrAssessment from '@/hooks/useGetCurrAssessment';
import useNewAssessmentStore, { initialData } from '@/stores/newAssessmentStore';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const AssessmentOrgLayout = () => {
    const setAssessment = useNewAssessmentStore((state) => state.setAssessment);
    const { data } = useGetCurrAssessment();
    const location = useLocation();

    useEffect(() => {
        if (data) {
            setAssessment({
                ...data,
                job: data.job?.id,
                org: data.org?.id,
            });
        } else {
            setAssessment(initialData);
        }
    }, [data, location]);

    return <Outlet />;
};

export default AssessmentOrgLayout;
