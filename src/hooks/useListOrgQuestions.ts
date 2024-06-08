import { listQuestionsService } from '@/services/question.service';
import { ListQueryOptions } from '@/types/common.type';
import { Question } from '@/types/question.type';
import { useQuery } from '@tanstack/react-query';

const useListOrgQuestions = (query?: Partial<Record<keyof (Question & ListQueryOptions), string>>) => {
    return useQuery({
        queryKey: ['listOrgQuestions', query],
        queryFn: async () => listQuestionsService(query),
    });
};

export default useListOrgQuestions;
