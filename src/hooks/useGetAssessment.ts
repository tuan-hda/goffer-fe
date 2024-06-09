import { useQuery } from '@tanstack/react-query';
import { getAssessmentService } from '@/services/assessment.service';

const useGetAssessment = (id?: string) => {
    return useQuery({
        queryKey: ['getAssessment', id],
        queryFn: () => getAssessmentService(id!),
        enabled: !!id,
    });
};

export default useGetAssessment;
