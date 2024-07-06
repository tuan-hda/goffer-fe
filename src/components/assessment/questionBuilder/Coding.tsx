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
import { toast } from 'sonner';

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
    const { data } = useGetQuestion(id);
    const { refetch: refetchList } = useListOrgQuestions({ type: 'coding', populate: 'author' });
    const { data: org } = useCurrOrganization();

    useEffect(() => {
        if (data) {
            setQuestion(data);
        } else {
            setQuestion(initialData);
        }
    }, [location]);

    const isLinesValid = (lines: string, numberOfLines: number) => {
        return lines.split('\n').length % numberOfLines === 0;
    };

    const isInputOutputMatch = (
        input: string,
        output: string,
        numberOfInputLines: number,
        numberOfOutputLines: number,
    ) => {
        return (
            Math.floor(input.split('\n').length / (numberOfInputLines || 1)) ===
            Math.floor(output.split('\n').length / (numberOfOutputLines || 1))
        );
    };

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

                if (!questionBody.exampleInput) {
                    return toast.error('Example input is required');
                }
                if (!questionBody.exampleOutput) {
                    return toast.error('Example output is required');
                }
                if (!questionBody.numberOfTestCaseLines) {
                    return toast.error('Number of test case lines is required');
                }
                if (!questionBody.numberOfOutputLines) {
                    return toast.error('Number of output lines is required');
                }
                if (!questionBody.gradingInput) {
                    return toast.error('Grading input is required');
                }
                if (!questionBody.gradingOutput) {
                    return toast.error('Grading output is required');
                }

                questionBody.exampleInput = questionBody.exampleInput.trim();
                questionBody.exampleOutput = questionBody.exampleOutput.trim();
                questionBody.gradingInput = questionBody.gradingInput.trim();
                questionBody.gradingOutput = questionBody.gradingOutput.trim();

                if (!isLinesValid(questionBody.exampleInput, questionBody.numberOfTestCaseLines)) {
                    return toast.error('Example input lines must be a multiple of number of test case lines');
                }
                if (!isLinesValid(questionBody.exampleOutput, questionBody.numberOfOutputLines)) {
                    return toast.error('Example output lines must be a multiple of number of test case lines');
                }
                if (!isLinesValid(questionBody.gradingInput, questionBody.numberOfTestCaseLines)) {
                    return toast.error('Grading input lines must be a multiple of number of output lines');
                }
                if (!isLinesValid(questionBody.gradingOutput, questionBody.numberOfOutputLines)) {
                    return toast.error('Grading output lines must be a multiple of number of output lines');
                }
                if (
                    !isInputOutputMatch(
                        questionBody.exampleInput,
                        questionBody.exampleOutput,
                        questionBody.numberOfTestCaseLines,
                        questionBody.numberOfOutputLines,
                    )
                ) {
                    return toast.error('Number of example test cases must match');
                }
                if (
                    !isInputOutputMatch(
                        questionBody.gradingInput,
                        questionBody.gradingOutput,
                        questionBody.numberOfTestCaseLines,
                        questionBody.numberOfOutputLines,
                    )
                ) {
                    return toast.error('Number of grading test cases must match');
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
                    ...getProcessedQuestion('coding'),
                };
                delete questionBody['org'];
                delete questionBody.updatedAt;
                delete questionBody.createdAt;
                delete questionBody.id;
                questionBody.description = JSON.stringify(questionBody.description);

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
