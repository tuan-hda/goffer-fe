import { ListQueryOptions } from '@/types/common.type';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import useCurrOrganization from './useCurrOrganization';
import { Assessment } from '@/types/assessment.type';
import { listAssessmentsService } from '@/services/assessment.service';
import { useMemo } from 'react';

const useListOrgAssessment = (query?: Partial<Record<keyof (Assessment & ListQueryOptions), unknown>>) => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || '';
    const type = searchParams.get('type') || 'all';

    const queryKey = query || {};
    const { data } = useCurrOrganization();

    queryKey.limit = '100';

    if (!queryKey.org) {
        queryKey.org = data?.id;
    }

    if (!queryKey.job) {
        queryKey.job = 'all';
    }

    if (type !== 'all') queryKey.type = type;

    const actualQuery = {
        ...queryKey,
        ...(search && { search }),
    };

    const infiniteQuery = useInfiniteQuery({
        queryKey: ['listOrgAssessments', queryKey],
        queryFn: async ({ pageParam }) => listAssessmentsService({ ...actualQuery, page: pageParam }),
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.page >= lastPage.totalPages) return undefined;
            return lastPage.page + 1;
        },
        initialPageParam: 0,
    });
    const list = useMemo(() => {
        return infiniteQuery.data?.pages.map((page) => page.results).flat();
    }, [infiniteQuery.data?.pages]);

    const totalResults = useMemo(() => {
        return infiniteQuery.data?.pages.at(0)?.totalResults;
    }, [infiniteQuery.data?.pages]);

    return { ...infiniteQuery, list, totalResults };
};

export default useListOrgAssessment;
