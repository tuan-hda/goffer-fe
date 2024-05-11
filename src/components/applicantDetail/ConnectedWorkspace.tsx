import { Avatar } from '@nextui-org/react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Comment from './Comment';
import { useState } from 'react';
import ReplyPanel from './ReplyPanel';
import Activities from './Activities';

const ConnectedWorkspace = () => {
    const [isReplying, setReplying] = useState(false);

    return (
        <div className="min-w-0 max-w-[480px]">
            <Card className="bg-white/100 shadow-none">
                <CardHeader>
                    <CardTitle className="text-base">Workspace</CardTitle>
                    <CardDescription>This is where you can collaborate with other interviewers.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="evaluation">
                        <TabsList className="w-full">
                            <TabsTrigger value="evaluation" className="flex-1">
                                Evaluation (4)
                            </TabsTrigger>
                            <TabsTrigger value="comment" className="flex-1">
                                Comment (6)
                            </TabsTrigger>
                            <TabsTrigger value="activity" className="flex-1">
                                Activity (12)
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="evaluation" className="flex flex-col space-y-2">
                            <Badge className="mt-1 w-fit justify-center rounded-lg p-2 shadow-none">Overall 4.5</Badge>
                            <div className="mt-3 flex items-center gap-2">
                                <p className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-serif text-lg font-semibold text-black">
                                    Tell us about yourself
                                </p>
                                <Badge className="ml-auto bg-gray-100 font-normal text-text/70 shadow-none">4.3</Badge>
                            </div>
                            <div className="relative flex items-center gap-4 text-sm">
                                <Avatar
                                    radius="md"
                                    size="sm"
                                    src="https://res.cloudinary.com/doxsstgkc/image/upload/v1714493760/goffer/rklmzhk6m6abekce57ha.jpg"
                                />
                                <p className="absolute -top-2 left-5 text-lg">🥰</p>
                                <p className="text-text/80">evaluated at 1:30s</p>
                                <p className="ml-auto text-text/80">30 mins ago</p>
                            </div>
                            <div className="relative flex items-center gap-4 text-sm">
                                <Avatar
                                    radius="md"
                                    size="sm"
                                    src="https://res.cloudinary.com/doxsstgkc/image/upload/v1714493760/goffer/rklmzhk6m6abekce57ha.jpg"
                                />
                                <p className="absolute -top-2 left-5 text-lg">🥰</p>
                                <p className="text-text/80">evaluated at 1:30s</p>
                                <p className="ml-auto text-text/80">30 mins ago</p>
                            </div>
                            <div className="relative flex items-center gap-4 text-sm">
                                <Avatar
                                    radius="md"
                                    size="sm"
                                    src="https://res.cloudinary.com/doxsstgkc/image/upload/v1714493760/goffer/rklmzhk6m6abekce57ha.jpg"
                                />
                                <p className="absolute -top-2 left-5 text-lg">🥰</p>
                                <p className="text-text/80">evaluated at 1:30s</p>
                                <p className="ml-auto text-text/80">30 mins ago</p>
                            </div>
                            <div className="relative flex items-center gap-4 text-sm">
                                <Avatar
                                    radius="md"
                                    size="sm"
                                    src="https://res.cloudinary.com/doxsstgkc/image/upload/v1714493760/goffer/rklmzhk6m6abekce57ha.jpg"
                                />
                                <p className="absolute -top-2 left-5 text-lg">🥰</p>
                                <p className="text-text/80">evaluated at 1:30s</p>
                                <p className="ml-auto text-text/80">30 mins ago</p>
                            </div>
                        </TabsContent>
                        <TabsContent value="comment">
                            <Comment setReplying={setReplying} />
                            <div className="my-4 w-full border-t border-[#E8E8E8]" />
                            <Comment setReplying={setReplying} />
                            <div className="my-4 w-full border-t border-[#E8E8E8]" />
                            <Comment setReplying={setReplying} />
                            {isReplying && <ReplyPanel setReplying={setReplying} />}
                        </TabsContent>
                        <TabsContent value="activity">
                            <p className="text-text/80">This is applicant's activities</p>
                            <Activities />
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
};

export default ConnectedWorkspace;
