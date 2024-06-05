import { TbMicrophone2, TbVideo } from 'react-icons/tb';

type QuestionBankItemBehavioralProps = {
    kind?: 'audio' | 'video';
};

const QuestionBankItemBehavioral = ({ kind = 'audio' }: QuestionBankItemBehavioralProps) => {
    return (
        <div>
            <div className="mb-1 flex items-center gap-2">
                {kind === 'audio' ? <TbMicrophone2 /> : <TbVideo />}
                <span className="text-gray-500">3 min</span>
            </div>
            <p className="font-medium">
                If you meet this condition in a secretary tab, then what will you do to resolve it?
            </p>
        </div>
    );
};

export default QuestionBankItemBehavioral;
