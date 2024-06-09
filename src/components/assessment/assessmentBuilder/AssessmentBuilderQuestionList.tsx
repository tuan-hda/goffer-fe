import useNewAssessmentStore from '@/stores/newAssessmentStore';
import { shallow } from 'zustand/shallow';
import QuestionBankListMCQ from '../questionBank/QuestionBankListMCQ';
import QuestionBankListCoding from '../questionBank/QuestionBankListCoding';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useListOrgQuestions from '@/hooks/useListOrgQuestions';

const AssessmentBuilderQuestionList = () => {
    const [assessment, setAssessment] = useNewAssessmentStore(
        (state) => [state.assessment, state.setAssessment],
        shallow,
    );
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

    useEffect(() => {
        setAssessment((state) => ({ ...state, questions: new Map() }));
    }, [assessment.type]);

    if (assessment.type === 'mcq') {
        return <QuestionBankListMCQ mode="pick" />;
    }

    return <QuestionBankListCoding mode="pick" />;
};

export default AssessmentBuilderQuestionList;
