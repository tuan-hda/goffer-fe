import { FeedbackQuestion } from '@/components/jobDetail';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const GiveFeedback = () => {
    return (
        <div className="mx-auto flex max-w-xl flex-col space-y-6">
            <FeedbackQuestion
                question="Are you satisfied with the overall interview experience?"
                size="text-lg"
                answers={['😡', '😔', '😐', '😊', '🥰']}
                onSelected={() => {}}
            />
            <FeedbackQuestion question="Would recommend the company to other job seekers?" onSelected={() => {}} />
            <div>
                <h2 className="font-semibold text-text">
                    Any thoughts you would like to share? <span className="font-normal text-gray-500">(Optional)</span>
                </h2>
                <Textarea placeholder="Type your message here." className="mt-4 min-h-28" />
            </div>
            <Button variant="black" className="self-end">
                Send Feedback
            </Button>
        </div>
    );
};

export default GiveFeedback;
