import { getTakingAssessmentByAssessmentId } from '@/services/takeAssessment.service';
import { useQuery } from '@tanstack/react-query';

const useGetTakingAssessment = (id: string) => {
    return useQuery({
        queryKey: ['getTakingAssessment', id],
        queryFn: () => getTakingAssessmentByAssessmentId(id),
    });
};

export default useGetTakingAssessment;
