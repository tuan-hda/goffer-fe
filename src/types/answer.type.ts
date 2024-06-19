export type NewAnswer = {
    url: string;
    question: string;
    duration: number;
    apply?: string;
};

export type AnswerResponse = Omit<NewAnswer, 'apply'> & {
    id: string;
    owner: string;
};

export type EditAnswer = Partial<AnswerResponse>;

import { User } from './user.type';
import { Question } from './question.type';

export type Answer = {
    id: string;
    url?: string;
    summary?: string;
    assessment?: string;
    question: Question;
    owner: User;
    duration?: number; // duration in seconds
    point?: number;
    content?: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
};
