import { getJobsRecommenderService } from '@/services/recommender.service';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

const useJobsRecommender = () => {
    const [searchParams] = useSearchParams();

    const params = Object.fromEntries(searchParams.entries());
    delete params.tab;

    return useInfiniteQuery({
        queryKey: [
            'jobsRecommendation',
            {
                ...params,
                limit: 9,
            },
        ],
        queryFn: ({ pageParam = 0 }) =>
            getJobsRecommenderService(pageParam, {
                ...params,
                limit: '9',
            }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if (lastPage.endOfResults) return undefined;
            return lastPage.page + 1;
        },
    });
};

export default useJobsRecommender;
