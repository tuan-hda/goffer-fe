import { listRecommendationsService } from '@/services/recommendation.service';
import { useQuery } from '@tanstack/react-query';

const useListRecommendations = (userId?: string, fetchHidden?: boolean) => {
    return useQuery({
        queryKey: ['recommendations', userId, fetchHidden],
        queryFn: async () =>
            listRecommendationsService({
                user: userId,
                limit: 1000,
                populate: 'user,owner',
                ...(!fetchHidden && { isHide: 'false' }),
            }),
    });
};

export default useListRecommendations;
