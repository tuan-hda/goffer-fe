import { Question } from '@/types/question.type';
import { TbMicrophone2, TbVideo } from 'react-icons/tb';

type QuestionBankItemBehavioralProps = {
    kind?: 'audio' | 'video';
    data: Question;
};

const QuestionBankItemBehavioral = ({ kind = 'audio', data }: QuestionBankItemBehavioralProps) => {
    return (
        <div>
            <div className="mb-1 flex items-center gap-2">
                {kind === 'audio' ? <TbMicrophone2 /> : <TbVideo />}
                <span className="text-gray-500">{Math.round((data.constraint || 0) / 60)} min</span>
            </div>
            <p className="lines-ellipsis font-medium">{data.content}</p>
        </div>
    );
};

export default QuestionBankItemBehavioral;
