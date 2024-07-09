import { NPS, Sentiment } from '@/types/feedback.type';

export const sentiment = ['😡', '😔', '😐', '😊', '🥰'];

const sentimentMap: Record<string, Sentiment> = {
    '😡': 'negative',
    '😔': 'neutral',
    '😐': 'neutral',
    '😊': 'positive',
    '🥰': 'very satisfied',
};
const NPSMap: Record<string, NPS> = {
    '1': 'detractors',
    '2': 'detractors',
    '3': 'passives',
    '4': 'promoters',
    '5': 'promoters',
};

export const getSentiment = (value: string): Sentiment | undefined => {
    return sentimentMap[value] as Sentiment | undefined;
};

export const getNPS = (value: string): NPS | undefined => {
    return NPSMap[value] as NPS | undefined;
};
