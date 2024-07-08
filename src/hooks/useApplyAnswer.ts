import { getApplyAnswer } from '@/services/answer.service';
import { useQuery } from '@tanstack/react-query';

const useApplyAnswer = (questionId: string, jobId: string) => {
    return useQuery({
        queryKey: ['getApplyAnswer', questionId, jobId],
        queryFn: () => getApplyAnswer(questionId, jobId),
        enabled: !!questionId,
    });
};

export default useApplyAnswer;
