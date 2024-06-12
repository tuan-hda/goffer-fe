import { FeedbackQuestion } from '@/components/jobDetail';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import useSetupJobStore from '@/stores/setupJobStore';
import { shallow } from 'zustand/shallow';

type FeedbackQuestion = {
    content: string;
    editable?: boolean;
};

const CustomFeedback = () => {
    const [data, setData] = useSetupJobStore((state) => [state.data, state.setData], shallow);

    const switched = data.hasFeedback;
    const setSwitched = (hasFeedback: boolean) => {
        setData((prev) => ({ ...prev, hasFeedback }));
    };

    return (
        <div className="w-full text-sm">
            <h1 className="text-3xl">Custom Feedback</h1>
            <p className="mb-6 mt-2 text-text/70">
                Applicants have option to submit a feedback for the hiring process experience.{' '}
            </p>
            <Label className="flex items-center gap-2">
                <Switch checked={switched} onCheckedChange={setSwitched} /> Enable feedbacks
            </Label>
            <div className="mx-auto mt-6 max-w-xl space-y-6">
                {switched && (
                    <>
                        <FeedbackQuestion
                            question="Are you satisfied with the overall interview experience?"
                            size="text-lg"
                            answers={['😡', '😔', '😐', '😊', '🥰']}
                        />
                        <FeedbackQuestion question="Would recommend the company to other job seekers?" />
                    </>
                )}
            </div>
        </div>
    );
};

export default CustomFeedback;
