import { listRecommendationsService } from '@/services/recommendation.service';
import { useQuery } from '@tanstack/react-query';

const useListRecommendations = (userId?: string) => {
    return useQuery({
        queryKey: ['recommendations', userId],
        queryFn: async () =>
            listRecommendationsService({
                user: userId,
                limit: 1000,
                populate: 'user,owner',
            }),
    });
};

export default useListRecommendations;
