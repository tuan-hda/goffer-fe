import { User } from './user.type';

export type Sentiment = 'negative' | 'disappointed' | 'neutral' | 'satisfied' | 'very satisfied';
export type NPS = 'promoters' | 'passives' | 'detractors';

export type NewFeedback = {
    job: string;
    feedback?: string;
    sentiment?: Sentiment;
    NPS?: NPS;
    resolved?: boolean;
};

export type Feedback = Omit<NewFeedback, 'resolved' | 'sentiment' | 'NPS'> & {
    id: string;
    sentiment: Sentiment;
    NPS: NPS;
    resolved: boolean;
    createdAt: string;
    updatedAt: string;
    owner: User;
};

export type UpdateFeedback = Partial<Omit<NewFeedback, 'job'>>;

export type FeedbackRate = {
    quantity: number;
    rate: number;
};

export type AnalyzeFeedback = {
    sentiment: {
        total: number;
        average: number;
    } & Partial<Record<Sentiment, FeedbackRate>>;
    NPS: {
        total: number;
        NPS: number;
    } & Partial<Record<NPS, FeedbackRate>>;
    candidates: number;
};
