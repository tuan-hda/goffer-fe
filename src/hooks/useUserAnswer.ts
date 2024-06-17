import { getUserAnswerFromQuestionService } from '@/services/answer.service';
import { useQuery } from '@tanstack/react-query';

const useUserAnswer = (questionId: string) => {
    return useQuery({
        queryKey: ['getUserAnswer', questionId],
        queryFn: () => getUserAnswerFromQuestionService(questionId),
        enabled: !!questionId,
    });
};

export default useUserAnswer;
