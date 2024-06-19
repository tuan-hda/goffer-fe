import { listQuestionsService } from '@/services/question.service';
import { ListQueryOptions } from '@/types/common.type';
import { Question } from '@/types/question.type';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import useCurrOrganization from './useCurrOrganization';

const useListOrgQuestions = (query?: Partial<Record<keyof (Question & ListQueryOptions), string>>) => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || '';
    const difficulty = searchParams.get('difficulty') || '';

    const queryKey = query || {};
    const { data } = useCurrOrganization();

    queryKey.limit = '100';

    if (!queryKey.org) {
        queryKey.org = data?.id;
    }

    const actualQuery = {
        ...(difficulty && { difficulty }),
        ...queryKey,
        ...(search && { search }),
    };

    return useQuery({
        queryKey: ['listOrgQuestions', queryKey],
        queryFn: async () => listQuestionsService(actualQuery),
        staleTime: 1000,
    });
};

export default useListOrgQuestions;
