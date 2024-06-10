import { Organization } from './organization.type';
import { Question } from './question.type';
import { User } from './user.type';

export type NewJob = {
    title: string;
    slots: number;
    workingHours: number;
    salaryFrom: string;
    salaryTo?: string;
    experience: string;
    skills: string[];
    tools: string[];
    description: string;
    location: string;
    time: string;
    org: string;
    benefits?: string[];
    pipeline: string[];
};

export type Job = Omit<NewJob, 'org'> & {
    id: string;
    status: string;
    owner?: User;
    createdAt: string;
    updatedAt: string;
    publicLink: string;
    org: Organization;
    questions: Map<string, Question>;
    hasFeedback?: boolean;
    saved?: boolean;
};

export type JobResponse = Omit<Job, 'questions'> & {
    questions: Question[];
};

export type IndividualJob = Job & {
    org: Organization;
    owner?: User;
};

export type JobQuery = Omit<Job, ''>;
