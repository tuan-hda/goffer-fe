import { useSearchParams } from 'react-router-dom';
import useCurrPublicAssessment from './useCurrPublicAssessment';
import { Question } from '@/types/question.type';

const useCurrentTakingCodingQuestion = () => {
    const { data: assessment } = useCurrPublicAssessment();
    const [searchParams] = useSearchParams();
    return {
        data: Array.from(assessment?.questions.values() || []).at(Number(searchParams.get('q') || 0)),
    };
};

export default useCurrentTakingCodingQuestion;
