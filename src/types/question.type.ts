import { Question } from '@/components/jobDetail';

export type QUESTION_TYPE = 'behavioral' | 'mcq' | 'coding';

export type NewQuestion = {
    content: string;
    description: string;
    constraint: number;
    type: QUESTION_TYPE;
    job: string;
};

export type Question = NewQuestion & {
    id: string;
    author: string;
};

export type Answer = {
    questionId: string;
    answer?: Blob;
};
