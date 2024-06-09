import { useParams } from 'react-router-dom';
import useGetAssessment from './useGetAssessment';

const useGetCurrAssessment = () => {
    const { id } = useParams();

    return useGetAssessment(id);
};

export default useGetCurrAssessment;
