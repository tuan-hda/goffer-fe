import { User } from './user.type';

export type Evaluation = {
    id: string;
    owner: string;
    answer: string;
    score: 1 | 2 | 3 | 4 | 5;
    job: string;
    user: string;
    timestamp: number;
    createdAt: string;
    updatedAt: string;
};

export type ListEvaluationItem = Omit<Evaluation, 'owner'> & {
    owner: User;
};

export type CreateEvaluation = Omit<Evaluation, 'id' | 'createdAt' | 'updatedAt' | 'owner'>;

export type UpdateEvaluation = Partial<Omit<Evaluation, 'id' | 'owner' | 'answer' | 'createdAt' | 'updatedAt'>>;
