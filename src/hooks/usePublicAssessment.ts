import { getPublicAssessmentService } from '@/services/assessment.service';
import { useQuery } from '@tanstack/react-query';

const usePublicAssessment = (id?: string) => {
    return useQuery({
        queryKey: ['public-assessment', id],
        queryFn: () => getPublicAssessmentService(id!),
        enabled: !!id,
    });
};

export default usePublicAssessment;
