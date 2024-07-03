import { DatePickerWithRange } from '../common';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent } from '../ui/card';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Curve } from '../charts';
import { DateRange } from 'react-day-picker';
import { Button } from '../ui/button';
import useGetConversionRateData from '@/hooks/useGetConversionRateData';
import { useParams, useSearchParams } from 'react-router-dom';
import { AnalyticsGranularity } from '@/types/analytics.type';
import moment from 'moment';
import { TbLoader } from 'react-icons/tb';

const AnalyticsConversionRate = () => {
    const [granularity, setGranularity] = useState<AnalyticsGranularity>('day');
    const state = useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(),
    });
    const { data, isLoading } = useGetConversionRateData();
    const [searchParams, setSearchParams] = useSearchParams();

    const applyFilter = useCallback(() => {
        const query: Record<string, unknown> = {};
        query.startDate = moment(state[0]?.from).format('YYYY-MM-DD');
        query.endDate = moment(state[0]?.to).format('YYYY-MM-DD');
        query.granularity = granularity;
        setSearchParams({
            ...query,
            tab: 'analytics',
        });
    }, [state, granularity]);

    useEffect(() => {
        const localSearchParams = new URLSearchParams(window.location.search);
        if (
            !localSearchParams.get('startDate') ||
            !localSearchParams.get('endDate') ||
            !localSearchParams.get('granularity')
        ) {
            applyFilter();
        }
    }, [applyFilter]);

    useEffect(() => {
        const localSearchParams = new URLSearchParams(window.location.search);
        const startDate = localSearchParams.get('startDate');
        const endDate = localSearchParams.get('endDate');
        state[1]({
            from: startDate ? new Date(startDate) : new Date(),
            to: endDate ? new Date(endDate) : new Date(),
        });
        setGranularity((localSearchParams.get('granularity') || 'day') as AnalyticsGranularity);
    }, []);

    const dayDiff = useMemo(() => {
        if (state[0]) {
            return moment(state[0].to).diff(moment(state[0].from), 'days');
        }
        return 0;
    }, [state[0]]);

    const monthDiff = useMemo(() => {
        if (state[0]) {
            return moment(state[0].to).diff(moment(state[0].from), 'months');
        }
        return 0;
    }, [state[0]]);

    useEffect(() => {
        if (dayDiff > 31 && granularity === 'day') {
            setGranularity('month');
        }
        if (monthDiff > 18 && granularity === 'month') {
            setGranularity('year');
        }
    }, [dayDiff, monthDiff, granularity]);

    const isFilterSame = () => {
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');
        const granularityParam = searchParams.get('granularity');
        return (
            startDate === moment(state[0]?.from).format('YYYY-MM-DD') &&
            endDate === moment(state[0]?.to).format('YYYY-MM-DD') &&
            granularity === granularityParam
        );
    };

    const totalViews = useMemo(() => {
        return data?.reduce((acc, curr) => acc + curr.views, 0) || 0;
    }, [data]);

    const totalApplications = useMemo(() => {
        return data?.reduce((acc, curr) => acc + curr.applications, 0) || 0;
    }, [data]);

    const averageConversionRate = Math.round((totalApplications / (totalViews || 1)) * 100);

    return (
        <>
            <div className="mb-4 flex items-center gap-4">
                <div>
                    <p className="mb-1 text-sm">Time range</p>
                    <DatePickerWithRange outerState={state} />
                </div>

                <div>
                    <p className="mb-1 text-sm">Granularity</p>
                    <Select
                        value={granularity}
                        onValueChange={(value) => setGranularity(value as AnalyticsGranularity)}
                    >
                        <SelectTrigger className="w-[180px] bg-white">
                            <SelectValue placeholder="Select interval" />
                        </SelectTrigger>
                        <SelectContent>
                            {dayDiff <= 30 && <SelectItem value="day">Day</SelectItem>}
                            {monthDiff <= 18 && <SelectItem value="month">Month</SelectItem>}
                            <SelectItem value="year">Year</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Button
                        onClick={applyFilter}
                        disabled={isFilterSame() || isLoading}
                        variant="black"
                        className="mt-[21px]"
                    >
                        {isLoading && <TbLoader className="mr-2 animate-spin text-xl" />}
                        Apply filter
                    </Button>
                </div>
            </div>

            <Card className="shadow-none">
                <CardContent>
                    <div className="w-full">
                        <div className="flex gap-10 px-2 py-6">
                            <div className="mb-1 font-medium">
                                <p className="text-base">Average conversion rate</p>
                                <p className="text-3xl font-normal">{averageConversionRate}%</p>
                            </div>
                            <div className="mb-1 font-medium">
                                <p className="text-base">Total views</p>
                                <p className="text-3xl font-normal">{totalViews}</p>
                            </div>
                            <div className="mb-1 font-medium">
                                <p className="text-base">Total applications</p>
                                <p className="text-3xl font-normal">{totalApplications}</p>
                            </div>
                        </div>
                        <Curve
                            granularity={granularity}
                            series={data?.map((d) => d.conversionRate) || []}
                            xAxis={data?.map((d) => new Date(d.time)) || []}
                        ></Curve>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default AnalyticsConversionRate;
