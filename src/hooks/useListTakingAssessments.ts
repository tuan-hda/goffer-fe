import { listTakingAssessmentsService } from '@/services/takeAssessment.service';
import { ListQueryOptions } from '@/types/common.type';
import { TakeAssessment } from '@/types/takingAssessment.type';
import { useQuery } from '@tanstack/react-query';

const useListTakingAssessments = (params?: Partial<Record<keyof (TakeAssessment & ListQueryOptions), unknown>>) => {
    return useQuery({
        queryKey: ['listTakingAssessments', params],
        queryFn: () => listTakingAssessmentsService(params),
    });
};

export default useListTakingAssessments;
