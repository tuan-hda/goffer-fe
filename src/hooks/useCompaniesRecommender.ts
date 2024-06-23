import { getCompaniesRecommenderService } from '@/services/recommender.service';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

const useCompaniesRecommender = () => {
    const [searchParams] = useSearchParams();

    return useInfiniteQuery({
        queryKey: ['companiesRecommendation', Object.fromEntries(searchParams.entries())],
        queryFn: ({ pageParam }) =>
            getCompaniesRecommenderService(pageParam, Object.fromEntries(searchParams.entries())),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if (lastPage.endOfResults) return undefined;
            return lastPage.page + 1;
        },
    });
};

export default useCompaniesRecommender;
