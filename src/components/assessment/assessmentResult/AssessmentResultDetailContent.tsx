import { Badge } from '@/components/ui/badge';
import useCurrTakingWithId from '@/hooks/useCurrTakingWithId';
import { Avatar } from '@nextui-org/react';
import AssessmentDetailAnswer from './AssessmentDetailAnswer';
import { Question } from '@/types/question.type';
import useGetCurrAssessment from '@/hooks/useGetCurrAssessment';

const AssessmentResultDetailContent = () => {
    const { data } = useCurrTakingWithId();
    const { data: assessment } = useGetCurrAssessment();

    if (!data || !assessment) return <p>No data</p>;

    return (
        <div>
            <h1 className="text-2xl">{data?.user.name}'s result</h1>
            <div className="mt-4 flex gap-4">
                <Avatar src={data?.user.avatar} size="lg" />
                <div>
                    <p>{data?.user.email}</p>
                    <p>{data?.user.location}</p>
                    <p>{data?.user.oneLiner}</p>
                </div>
            </div>
            <div>
                <div className="mt-8 max-w-[720px] space-y-6">
                    {Array.from(assessment?.questions.values()).map((question, index) => (
                        <AssessmentDetailAnswer
                            data={data?.answers.find((a) => (a.question as unknown as string) === question.id)}
                            question={question}
                            key={index}
                            seq={index + 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AssessmentResultDetailContent;
