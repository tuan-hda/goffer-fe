import { User } from './user.type';

export type Recommendation = {
    id: string;
    user: User;
    content: string;
    isHide: boolean;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    owner: User;
};

export type NewRecommendation = {
    user: string; // user ID
    content: string;
    isHide?: boolean;
};

export type EditRecommendation = Partial<NewRecommendation>;
