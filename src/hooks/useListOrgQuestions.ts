import { listQuestionsService } from '@/services/question.service';
import { ListQueryOptions } from '@/types/common.type';
import { Question } from '@/types/question.type';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

const useListOrgQuestions = (query?: Partial<Record<keyof (Question & ListQueryOptions), string>>) => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || '';
    const difficulty = searchParams.get('difficulty') || '';

    const finalQuery = {
        ...(difficulty && { difficulty }),
        ...query,
        ...(search && { search }),
    };

    return useQuery({
        queryKey: ['listOrgQuestions', query],
        queryFn: async () => listQuestionsService(finalQuery),
        staleTime: 1000,
    });
};

export default useListOrgQuestions;
