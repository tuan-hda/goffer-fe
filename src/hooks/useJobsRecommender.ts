import { getJobsRecommenderService } from '@/services/recommender.service';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

const useJobsRecommender = () => {
    const [searchParams] = useSearchParams();

    return useInfiniteQuery({
        queryKey: ['jobsRecommendation', Object.fromEntries(searchParams.entries())],
        queryFn: ({ pageParam = 0 }) =>
            getJobsRecommenderService(pageParam, Object.fromEntries(searchParams.entries())),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if (lastPage.endOfResults) return undefined;
            return lastPage.page + 1;
        },
    });
};

export default useJobsRecommender;
