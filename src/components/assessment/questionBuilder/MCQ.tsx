import MCQBasic from './MCQBasic';
import MCQChoices from './MCQChoices';
import Header from './Header';
import useNewQuestionStore, { initialData } from '@/stores/newQuestionStore';
import catchAsync from '@/utils/catchAsync';
import { createQuestionService, updateQuestionService } from '@/services/question.service';
import { shallow } from 'zustand/shallow';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useGetQuestion from '@/hooks/useGetQuestion';
import { useEffect } from 'react';
import { Question } from '@/types/question.type';
import useListOrgQuestions from '@/hooks/useListOrgQuestions';

const MCQ = () => {
    const setQuestion = useNewQuestionStore((state) => state.setQuestion('mcq'));
    const location = useLocation();
    const navigate = useNavigate();
    const { domain } = useParams();

    const [getProcessedQuestion, setLoading] = useNewQuestionStore(
        (state) => [state.getProcessedQuestion, state.setLoading],
        shallow,
    );

    const { id } = useParams();
    const { data, refetch } = useGetQuestion(id);
    const { refetch: refetchList } = useListOrgQuestions({ type: 'mcq', populate: 'author' });
    const { data: org } = useCurrOrganization();

    useEffect(() => {
        if (data) {
            setQuestion(data);
        } else {
            setQuestion(initialData);
        }
    }, [location]);

    const create = () =>
        catchAsync(
            async () => {
                setLoading(true);
                const questionBody = {
                    ...getProcessedQuestion('mcq'),
                    org: org?.id!,
                    type: 'mcq',
                };
                if (
                    !questionBody.choices ||
                    questionBody.choices.length < 2 ||
                    !questionBody.choices.some((choice) => choice.isCorrect)
                ) {
                    throw new Error('Please provide at least 2 choices and mark one as correct');
                }
                const res = await createQuestionService(questionBody);
                await refetchList();
                navigate(`/app/organization/${domain}/bank/${res.id}`);
            },
            () => {
                setLoading(false);
            },
        );

    const update = () =>
        catchAsync(
            async () => {
                if (!data) return;
                setLoading(true);
                const questionBody: Partial<Question> = {
                    ...getProcessedQuestion('mcq'),
                };
                delete questionBody['org'];
                delete questionBody.updatedAt;
                delete questionBody.createdAt;
                delete questionBody.id;

                if (
                    !questionBody.choices ||
                    questionBody.choices.length < 2 ||
                    !questionBody.choices.some((choice) => choice.isCorrect)
                ) {
                    throw new Error('Please provide at least 2 choices and mark one as correct');
                }
                await updateQuestionService(data.id, questionBody);
                await refetch();
            },
            () => {
                setLoading(false);
            },
        );

    const handleSubmit = () => {
        if (data) {
            update();
        } else {
            create();
        }
    };

    return (
        <div className="relative grid grid-cols-12 flex-col gap-x-16 gap-y-6">
            <Header onFinish={handleSubmit} isUpdating={!!data} title="MCQ Builder" />
            <MCQBasic />
            <div className="absolute left-1/2 mt-16 h-[calc(100%-64px)] border-r" />
            <MCQChoices />
        </div>
    );
};

export default MCQ;
