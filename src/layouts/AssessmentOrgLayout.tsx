import useGetCurrAssessment from '@/hooks/useGetCurrAssessment';
import useNewAssessmentStore, { initialData } from '@/stores/newAssessmentStore';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const AssessmentOrgLayout = () => {
    const setAssessment = useNewAssessmentStore((state) => state.setAssessment);
    const { data } = useGetCurrAssessment();

    useEffect(() => {
        if (data) {
            setAssessment(data);
        } else {
            setAssessment(initialData);
        }
    }, [data, location]);

    return <Outlet />;
};

export default AssessmentOrgLayout;
