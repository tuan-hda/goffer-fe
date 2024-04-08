import { FeedbackQuestion } from '@/components/jobDetail';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type FeedbackQuestion = {
    content: string;
    editable?: boolean;
};

const CustomFeedback = () => {
    const [questions, setQuestions] = useState<FeedbackQuestion[]>([]);

    return (
        <div className="w-full text-sm">
            <h1 className="text-3xl">Custom Feedback</h1>
            <p className="mt-2 text-text/70">
                Applicants have option to submit a feedback for the hiring process experience.{' '}
            </p>
            <div className="mx-auto mt-6 max-w-xl space-y-6">
                <FeedbackQuestion
                    question="Are you satisfied with the overall interview experience?"
                    size="text-lg"
                    answers={['😡', '😔', '😐', '😊', '🥰']}
                />
                <FeedbackQuestion question="Would recommend the company to other job seekers?" />
                {questions.map((question, index) => (
                    <FeedbackQuestion key={index} editable={question.editable} question={question.content} />
                ))}

                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <p className="font-semibold">Custom questions</p>
                        <p>Add question to gain feedbacks</p>
                    </div>
                    <Button
                        onClick={() =>
                            setQuestions((prev) => [
                                ...prev,
                                {
                                    content: 'Your new custom feedback question',
                                    editable: true,
                                },
                            ])
                        }
                        variant="black"
                    >
                        Add question
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CustomFeedback;
