import { useParams } from 'react-router-dom';
import usePublicAssessment from './usePublicAssessment';

const useCurrPublicAssessment = () => {
    const { assessmentId } = useParams();
    return usePublicAssessment(assessmentId);
};

export default useCurrPublicAssessment;
