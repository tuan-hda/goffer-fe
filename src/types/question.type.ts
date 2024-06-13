import { Question } from '@/components/jobDetail';
import { User } from './user.type';
import { Value } from '@udecode/plate-common';

export type QUESTION_TYPE = 'behavioral' | 'mcq' | 'coding';

export type Choice = {
    content: string;
    image?: string;
    isCorrect?: boolean;
};

export type NewQuestion = {
    content: string;
    description: string | Value;
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
    gradingInput?: string;
    gradingOutput?: string;
    exampleInput?: string;
    exampleOutput?: string;
    numberOfTestCaseLines?: number;
    numberOfOutputLines?: number;
};

export type Question = NewQuestion & {
    id: string;
    author: User;
    createdAt: string;
    updatedAt: string;
};

export type Answer = {
    questionId: string;
    answer?: Blob;
};
