import { Answer } from '@/types/answer.type';
import { Question } from '@/types/question.type';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlainPlate } from '@/components/common';
import MirrorEditor from '../MirrorEditor';
import { languageOptions } from '@/configs/languageOptions';
import { Badge } from '@/components/ui/badge';

type AssessmentDetailAnswerProps = {
    data?: Answer;
    question: Question;
    seq: number;
};

const AssessmentDetailAnswer = ({ data, question, seq }: AssessmentDetailAnswerProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {seq}. {question.content}
                </CardTitle>
            </CardHeader>

            <CardContent>
                {!data && <p>User not answer this question</p>}
                {data && (
                    <div className="">
                        {question.type === 'mcq' ? (
                            <p>{data.content}</p>
                        ) : (
                            <div className="bg-[#262626]">
                                <MirrorEditor
                                    height={400}
                                    outerValue={data.content}
                                    lang={languageOptions.find((lan) => lan.id === data.lang) || languageOptions[0]}
                                />
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default AssessmentDetailAnswer;
