import { TbCircleFilled, TbSparkles } from 'react-icons/tb';
import AudioRecorder from '../applicant/common/AudioRecorder';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { Answer } from '@/types/answer.type';
import catchAsync from '@/utils/catchAsync';
import { CreateEvaluation } from '@/types/evaluation.type';
import { createEvaluationService, deleteEvaluationService } from '@/services/evaluation.service';
import useCurrEvaluation from '@/hooks/useCurrEvaluation';
import classNames from 'classnames';
import useCurrApplication from '@/hooks/useCurrApplication';
import useListEvaluations from '@/hooks/useListEvaluations';

type ApplicantResponseProps = {
    answer: Answer;
    jobId: string;
    applicantId: string;
};

const emojis = ['😡', '😔', '😐', '😊', '🥰'];

const ApplicantResponse = ({ answer, jobId, applicantId }: ApplicantResponseProps) => {
    const { refetch: refetchCurrApplication } = useCurrApplication();
    const [leftTime, setLeftTime] = useState<number>(0);
    const { currEvaluation, refetch } = useCurrEvaluation(answer.id);
    const { refetch: refetchEvaluations } = useListEvaluations({
        answer: answer?.id,
    });

    const deleteEvaluation = (id: string) => {
        catchAsync(
            async () => {
                await deleteEvaluationService(id);
                await Promise.all([refetch(), refetchEvaluations(), refetchCurrApplication()]);
                toast.success('Deleted evaluation successfully!');
            },
            () => {},
        );
    };

    const evaluate = (score: number) =>
        catchAsync(
            async () => {
                const body: CreateEvaluation = {
                    answer: answer.id,
                    score: score as 1 | 2 | 3 | 4 | 5,
                    job: jobId,
                    timestamp: Math.floor(leftTime),
                    user: applicantId,
                };
                await createEvaluationService(body);
                await Promise.all([refetch(), refetchEvaluations(), refetchCurrApplication()]);
                toast.success('Evaluated successfully!');
            },
            () => {},
        );

    const handleClick = (score: number) => () => {
        if (currEvaluation && score === currEvaluation.score) {
            deleteEvaluation(currEvaluation.id);
        } else {
            evaluate(score);
        }
    };

    return (
        <div className="group relative mt-2 gap-4">
            <Card className="flex-1 border-dashed border-gray-500 bg-white shadow-none">
                <CardHeader className="pb-3">
                    <div className="-mt-1 flex items-center gap-2">
                        <Badge className="bg-gray-100 font-normal text-text/60 shadow-none">
                            {answer.question.category}
                        </Badge>{' '}
                    </div>
                    <CardTitle className="mt-1 font-serif text-xl font-semibold">{answer.question.content}</CardTitle>
                    <CardDescription>{answer.question.description as string}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                    <AudioRecorder
                        outerSetLeftTime={setLeftTime}
                        audio={{
                            duration: answer.duration || 0,
                            id: answer.id,
                            owner: answer.owner.id,
                            question: answer.question.id,
                            url: answer.url,
                            ref: answer.ref,
                        }}
                        question={answer.question}
                    />
                    <div className="-mx-6 my-4 border-t border-dashed border-t-gray-500" />

                    {answer.summary && (
                        <div>
                            <p className="font-medium text-black">Summary</p>
                            <p className="text-text">{answer.summary}</p>

                            <p className="mt-4 font-medium text-black">Suggested evaluation</p>
                            <div className="mt-1 pb-2 text-text">
                                <div className="flex items-center gap-3">
                                    <TbCircleFilled className="h-2 w-2 text-green-500" />
                                    <p>She's very confident</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <TbCircleFilled className="h-2 w-2 text-green-500" />
                                    <p>Her response is brief, go into the right problem</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <TbCircleFilled className="h-2 w-2 text-primary" />
                                    <p>Her voice is quite small</p>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
            <div className="mx-auto mt-2 flex gap-2">
                {emojis.map((emoji, index) => (
                    <Button
                        onClick={handleClick(index + 1)}
                        className="font-mono"
                        size="icon"
                        key={index}
                        variant="outline"
                    >
                        <div
                            className={classNames(
                                'pointer-events-none absolute z-[10] text-lg opacity-0 transition group-hover:pointer-events-auto group-hover:static group-hover:opacity-100',
                                {
                                    'opacity-100': currEvaluation?.score === index + 1,
                                    'opacity-0': currEvaluation?.score !== index + 1,
                                },
                            )}
                        >
                            {emoji}
                        </div>
                        <div
                            className={classNames(
                                'pointer-events-auto opacity-100 transition group-hover:pointer-events-none group-hover:absolute group-hover:opacity-0',
                                {
                                    'opacity-0': currEvaluation?.score === index + 1,
                                    'opacity-100': currEvaluation?.score !== index + 1,
                                },
                            )}
                        >
                            {index + 1}
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default ApplicantResponse;
