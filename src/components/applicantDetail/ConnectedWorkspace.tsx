import { Avatar } from '@nextui-org/react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
// import Comment from './Comment';
import { useState } from 'react';
import useCurrApplication from '@/hooks/useCurrApplication';
import AnswerEvaluation from './AnswerEvaluation';
// import ReplyPanel from './ReplyPanel';
// import Activities from './Activities';

const ConnectedWorkspace = () => {
    const [isReplying, setReplying] = useState(false);
    const { data } = useCurrApplication();

    return (
        <div className="sticky top-10 min-w-0 max-w-[480px] self-start">
            <Card className="rounded-2xl bg-white/100 shadow-none">
                <CardHeader>
                    <CardTitle className="text-base">Connected Workspace</CardTitle>
                    <CardDescription>This is where you can collaborate with other interviewers.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    {!data || data.rating === 0 ? (
                        <>
                            <p>No evaluation has been made yet.</p>
                            <div className="bg-image-doodles h-20 rounded-2xl opacity-40 shadow-small"></div>
                        </>
                    ) : (
                        <>
                            <Badge variant="secondary" className="mt-1 w-fit justify-center rounded-lg p-2 shadow-none">
                                Overall {data?.rating}
                            </Badge>
                            {data.answers?.map((answer, index) => <AnswerEvaluation key={index} answer={answer} />)}
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default ConnectedWorkspace;
