import { FeedbackQuestion, Question } from '@/components/jobDetail';
import { Button } from '@/components/ui/button';

const Finalize = () => {
    return (
        <div className="w-full text-sm">
            <div className="flex">
                <h1 className="text-3xl">Finalize</h1>
                <Button className="ml-auto">Finish job setup</Button>
            </div>
            <p className="mt-2 text-text/70">Review your opportunity and create. You always can edit later.</p>
            <div className="mt-3 grid w-full grid-cols-2 gap-x-10">
                <p className="font-semibold">Application questions</p>
                <p className="font-semibold">Custom feedback questions</p>
                <div className="mt-1 space-y-4">
                    <Question editable={false} />
                    <Question editable={false} />
                    <Question editable={false} />
                    <Question editable={false} />
                </div>

                <div className="mt-1 space-y-4">
                    <FeedbackQuestion question="Would you recommend us to other job seeker?" />
                    <FeedbackQuestion question="Would you recommend us to other job seeker?" />
                </div>
            </div>
        </div>
    );
};

export default Finalize;
