import Header from './Header';
import QuestionBehavioralForm from './QuestionBehavioralForm';
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

const Behavioral = () => {
    const setQuestion = useNewQuestionStore((state) => state.setQuestion('behavioral'));
    const location = useLocation();
    const navigate = useNavigate();
    const { domain } = useParams();

    const [getProcessedQuestion, setLoading] = useNewQuestionStore(
        (state) => [state.getProcessedQuestion, state.setLoading],
        shallow,
    );

    const { id } = useParams();
    const { data } = useGetQuestion(id);
    const { refetch: refetchList } = useListOrgQuestions({ type: 'behavioral', populate: 'author' });
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
                    ...getProcessedQuestion('behavioral'),
                    org: org?.id!,
                    type: 'behavioral',
                };
                delete questionBody.difficulty;

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
                    ...getProcessedQuestion('behavioral'),
                };
                delete questionBody['org'];
                delete questionBody.updatedAt;
                delete questionBody.createdAt;
                delete questionBody.id;
                delete questionBody.difficulty;

                await updateQuestionService(data.id, questionBody);
                await refetchList();
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
        <div>
            <Header onFinish={handleSubmit} isUpdating={!!data} title="Question Behavioral Builder" />
            <div className="mt-8 flex gap-10">
                <div className="max-w-[560px] flex-1">
                    <QuestionBehavioralForm />
                </div>
                <div className="bg-image-doodles flex-1 rounded-xl opacity-50" />
            </div>
        </div>
    );
};

export default Behavioral;
