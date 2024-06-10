import useNewAssessmentStore from '@/stores/newAssessmentStore';
import { shallow } from 'zustand/shallow';
import QuestionBankListMCQ from '../questionBank/QuestionBankListMCQ';
import QuestionBankListCoding from '../questionBank/QuestionBankListCoding';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useListOrgQuestions from '@/hooks/useListOrgQuestions';

const AssessmentBuilderQuestionList = () => {
    const [assessment] = useNewAssessmentStore((state) => [state.assessment], shallow);
    const [searchParams] = useSearchParams();
    const { refetch: refetchMcq } = useListOrgQuestions({
        type: 'mcq',
        populate: 'author',
    });
    const { refetch: refetchCoding } = useListOrgQuestions({
        type: 'coding',
        populate: 'author',
    });

    useEffect(() => {
        const type = assessment.type;
        if (type === 'mcq') {
            refetchMcq();
        }
        if (type === 'coding') {
            refetchCoding();
        }
    }, [searchParams]);

    if (assessment.type === 'mcq') {
        return <QuestionBankListMCQ mode="pick" />;
    }

    return <QuestionBankListCoding mode="pick" />;
};

export default AssessmentBuilderQuestionList;
