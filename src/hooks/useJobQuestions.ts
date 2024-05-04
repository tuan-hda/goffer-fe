import { getQuestions } from '@/services/question.service';
import { useQuery } from '@tanstack/react-query';

const useJobQuestions = (jobId?: string) => {
    return useQuery({ queryKey: ['getJobQuestions', jobId], queryFn: () => getQuestions(jobId), enabled: !!jobId });
};

export default useJobQuestions;
