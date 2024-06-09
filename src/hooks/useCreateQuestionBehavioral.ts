import useNewQuestionStore, { initialData } from '@/stores/newQuestionStore';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import useGetQuestion from './useGetQuestion';
import useListOrgQuestions from './useListOrgQuestions';
import useCurrOrganization from './useCurrOrganization';
import { useEffect } from 'react';
import catchAsync from '@/utils/catchAsync';
import { createQuestionService, updateQuestionService } from '@/services/question.service';
import { Question } from '@/types/question.type';

const useCreateQuestionBehavioral = (staying = false) => {
    const setQuestion = useNewQuestionStore((state) => state.setQuestion('behavioral'));
    const location = useLocation();
    const navigate = useNavigate();
    const { domain } = useParams();

    const [getProcessedQuestion, setLoading, loading] = useNewQuestionStore(
        (state) => [state.getProcessedQuestion, state.setLoading, state.loading],
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

    const create = (fn?: () => void) =>
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
                if (!staying) navigate(`/app/organization/${domain}/bank/${res.id}`);
                setQuestion(initialData);
                fn && fn();
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

    return {
        create,
        update,
        data,
        loading,
    };
};

export default useCreateQuestionBehavioral;
