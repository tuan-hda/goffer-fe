import { getEvaluationsService } from '@/services/evaluation.service';
import { Evaluation, ListEvaluationItem } from '@/types/evaluation.type';
import { useQuery } from '@tanstack/react-query';

const useListEvaluations = (params?: Partial<Record<keyof ListEvaluationItem, unknown>>) => {
    return useQuery({
        queryKey: ['listEvaluations', params],
        queryFn: () => getEvaluationsService(params),
    });
};

export default useListEvaluations;
