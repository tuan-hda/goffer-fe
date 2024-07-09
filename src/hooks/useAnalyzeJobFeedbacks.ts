import { listFeedbacksService } from '@/services/feedback.service';
import { useQuery } from '@tanstack/react-query';

const useAnalyzeJobFeedbacks = (jobId?: string) => {
    return useQuery({
        queryKey: ['getAnalyzeJobFeedbacks', jobId],
        queryFn: () => listFeedbacksService({ job: jobId }),
    });
};

export default useAnalyzeJobFeedbacks;
