import { getUsersRecommenderService } from '@/services/recommender.service';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const useUsersRecommender = () => {
    const [searchParams] = useSearchParams();

    return useInfiniteQuery({
        queryKey: ['usersRecommendation', Object.fromEntries(searchParams.entries())],
        queryFn: ({ pageParam }) => getUsersRecommenderService(pageParam, Object.fromEntries(searchParams.entries())),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if (lastPage.endOfResults) return undefined;
            return lastPage.page + 1;
        },
    });
};

export default useUsersRecommender;
