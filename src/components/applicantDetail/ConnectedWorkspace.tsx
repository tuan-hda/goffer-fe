import { Avatar } from '@nextui-org/react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Comment from './Comment';

const ConnectedWorkspace = () => {
    return (
        <div className="max-w-[480px] flex-1">
            <Card className="bg-white/50 shadow-none">
                <CardHeader>
                    <CardTitle className="text-base">Connected Workspace</CardTitle>
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
                                    src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/318662248_3420347351543223_543157534243100406_n.jpg?stp=c0.7.100.100a_dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE1AE393m0M-Qc7uh6nlOGZfma7FFkD0KJ-ZrsUWQPQoslg37NspBbSSaAO0VIqZKZQZa9ButGOiezVOTwYqFUF&_nc_ohc=LfIhXX56-_IAb49E5bt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBrBklVmMhuqFonm1GyjFMNxuyPsje-amWp51lzEtUJFA&oe=6617CEF2"
                                />
                                <p className="absolute -top-2 left-5 text-lg">🥰</p>
                                <p className="text-text/80">evaluated at 1:30s</p>
                                <p className="ml-auto text-text/80">30 mins ago</p>
                            </div>
                            <div className="relative flex items-center gap-4 text-sm">
                                <Avatar
                                    radius="md"
                                    size="sm"
                                    src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/318662248_3420347351543223_543157534243100406_n.jpg?stp=c0.7.100.100a_dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE1AE393m0M-Qc7uh6nlOGZfma7FFkD0KJ-ZrsUWQPQoslg37NspBbSSaAO0VIqZKZQZa9ButGOiezVOTwYqFUF&_nc_ohc=LfIhXX56-_IAb49E5bt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBrBklVmMhuqFonm1GyjFMNxuyPsje-amWp51lzEtUJFA&oe=6617CEF2"
                                />
                                <p className="absolute -top-2 left-5 text-lg">🥰</p>
                                <p className="text-text/80">evaluated at 1:30s</p>
                                <p className="ml-auto text-text/80">30 mins ago</p>
                            </div>
                            <div className="relative flex items-center gap-4 text-sm">
                                <Avatar
                                    radius="md"
                                    size="sm"
                                    src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/318662248_3420347351543223_543157534243100406_n.jpg?stp=c0.7.100.100a_dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE1AE393m0M-Qc7uh6nlOGZfma7FFkD0KJ-ZrsUWQPQoslg37NspBbSSaAO0VIqZKZQZa9ButGOiezVOTwYqFUF&_nc_ohc=LfIhXX56-_IAb49E5bt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBrBklVmMhuqFonm1GyjFMNxuyPsje-amWp51lzEtUJFA&oe=6617CEF2"
                                />
                                <p className="absolute -top-2 left-5 text-lg">🥰</p>
                                <p className="text-text/80">evaluated at 1:30s</p>
                                <p className="ml-auto text-text/80">30 mins ago</p>
                            </div>
                            <div className="relative flex items-center gap-4 text-sm">
                                <Avatar
                                    radius="md"
                                    size="sm"
                                    src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/318662248_3420347351543223_543157534243100406_n.jpg?stp=c0.7.100.100a_dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE1AE393m0M-Qc7uh6nlOGZfma7FFkD0KJ-ZrsUWQPQoslg37NspBbSSaAO0VIqZKZQZa9ButGOiezVOTwYqFUF&_nc_ohc=LfIhXX56-_IAb49E5bt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBrBklVmMhuqFonm1GyjFMNxuyPsje-amWp51lzEtUJFA&oe=6617CEF2"
                                />
                                <p className="absolute -top-2 left-5 text-lg">🥰</p>
                                <p className="text-text/80">evaluated at 1:30s</p>
                                <p className="ml-auto text-text/80">30 mins ago</p>
                            </div>
                        </TabsContent>
                        <TabsContent value="comment">
                            <Comment />
                            <div className="my-4 w-full border-t border-[#E8E8E8]" />
                            <Comment />
                            <div className="my-4 w-full border-t border-[#E8E8E8]" />
                            <Comment />
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
};

export default ConnectedWorkspace;
