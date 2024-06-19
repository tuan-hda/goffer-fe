import useCurrPublicAssessment from '@/hooks/useCurrPublicAssessment';
import { Label } from '../../ui/label';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import { toast } from 'sonner';
import { submitAnswerService } from '@/services/takeAssessment.service';
import useCurrTakingAssessment from '@/hooks/useCurrTakingAssessment';

const QuestionList = () => {
    const { data } = useCurrPublicAssessment();
    const { data: session, refetch } = useCurrTakingAssessment();
    const questions = data?.questions;

    if (!questions) return null;

    const submitAnswer = (questionId: string) => async (value: string) => {
        try {
            await submitAnswerService(session?.id!, {
                content: value,
                question: questionId,
            });
            refetch();
        } catch (error) {
            toast.error('Failed to submit answer');
        }
    };

    return (
        <div className="mt-10 w-full space-y-20">
            {Array.from(questions.values()).map((question, i) => (
                <div key={i} className="flex gap-4" id={`q-${i}`}>
                    <div className="flex h-9 w-12 items-center justify-center rounded-xl font-mono font-bold shadow-medium">
                        {i + 1}
                    </div>
                    <div>
                        <p className="mt-[6px] text-base font-medium text-black">{question.content}</p>
                        <RadioGroup
                            onValueChange={submitAnswer(question.id)}
                            value={session?.answers.find((a) => a.question === question.id)?.content}
                            className="space-y-4 pt-5 text-text"
                        >
                            {question.choices?.map((choice, index) => {
                                return (
                                    <div key={index}>
                                        <div key={index} className="flex items-center space-x-2">
                                            <RadioGroupItem value={choice.content} id={`q-${i}-c-${index}`} />
                                            <Label className="opacity-80" htmlFor={`q-${i}-c-${index}`}>
                                                {choice.content}
                                            </Label>
                                        </div>
                                        {choice.image && (
                                            <img
                                                src={choice.image}
                                                className="mt-2 aspect-square h-full max-h-[140px] rounded-xl object-contain"
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </RadioGroup>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QuestionList;
