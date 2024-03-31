import { TbInfoCircle, TbMessageCircle2 } from 'react-icons/tb';
import AudioRecorder from '../common/AudioRecorder';

const ApplyQuestion = () => {
    return (
        <div className="flex flex-col gap-9 text-text">
            <div>
                <div className="flex items-center gap-x-3 text-default-500">
                    <p className="text-xl">Question 2 of 3</p>
                    <TbInfoCircle size={24} />
                </div>
                <p className="my-2 text-2xl font-medium tracking-wider">
                    Walk me through a project you're most proud of
                </p>
                <p className="text-lg font-light text-default-400">
                    What did you build, What was your role in it, who did you build it with...and what were the
                    outcomes?
                </p>
            </div>

            <div>
                <AudioRecorder />
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
