import { getUserAnswerFromQuestionService } from '@/services/answer.service';
import { useQuery } from '@tanstack/react-query';

const useUserAnswer = (questionId: string, id: string) => {
    return useQuery({
        queryKey: ['getUserAnswer', questionId, id],
        queryFn: () => getUserAnswerFromQuestionService(questionId, id),
        enabled: !!questionId,
    });
};

export default useUserAnswer;
