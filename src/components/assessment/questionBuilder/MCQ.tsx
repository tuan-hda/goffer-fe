import MCQBasic from './MCQBasic';
import MCQChoices from './MCQChoices';
import Header from './Header';
import useNewQuestionStore from '@/stores/newQuestionStore';
import catchAsync from '@/utils/catchAsync';
import { createQuestionService } from '@/services/question.service';
import { shallow } from 'zustand/shallow';
import useCurrOrganization from '@/hooks/useCurrOrganization';

const MCQ = () => {
    const [getProcessedQuestion, setLoading] = useNewQuestionStore(
        (state) => [state.getProcessedQuestion, state.setLoading],
        shallow,
    );
    const { data } = useCurrOrganization();

    const handleSubmit = () =>
        catchAsync(
            async () => {
                setLoading(true);
                const questionBody = {
                    ...getProcessedQuestion('mcq'),
                    org: data?.id!,
                    type: 'mcq',
                };
                if (
                    !questionBody.choices ||
                    questionBody.choices.length < 2 ||
                    !questionBody.choices.some((choice) => choice.isCorrect)
                ) {
                    throw new Error('Please provide at least 2 choices and mark one as correct');
                }
                await createQuestionService(questionBody);
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <div className="relative grid grid-cols-12 flex-col gap-x-16 gap-y-6">
            <Header onFinish={handleSubmit} title="MCQ Builder" />
            <MCQBasic />
            <div className="absolute left-1/2 mt-16 h-[calc(100%-64px)] border-r" />
            <MCQChoices />
        </div>
    );
};

export default MCQ;
