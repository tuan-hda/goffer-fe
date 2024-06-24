import { getSourcingService } from '@/services/jobs.service';
import { getCandidatesRecommenderService } from '@/services/recommender.service';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

const useSourcing = (id?: string) => {
    const [searchParams] = useSearchParams();

    return useInfiniteQuery({
        queryKey: ['sourcing', id, Object.fromEntries(searchParams.entries())],
        queryFn: ({ pageParam }) =>
            getCandidatesRecommenderService(id!, pageParam, Object.fromEntries(searchParams.entries())),
        enabled: !!id,
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if (lastPage.endOfResults) {
                return undefined;
            }
            return lastPage.page + 1;
        },
    });
};

export default useSourcing;
