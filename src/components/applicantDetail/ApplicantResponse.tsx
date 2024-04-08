import { TbCircleFilled, TbSparkles } from 'react-icons/tb';
import AudioRecorder from '../applicant/common/AudioRecorder';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

const ApplicantResponse = () => {
    return (
        <div className="group relative mt-2 gap-4">
            <Card className="flex-1 border-dashed border-gray-500 bg-white shadow-none">
                <CardHeader className="pb-3">
                    <div className="-mt-1 flex items-center gap-2">
                        <Badge className="bg-gray-100 font-normal text-text/60 shadow-none">Behavioral</Badge>{' '}
                    </div>
                    <CardTitle className="mt-1 font-serif text-xl font-semibold">Tell us about yourself</CardTitle>
                    <CardDescription>
                        This is where you wanna want to dive into something that's special about yourself
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <AudioRecorder />
                    <div className="-mx-6 my-4 border-t border-dashed border-t-gray-500" />
                    <div className="mb-3 mt-4 flex items-center gap-3">
                        <Badge className="gap-2 shadow-none">
                            <TbSparkles className="text-base" /> AI-featured
                        </Badge>
                    </div>

                    <p className="font-medium text-black">Summary</p>
                    <p className="text-text">
                        This guy is talking about how he experienced things during his career. In a nutshell, his
                        background is Software Engineer, graduated at University of Information Technology.
                    </p>

                    <p className="mt-4 font-medium text-black">Suggested evaluation</p>
                    <div className="mt-1 text-text">
                        <div className="flex items-center gap-3">
                            <TbCircleFilled className="h-2 w-2 text-green-500" />
                            <p>He's very confident</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <TbCircleFilled className="h-2 w-2 text-green-500" />
                            <p>His response is brief, go into the right problem</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <TbCircleFilled className="h-2 w-2 text-primary" />
                            <p>His voice is quite small</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="mx-auto mt-2 flex gap-2">
                {['😡', '😔', '😐', '😊', '🥰'].map((emoji, index) => (
                    <Button className="font-mono" size="icon" key={index} variant="outline">
                        <div className="pointer-events-none absolute text-lg opacity-0 transition group-hover:pointer-events-auto group-hover:static group-hover:opacity-100">
                            {emoji}
                        </div>
                        <div className="pointer-events-auto opacity-100 transition group-hover:pointer-events-none group-hover:absolute group-hover:opacity-0">
                            {index + 1}
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default ApplicantResponse;
