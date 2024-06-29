import { Job } from './job.type';
import { Organization } from './organization.type';
import { QUESTION_TYPE, Question } from './question.type';
import { User } from './user.type';

export type NewAssessment = {
    title: string;
    description: string;
    questions: Map<string, Question>;
    duration: number;
    org?: string;
    job?: string;
    order: number;
    status?: 'draft' | 'published' | 'archived';
    image?: string;
    type: QUESTION_TYPE;
    due?: Date;
};

export type AssessmentRequest = {
    title?: string;
    description?: string;
    questions?: string[];
    duration?: number;
    org?: string;
    job?: string;
    order: number;
    status?: 'draft' | 'published' | 'archived';
    image?: string;
    type?: QUESTION_TYPE;
    due?: Date;
};

export type Assessment = Omit<NewAssessment, 'questions' | 'job' | 'org'> & {
    id: string;
    createdAt: Date;
    owner?: User;
    questions: Map<string, Question>;
    deleted: boolean;
    updatedAt: Date;
    job?: Job;
    org?: Organization;
};

export type AssessmentUpdate = Omit<Assessment, 'createdAt' | 'updatedAt' | 'owner' | 'questions' | 'job' | 'org'>;
