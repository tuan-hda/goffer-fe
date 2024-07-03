import { getSubmitTimeDataService } from '@/services/analytics.service';
import { useQuery } from '@tanstack/react-query';

const useGetSubmitTime = (jobId?: string) => {
    return useQuery({
        queryKey: ['submit-time', jobId],
        queryFn: () => getSubmitTimeDataService(jobId!),
        enabled: !!jobId,
    });
};

export default useGetSubmitTime;
