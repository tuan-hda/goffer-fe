import { User } from './user.type';

export type Sentiment = 'negative' | 'neutral' | 'positive' | 'satisfied' | 'very satisfied';
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

type FeedbackRate = {
    quantity: number;
    rate: number;
};

export type FeedbackSummary = {
    total: number;
    average: string;
} & Partial<Record<Sentiment | NPS, FeedbackRate>>;

export type AnalyzeFeedback = {
    sentiment: FeedbackSummary;
    NPS: FeedbackSummary;
    candidates: number;
};
