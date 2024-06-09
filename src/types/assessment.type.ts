import { QUESTION_TYPE, Question } from './question.type';
import { User } from './user.type';

export type NewAssessment = {
    title: string;
    description: string;
    questions: Map<string, Question>;
    duration: number;
    org: string;
    job?: string;
    order: number;
    status?: 'draft' | 'published' | 'archived';
    image?: string;
    type: QUESTION_TYPE;
    due?: Date;
};

export type NewAssessmentRequest = Omit<NewAssessment, 'questions'> & {
    questions: string[];
};

export type Assessment = Omit<NewAssessment, 'questions'> & {
    id: string;
    createdAt: Date;
    owner: User;
    questions: Map<string, Question>;
    deleted: boolean;
    updatedAt: Date;
};
