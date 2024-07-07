import { TakeAssessment } from '@/types/takingAssessment.type';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import moment from 'moment';
import { Avatar } from '@nextui-org/react';
import { Badge } from '@/components/ui/badge';
import { sentenceCase } from '@/utils/string';
import { Assessment } from '@/types/assessment.type';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type AssessmentResultProps = {
    data: TakeAssessment;
    assessment: Assessment;
};

const AssessmentResult = ({ data, assessment }: AssessmentResultProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Score: {data.point}</CardTitle>
                <CardDescription className="text-gray-500">
                    Started at {moment(data.createdAt).format('DD/MM/YY - hh:mm')} -- Ended at{' '}
                    {moment(data.endingAt).format('DD/MM/YY - hh:mm')}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2">
                    <Avatar src={data.user.avatar} />
                    <div>
                        <p>{data.user.name}</p>
                        <p>{data.user.email}</p>
                    </div>
                </div>
                <div className="my-4 w-full border-t" />
                <p className="mt-4 text-sm">
                    Answer {data.answers.length}/{assessment.questions.size} questions
                </p>
            </CardContent>
            <CardFooter className="gap-4">
                <Badge variant={data.status === 'closed' ? 'outline' : 'default'}>{sentenceCase(data.status)}</Badge>
                <Button variant="outline" className="ml-auto" asChild>
                    <Link to={data.id}>View detail</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default AssessmentResult;
