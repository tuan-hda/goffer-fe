import { listQuestionsService } from '@/services/question.service';
import { ListQueryOptions } from '@/types/common.type';
import { Question } from '@/types/question.type';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import useCurrOrganization from './useCurrOrganization';
import { useMemo } from 'react';

const useListOrgQuestions = (query?: Partial<Record<keyof (Question & ListQueryOptions), unknown>>) => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || '';
    const difficulty = searchParams.get('difficulty') || '';

    const queryKey = query || {};
    const { data } = useCurrOrganization();

    queryKey.limit = 9;

    if (!queryKey.org) {
        queryKey.org = data?.id;
    }

    const actualQuery = {
        ...(difficulty && { difficulty }),
        ...queryKey,
        ...(search && { search }),
    };

    const infiniteQuery = useInfiniteQuery({
        queryKey: ['listOrgQuestions', queryKey],
        queryFn: async ({ pageParam }) =>
            listQuestionsService({
                ...actualQuery,
                page: pageParam,
            }),
        staleTime: 1000,
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.page >= lastPage.totalPages) return undefined;
            return lastPage.page + 1;
        },
    });

    const list = useMemo(() => {
        return infiniteQuery.data?.pages.map((page) => page.results).flat();
    }, [infiniteQuery.data?.pages]);

    const totalResults = useMemo(() => {
        return infiniteQuery.data?.pages.at(0)?.totalResults;
    }, [infiniteQuery.data?.pages]);

    return { ...infiniteQuery, list, totalResults };
};

export default useListOrgQuestions;
