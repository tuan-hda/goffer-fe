import { TbInfoCircle, TbMessageCircle2 } from 'react-icons/tb';
import AudioRecorder from '../common/AudioRecorder';
import { Question } from '@/types/question.type';

interface Props {
    number: number;
    total: number;
    data: Question;
}

const ApplyQuestion = ({ number, total, data }: Props) => {
    return (
        <div className="flex flex-col gap-9 text-text">
            <div>
                <div className="flex items-center gap-x-3 text-default-500">
                    <p className="text-xl">
                        Question {number} of {total}
                    </p>
                    <TbInfoCircle size={24} />
                </div>
                <p className="my-2  text-2xl font-medium text-text">{data.content}</p>
                <p className="text-lg font-light text-default-400">{data.description}</p>
            </div>

            <div>
                <AudioRecorder data={data} />
                <p className="my-3 text-center text-sm">Recording must be at least 20 seconds long.</p>
            </div>

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
