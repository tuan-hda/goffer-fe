import { useRef, useState } from 'react';
import { Curve } from '../charts';
import { Card, CardContent } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const Analytics = () => {
    const [width, setWidth] = useState(0);
    return (
        <div>
            <div className="mb-3 flex items-center gap-4">
                <h2 className="text-xl">Conversion rate</h2>
                <Select>
                    <SelectTrigger className="ml-auto w-[180px]">
                        <SelectValue placeholder="Time range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="this-month">This month</SelectItem>
                        <SelectItem value="this-year">This year</SelectItem>
                        <SelectItem value="last-month">Last month</SelectItem>
                        <SelectItem value="last-year">Last year</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Interval" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="day">Day</SelectItem>
                        <SelectItem value="month">Month</SelectItem>
                        <SelectItem value="quarter">Quarter</SelectItem>
                        <SelectItem value="year">Year</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Card className="pt-6 shadow-none">
                <CardContent>
                    <div
                        className="w-full"
                        ref={(node) => {
                            setWidth(node?.getBoundingClientRect().width || 0);
                        }}
                    >
                        <Curve width={width} height={400} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Analytics;
