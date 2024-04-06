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
    orgId: string;
};

export type Job = NewJob & {
    id: string;
    status: string;
};
