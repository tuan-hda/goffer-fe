import { getApplyAnswer } from '@/services/answer.service';
import { useQuery } from '@tanstack/react-query';

const useApplyAnswer = (questionId: string, applicationId?: string) => {
    return useQuery({
        queryKey: ['getApplyAnswer', applicationId, questionId],
        queryFn: () => getApplyAnswer(questionId, applicationId),
        enabled: !!questionId,
    });
};

export default useApplyAnswer;
