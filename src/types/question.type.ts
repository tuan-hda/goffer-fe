import { Question } from '@/components/jobDetail';

export type QUESTION_TYPE = 'behavioral' | 'mcq' | 'coding';

export type Choice = {
    content: string;
    image?: string;
    isCorrect?: boolean;
};

export type NewQuestion = {
    content: string;
    description: string;
    constraint?: number;
    type: string;
    sample?: string;
    answer?: string;
    choices?: Choice[];
    difficulty?: 1 | 2 | 3;
    kind?: 'audio' | 'video';
    image?: string;
    org: string;
    category: string;
};

export type Question = NewQuestion & {
    id: string;
    author: string;
};

export type Answer = {
    questionId: string;
    answer?: Blob;
};
