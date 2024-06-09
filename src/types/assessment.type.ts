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

export type Assessment = NewAssessment & {
    id: string;
    createdAt: Date;
    owner: User;
};
