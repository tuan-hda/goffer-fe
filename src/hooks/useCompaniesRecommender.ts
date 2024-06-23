import { getCompaniesRecommenderService } from '@/services/recommender.service';
import { useQuery } from '@tanstack/react-query';

const useCompaniesRecommender = () => {
    return useQuery({
        queryKey: ['companiesRecommendation'],
        queryFn: async () => getCompaniesRecommenderService(),
    });
};

export default useCompaniesRecommender;
