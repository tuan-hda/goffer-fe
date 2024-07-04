import { AnalyticsGranularity, ConversionRate, SubmitTimeData } from '@/types/analytics.type';
import { baseAxios } from './base';
import moment from 'moment';

export const getConversionRateService = async (
    job: string,
    startDate: Date,
    endDate: Date,
    granularity: AnalyticsGranularity,
) => {
    return (
        await baseAxios.get<ConversionRate[]>(`/analytics/conversion-rate`, {
            params: {
                job,
                startDate: moment(startDate).format('YYYY-MM-DD'),
                endDate: moment(endDate).format('YYYY-MM-DD'),
                granularity,
            },
        })
    ).data;
};

export const getSubmitTimeDataService = async (job: string) => {
    return (await baseAxios.get<SubmitTimeData>(`/analytics/submit-time`, { params: { job } })).data;
};
