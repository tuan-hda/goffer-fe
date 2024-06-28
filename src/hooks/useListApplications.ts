import { listApplicationService } from '@/services/apply.service';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const useListApplications = () => {
    const infiniteQuery = useInfiniteQuery({
        queryKey: ['listApplications'],
        queryFn: ({ pageParam }) =>
            listApplicationService({
                pageParam,
            }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.page >= lastPage.totalResults) return undefined;
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

export default useListApplications;
