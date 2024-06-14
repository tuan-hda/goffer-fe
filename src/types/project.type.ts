export type ProjectCreate = {
    cover: string;
    description: string;
    title: string;
    content: string;
    tools: string[];
    skills: string[];
};

export type Project = ProjectCreate & {
    _id: string;
    createdAt: string;
    updatedAt: string;
    owner: string;
};

export type ProjectUpdate = Partial<Project>;
