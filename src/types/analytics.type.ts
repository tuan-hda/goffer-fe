export type AnalyticsGranularity = 'day' | 'month' | 'year';

export type ConversionRate = {
    time: string;
    views: number;
    applications: number;
    conversionRate: number;
};
