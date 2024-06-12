import { getSourcingService } from '@/services/jobs.service';
import { useInfiniteQuery } from '@tanstack/react-query';

const useSourcing = (id?: string) => {
    return useInfiniteQuery({
        queryKey: ['sourcing', id],
        queryFn: ({ pageParam }) => getSourcingService(id!, pageParam),
        enabled: !!id,
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if (lastPage.page < lastPage.totalPages) {
                return lastPage.page + 1;
            }
        },
    });
};

export default useSourcing;
