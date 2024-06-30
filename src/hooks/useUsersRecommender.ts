import { getUsersRecommenderService } from '@/services/recommender.service';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const useUsersRecommender = () => {
    const [searchParams] = useSearchParams();

    const params = Object.fromEntries(searchParams.entries());
    delete params.tab;

    return useInfiniteQuery({
        queryKey: ['usersRecommendation', params],
        queryFn: ({ pageParam }) => getUsersRecommenderService(pageParam, params),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if (lastPage.endOfResults) return undefined;
            return lastPage.page + 1;
        },
    });
};

export default useUsersRecommender;
