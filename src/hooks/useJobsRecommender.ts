import { getJobsRecommenderService, getUsersRecommenderService } from '@/services/recommender.service';
import { useQuery } from '@tanstack/react-query';

const useJobsRecommender = () => {
    return useQuery({
        queryKey: ['jobsRecommendation'],
        queryFn: async () => getJobsRecommenderService(),
    });
};

export default useJobsRecommender;
