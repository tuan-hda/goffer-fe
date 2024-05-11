import { TbCircleFilled, TbSparkles } from 'react-icons/tb';
import AudioRecorder from '../applicant/common/AudioRecorder';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { CSSProperties, useState } from 'react';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import { summarizeAnswerService } from '@/services/answer.service';

const ApplicantResponse = () => {
    const [loading, setLoading] = useState(false);
    const [summary, setSummary] = useState('');

    const handleAnalyze = async () => {
        try {
            setLoading(true);
            const response = await summarizeAnswerService(
                'https://res.cloudinary.com/doxsstgkc/video/upload/v1715399372/Y2meta.app_-_Tell_Me_About_Yourself_-_Sample_Answer_Food_Service___Hospitality_128_kbps_zrxqkk.mp3',
            );
            setSummary(response.data.result);
            setLoading(false);
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response?.data?.message || 'An error occurred');
                return;
            }
            toast.error('An error occurred');
        }
    };

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
                <CardContent className="pb-2">
                    <AudioRecorder
                        mock
                        data={{
                            id: '',
                            author: '',
                            constraint: 1,
                            content: '',
                            description: '',
                            job: '',
                            type: 'audio',
                        }}
                    />
                    <div className="-mx-6 my-4 border-t border-dashed border-t-gray-500" />
                    <Button
                        onClick={handleAnalyze}
                        variant="black"
                        size="sm"
                        className="mb-3 mt-4 flex h-6 items-center gap-3 rounded-lg"
                    >
                        <Badge className="gap-2 bg-transparent shadow-none">
                            <TbSparkles className="text-base" /> {summary ? 'AI-powered' : 'Analyze'}
                        </Badge>
                    </Button>

                    {loading && (
                        <div className="flex w-full items-center gap-1 py-4">
                            <div className="mb-2 h-[6px] w-[40px] animate-bounce rounded bg-gray-700 shadow-large" />
                            <div
                                className="animate-bounce-delay mb-2 h-[6px] w-[40px] rounded bg-gray-700 shadow-large"
                                style={
                                    {
                                        '--delay': '0.15s',
                                    } as CSSProperties
                                }
                            />

                            <div
                                className="animate-bounce-delay mb-2 h-[6px] w-[40px] rounded bg-gray-700 shadow-large"
                                style={
                                    {
                                        '--delay': '0.3s',
                                    } as CSSProperties
                                }
                            />
                        </div>
                    )}
                    {summary && (
                        <div>
                            <p className="font-medium text-black">Summary</p>
                            <p className="text-text">{summary}</p>

                            <p className="mt-4 font-medium text-black">Suggested evaluation</p>
                            <div className="mt-1 pb-2 text-text">
                                <div className="flex items-center gap-3">
                                    <TbCircleFilled className="h-2 w-2 text-green-500" />
                                    <p>She's very confident</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <TbCircleFilled className="h-2 w-2 text-green-500" />
                                    <p>Her response is brief, go into the right problem</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <TbCircleFilled className="h-2 w-2 text-primary" />
                                    <p>Her voice is quite small</p>
                                </div>
                            </div>
                        </div>
                    )}
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
