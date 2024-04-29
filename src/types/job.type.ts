import { Organization } from './organization.type';
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
    orgId: string;
    authorId: string;
    benefits?: string[];
    pipeline: string[];
};

export type Job = NewJob & {
    id: string;
    status: string;
    owner: User;
    createdAt: string;
    updatedAt: string;
    publicLink: string;
};

export type IndividualJob = Job & {
    org: Organization;
    author: User;
};

export type JobQuery = Omit<Job, ''>;
