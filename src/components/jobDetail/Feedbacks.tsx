import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MdEmojiFoodBeverage } from 'react-icons/md';
import { Progress } from '../ui/progress';
import { Feedback } from './Feedback';
import { Button } from '../ui/button';
import { TbSparkles } from 'react-icons/tb';
import useAnalyzeJobFeedbacks from '@/hooks/useAnalyzeJobFeedbacks';
import { useParams } from 'react-router-dom';
import { FeedbackRate } from '@/types/feedback.type';
import classNames from 'classnames';
import { getSentiment, getSentimentIconFromRate, sentiment } from '@/utils/feedback';

const Feedbacks = () => {
    const { id } = useParams();
    const { data, refetch } = useAnalyzeJobFeedbacks(id);

    const [NPS, setNPS] = useState<{ label: string; color: string; data: FeedbackRate }[]>([]);
    useEffect(() => {
        if (data && data.NPS) {
            setNPS([
                { label: 'Promoters', color: 'green-500', data: data.NPS.promoters || { quantity: 0, rate: 0 } },
                { label: 'Passives', color: 'yellow-500', data: data.NPS.passives || { quantity: 0, rate: 0 } },
                { label: 'Detractors', color: 'red-500', data: data.NPS.detractors || { quantity: 0, rate: 0 } },
            ]);
        }
    }, [data]);
    const getSentimentValue = (emoji: string) => {
        const key = getSentiment(emoji);
        const sentiment = key ? data?.sentiment[key] : undefined;
        return sentiment ?? { rate: 0, quantity: 0 };
    };

    return (
        <div className="text-sm text-text">
            <p className="text-xl">Overview</p>
            {(!data || data.totalResults === 0) && 'You have no feedback.'}
            <div className="mt-6 grid grid-cols-3 gap-6">
                <Card className="shadow-none">
                    <CardHeader className="pb-[14px]">
                        <CardTitle className="flex items-center gap-2">NPS</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl">{data?.NPS.NPS}</p>
                        <p className="my-2 text-text/90">You're doing good, based on {data?.NPS.total} respondents</p>
                        <table className="-mx-2 border-separate border-spacing-x-2 border-spacing-y-1 text-base">
                            {NPS.map((symbol, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className={classNames('h-3 w-3 rounded-full', symbol.color)} />
                                            <p className="text-[13px]">{symbol.label}</p>
                                        </div>
                                    </td>
                                    <td className="w-full">
                                        <Progress className="h-[6px]" value={symbol.data.rate} />
                                    </td>
                                    <td className="text-right font-mono text-sm">{symbol.data.quantity}</td>
                                    <td className="text-right font-mono text-sm">{symbol.data.rate}%</td>
                                </tr>
                            ))}
                        </table>
                    </CardContent>
                </Card>
                <Card className="shadow-none">
                    <CardHeader className="pb-[14px]">
                        <CardTitle className="flex items-center gap-2">
                            Overall sentiment <MdEmojiFoodBeverage className="text-base" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl">
                            {getSentimentIconFromRate(data?.sentiment.average)}{' '}
                            <span className="text-3xl"> - {data?.sentiment.average}/5</span>
                        </p>
                        <p className="my-2 text-text/90">Based on {data?.sentiment.total} feedbacks</p>
                        <table className="-mx-2 border-separate border-spacing-x-2 border-spacing-y-1 text-base">
                            {sentiment.reverse().map((emoji) => (
                                <tr key={emoji}>
                                    <td>{emoji}</td>
                                    <td className="w-full">
                                        <Progress className="h-[6px]" value={getSentimentValue(emoji).rate} />
                                    </td>
                                    <td className="text-right font-mono text-sm">
                                        {getSentimentValue(emoji).quantity}
                                    </td>
                                    <td className="text-right font-mono text-sm">{getSentimentValue(emoji).rate}%</td>
                                </tr>
                            ))}
                        </table>
                    </CardContent>
                </Card>
                <Card className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">Feedback rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl">
                            {Math.round(((data?.totalResults ?? 0) / (data?.candidates ?? 1)) * 100)}%
                        </p>
                        <p className="my-2 text-text/90">
                            {data?.totalResults} out of {data?.candidates ?? 0} of applied candidates
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 ">
                <div className="col-span-2">
                    <p className="text-xl">Applicant's feedbacks ({data?.totalResults})</p>

                    <div className="mt-2 space-y-5">
                        {data?.results.map((item) => <Feedback key={item.id} data={item} refresh={refetch} />)}
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <p className="text-xl">Goffer Copilot</p>
                        <TbSparkles className="text-2xl" />
                    </div>
                    <div className="mt-2 rounded-xl bg-black p-6 text-white">
                        <p className="text-2xl font-light">Meet the Goffer Copilot.</p>
                        <p className="mt-1 text-2xl font-light">Help you all the way in work.</p>

                        <p className="mt-6">Start simple. Try summary all the feedbacks of this job.</p>
                        <Button className="mt-4 w-full bg-white text-black hover:bg-gray-200 hover:text-black">
                            Summary feedbacks
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedbacks;
