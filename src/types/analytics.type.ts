import { Question } from './question.type';

export type AnalyticsGranularity = 'day' | 'month' | 'year';

export type ConversionRate = {
    time: string;
    views: number;
    applications: number;
    conversionRate: number;
};

export type SubmitTimeData = {
    average: number;
    questions: {
        _id: string;
        average: number;
        question: Question;
    }[];
};
