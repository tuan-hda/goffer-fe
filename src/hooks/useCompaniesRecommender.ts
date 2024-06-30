import { getCompaniesRecommenderService } from '@/services/recommender.service';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

const useCompaniesRecommender = () => {
    const [searchParams] = useSearchParams();
    const params = Object.fromEntries(searchParams.entries());
    delete params.tab;
    return useInfiniteQuery({
        queryKey: ['companiesRecommendation', params],
        queryFn: ({ pageParam }) => getCompaniesRecommenderService(pageParam, params),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if (lastPage.endOfResults) return undefined;
            return lastPage.page + 1;
        },
    });
};

export default useCompaniesRecommender;
