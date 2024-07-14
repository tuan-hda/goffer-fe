import { NPS, Sentiment } from '@/types/feedback.type';

export const sentiment = ['😡', '😔', '😐', '😊', '🥰'];

export const sentimentMap: Record<string, Sentiment> = {
    '😡': 'negative',
    '😔': 'disappointed',
    '😐': 'neutral',
    '😊': 'satisfied',
    '🥰': 'very satisfied',
};
export const NPSMap: Record<string, NPS> = {
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

export const getSentimentIconFromRate = (average?: number) => {
    if (!average || isNaN(average) || average < 0 || average > 5) {
        return null;
    }
    const sentimentIndex = Math.floor(average) - 1;
    return sentiment[sentimentIndex];
};

export const getSentimentIconFromKey = (sentimentKey?: Sentiment) => {
    if (!sentimentKey) {
        return null;
    }
    for (const [icon, value] of Object.entries(sentimentMap)) {
        if (value === sentimentKey) {
            return icon;
        }
    }
    return null;
};
