import { getQuestionService } from '@/services/question.service';
import { useQuery } from '@tanstack/react-query';

const useGetQuestion = (id?: string) => {
    return useQuery({
        queryKey: ['question', id],
        queryFn: () => getQuestionService(id!),
        enabled: !!id,
    });
};

export default useGetQuestion;
