import { useParams } from 'react-router-dom';
import useGetAssessment from './useGetAssessment';

const useGetCurrAssessment = () => {
    const { id, assessmentId } = useParams();

    return useGetAssessment(id || assessmentId);
};

export default useGetCurrAssessment;
