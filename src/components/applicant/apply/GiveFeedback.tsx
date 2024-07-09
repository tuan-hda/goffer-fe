import { FeedbackQuestion } from '@/components/jobDetail';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { createFeedbackService } from '@/services/feedback.service';
import { NPS, NewFeedback, Sentiment } from '@/types/feedback.type';
import catchAsync from '@/utils/catchAsync';
import { getNPS, getSentiment, sentiment } from '@/utils/feedback';
import { useState } from 'react';
import { TbLoaderQuarter } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

interface Props {
    onSuccess?: () => void;
}

const GiveFeedback = ({ onSuccess }: Props) => {
    const { id } = useParams();
    const [feedback, setFeedback] = useState<NewFeedback>({ job: id! });
    const [loading, setLoading] = useState(false);

    const onSelectSentiment = (value: string) => {
        setFeedback((prev) => ({
            ...prev,
            sentiment: getSentiment(value) ?? prev.sentiment,
        }));
    };
    const onSelectNPS = (value: string) => {
        setFeedback((prev) => ({
            ...prev,
            NPS: getNPS(value) ?? prev.NPS,
        }));
    };
    const onSubmit = () => {
        catchAsync(
            async () => {
                setLoading(true);
                await createFeedbackService(feedback);
                toast.success('Thank you for your feedback!');
            },
            () => {
                setLoading(false);
                onSuccess && onSuccess();
            },
        );
    };

    return (
        <div className="mx-auto flex max-w-xl flex-col space-y-6">
            <FeedbackQuestion
                question="Are you satisfied with the overall interview experience?"
                size="text-lg"
                answers={sentiment}
                onSelected={onSelectSentiment}
            />
            <FeedbackQuestion question="Would recommend the company to other job seekers?" onSelected={onSelectNPS} />
            <div>
                <h2 className="font-semibold text-text">
                    Any thoughts you would like to share? <span className="font-normal text-gray-500">(Optional)</span>
                </h2>
                <Textarea
                    onChange={(e) => setFeedback({ ...feedback, feedback: e.target.value })}
                    placeholder="Type your message here."
                    className="mt-4 min-h-28"
                />
            </div>
            <Button
                disabled={loading || !feedback.sentiment || !feedback.NPS}
                onClick={onSubmit}
                variant="black"
                className="w-36 self-end"
            >
                {loading ? <TbLoaderQuarter className="animate-spin text-base" /> : 'Send Feedback'}
            </Button>
        </div>
    );
};

export default GiveFeedback;
