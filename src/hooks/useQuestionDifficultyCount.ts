import { getQuestionDifficultyCountService } from '@/services/question.service';
import { useQuery } from '@tanstack/react-query';

const useQuestionDifficultyCount = () => {
    return useQuery({ queryKey: ['questionDifficultyCount'], queryFn: getQuestionDifficultyCountService });
};

export default useQuestionDifficultyCount;
