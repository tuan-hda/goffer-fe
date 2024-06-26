import { useEffect, useRef, useState } from 'react';
import { Curve, PieChart } from '../charts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { DatePickerWithRange } from '../common';
import { TbCheck, TbEye, TbForms } from 'react-icons/tb';
import { Progress } from '../ui/progress';

const Analytics = () => {
    const [width, setWidth] = useState({
        curve: 0,
        pie: 0,
    });
    const ref = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current && ref2.current) {
                setWidth(() => ({
                    pie: ref2.current!.offsetWidth - 32,
                    curve: ref.current!.offsetWidth - 32,
                }));
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <h2 className="mb-4 text-xl text-black">Conversion rate</h2>
            <div className="mb-4 flex items-center gap-4">
                <div>
                    <p className="mb-1 text-sm">Time range</p>
                    <DatePickerWithRange />
                </div>

                <div>
                    <p className="mb-1 text-sm">Granularity</p>
                    <Select>
                        <SelectTrigger className="w-[180px] bg-white">
                            <SelectValue placeholder="Select interval" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="day">Day</SelectItem>
                            <SelectItem value="month">Month</SelectItem>
                            <SelectItem value="quarter">Quarter</SelectItem>
                            <SelectItem value="year">Year</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Card ref={ref} className="px-2 py-6 shadow-none">
                <CardContent>
                    <div className="w-full">
                        <Curve width={width.curve} height={Math.min(window.innerWidth - 625, 500)}>
                            <div className="mb-1 font-medium">
                                <p className="text-base">Average rate</p>
                                <p className="text-3xl font-normal">87%</p>
                            </div>
                        </Curve>
                    </div>
                </CardContent>
            </Card>
            <div className="mt-6 grid grid-cols-3 gap-6">
                <Card className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">
                            Views <TbEye className="text-lg" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl">12</CardContent>
                </Card>
                <Card className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">
                            Applied <TbForms className="text-lg" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl">12</CardContent>
                </Card>
                <Card className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">
                            Hired <TbCheck className="text-lg" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl">12</CardContent>
                </Card>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6">
                <Card ref={ref2} className="shadow-none">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2">Sources breakdown</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center text-3xl">
                        <PieChart width={Math.min(width.pie, 300)} height={300} />
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
