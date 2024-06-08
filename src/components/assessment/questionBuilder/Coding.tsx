import useNewQuestionStore, { initialData } from '@/stores/newQuestionStore';
import CodingQuestion from './CodingQuestion';
import CodingTestCase from './CodingTestCase';
import Header from './Header';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import useGetQuestion from '@/hooks/useGetQuestion';
import useListOrgQuestions from '@/hooks/useListOrgQuestions';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import { useEffect } from 'react';
import catchAsync from '@/utils/catchAsync';
import { createQuestionService, updateQuestionService } from '@/services/question.service';
import { NewQuestion, Question } from '@/types/question.type';

const Coding = () => {
    const setQuestion = useNewQuestionStore((state) => state.setQuestion('coding'));
    const location = useLocation();
    const navigate = useNavigate();
    const { domain } = useParams();

    const [getProcessedQuestion, setLoading] = useNewQuestionStore(
        (state) => [state.getProcessedQuestion, state.setLoading],
        shallow,
    );

    const { id } = useParams();
    const { data, refetch } = useGetQuestion(id);
    const { refetch: refetchList } = useListOrgQuestions({ type: 'coding', populate: 'author' });
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
                const processedQuestion = getProcessedQuestion('coding');
                const questionBody: NewQuestion = {
                    ...processedQuestion,
                    org: org?.id!,
                    type: 'coding',
                    description: JSON.stringify(processedQuestion.description),
                };

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
                    ...getProcessedQuestion('coding'),
                };
                delete questionBody['org'];
                delete questionBody.updatedAt;
                delete questionBody.createdAt;
                delete questionBody.id;
                questionBody.description = JSON.stringify(questionBody.description);

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
            <Header onFinish={handleSubmit} isUpdating={!!data} title="Question Coding Builder" />
            <div className="col-span-12 pt-5">
                <CodingQuestion />
                <div className="h-20" />
                <CodingTestCase />
            </div>
        </div>
    );
};

export default Coding;
