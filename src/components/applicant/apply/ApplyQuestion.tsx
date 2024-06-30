import { TbInfoCircle, TbMessageCircle2 } from 'react-icons/tb';
import AudioRecorder from '../common/AudioRecorder';
import { Question } from '@/types/question.type';
import useUserAnswer from '@/hooks/useUserAnswer';

interface Props {
    order: number;
    total: number;
    question?: Question;
}

const ApplyQuestion = ({ order, total, question }: Props) => {
    if (!question) return;
    const { data: answer } = useUserAnswer(question.id);

    return (
        <div className="flex flex-col gap-9 text-text">
            <div>
                <div className="flex items-center gap-x-3 text-default-500">
                    <p className="text-sm">
                        Question {order} of {total}
                    </p>
                </div>
                <p className="font my-2 text-base text-text">{question.content}</p>
                {typeof question.description === 'string' && (
                    <p className="text-sm font-light text-default-400">{question.description}</p>
                )}
            </div>

            <AudioRecorder audio={answer} question={question} />

            <div className="flex items-center gap-2">
                <TbMessageCircle2 className="mb-0.5" />
                <span className="text-sm">
                    Be yourself, find a quiet spot, and most importantly... tell them why they should hire you!
                </span>
            </div>
        </div>
    );
};

export default ApplyQuestion;
