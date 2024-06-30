import { getSourcingService } from '@/services/jobs.service';
import { getCandidatesRecommenderService } from '@/services/recommender.service';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

const useSourcing = (id?: string) => {
    const [searchParams] = useSearchParams();

    const params = Object.fromEntries(searchParams.entries());
    delete params.tab;

    return useInfiniteQuery({
        queryKey: ['sourcing', id, params],
        queryFn: ({ pageParam }) => getCandidatesRecommenderService(id!, pageParam, params),
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
