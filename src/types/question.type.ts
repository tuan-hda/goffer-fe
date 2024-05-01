import { Question } from '@/components/jobDetail';
export type NewQuestion = {
    content: string;
    description: string;
    constraint: number;
    type: 'audio' | 'video';
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
