import { User } from './user.type';

export type ProjectCreate = {
    cover: string;
    description: string;
    title: string;
    content: string;
    tools: string[];
    skills: string[];
};

export type Project = ProjectCreate & {
    id: string;
    createdAt: string;
    updatedAt: string;
    owner: string;
};

export type ProjectDetail = Omit<Project, 'owner'> & {
    owner: User;
};

export type ProjectUpdate = Partial<Project>;
