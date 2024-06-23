import { getJobsRecommenderService, getUsersRecommenderService } from '@/services/recommender.service';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

const useJobsRecommender = () => {
    const [searchParams] = useSearchParams();

    return useQuery({
        queryKey: ['jobsRecommendation', searchParams.get('searchQuery')],
        queryFn: async () => getJobsRecommenderService(1, searchParams.get('searchQuery') || ''),
    });
};

export default useJobsRecommender;
