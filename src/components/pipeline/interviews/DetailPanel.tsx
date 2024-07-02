import AudioRecorder from '@/components/applicant/common/AudioRecorder';
import useUserAnswer from '@/hooks/useUserAnswer';
import { Question } from '@/types/question.type';

interface Props {
    question: Question;
}
const DetailPanel = ({ question }: Props) => {
    const { data: answer } = useUserAnswer(question.id);

    return (
        <div className="ml-8 w-full overflow-hidden rounded-xl border-none p-10 shadow-medium">
            <p className="mb-5 font-serif-2 text-3xl font-medium text-black">{question.content}</p>
            {typeof question.description === 'string' && (
                <p className="mb-10 font-serif-2 text-sm font-light text-default-400">{question.description}</p>
            )}
            <div className="mx-20 flex-1">
                <AudioRecorder audio={answer} question={question} />
            </div>
        </div>
    );
};

export default DetailPanel;
