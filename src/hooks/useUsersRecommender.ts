import { getUsersRecommenderService } from '@/services/recommender.service';
import { useQuery } from '@tanstack/react-query';

const useUsersRecommender = () => {
    return useQuery({
        queryKey: ['usersRecommendation'],
        queryFn: async () => getUsersRecommenderService(),
    });
};

export default useUsersRecommender;
