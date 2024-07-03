import { useEffect, useRef, useState } from 'react';
import { PieChart } from '../charts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TbCheck, TbEye, TbForms } from 'react-icons/tb';
import { Progress } from '../ui/progress';
import useCountApplicationsByPhases from '@/hooks/useCountApplicationsByPhases';
import { useParams } from 'react-router-dom';
import useQueryLogs from '@/hooks/useQueryLogs';
import AnalyticsConversionRate from './AnalyticsConversionRate';

const Analytics = () => {
    const ref2 = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (ref2.current) {
                setWidth(() => ref2.current!.offsetWidth - 32);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { id } = useParams();
    const { data } = useCountApplicationsByPhases({
        job: id,
    });
    const { data: logs } = useQueryLogs({
        type: 'view',
        ref: id,
    });
    const total = data?.reduce((acc, curr) => acc + curr.count, 0);
    const hired = data?.find((d) => d._id === 'hired')?.count || 0;
    const views = logs?.length || 0;

    return (
        <div>
            <h2 className="mb-4 text-xl text-black">Conversion rate</h2>

            <AnalyticsConversionRate />
            <div className="mt-6 grid grid-cols-3 gap-6">
                <Card className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">
                            Views <TbEye className="text-lg" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl">{views}</CardContent>
                </Card>
                <Card className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">
                            Applied <TbForms className="text-lg" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl">{total}</CardContent>
                </Card>
                <Card className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">
                            Hired <TbCheck className="text-lg" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl">{hired}</CardContent>
                </Card>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6">
                <Card ref={ref2} className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">Sources breakdown</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center text-3xl">
                        <PieChart width={Math.min(width, 300)} height={300} />
                    </CardContent>
                </Card>
                <Card ref={ref2} className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">Conversion rate by source</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center text-sm">
                        <div className="w-full">
                            <div className="flex justify-between">
                                <p>Direct</p>
                                <p>60%</p>
                            </div>
                            <Progress className="mt-1" value={60} />

                            <div className="mt-4  flex justify-between">
                                <p>LinkedIn</p>
                                <p>20%</p>
                            </div>
                            <Progress className="mt-1" value={20} />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6">
                <Card ref={ref2} className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">Average time to submit</CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl">
                        <p>48 seconds</p>
                        <p className="mt-2 text-sm text-text">
                            The average time for candidate to successfully submit is 48 seconds.
                        </p>
                    </CardContent>
                </Card>
                <Card ref={ref2} className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">Submit time by question</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center text-sm">
                        <div className="w-full">
                            <p>Lorem ipsum time by question time by question time by question</p>
                            <p className="font-semibold">58s</p>

                            <p className="mt-3">
                                Lorem ipsum time by question time by question by question by question time by question
                            </p>
                            <p className="font-semibold">58s</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Analytics;
