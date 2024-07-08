import { User } from './user.type';

export type Report = {
    title: string;
    image: string;
    description: string;
    status: 'pending' | 'in_progress' | 'resolved';
    relatedPath: string;
    environment: {
        os: string;
        browserName: string;
        browserVersion: string;
        canvasSize: string;
    };
    owner: User;
    resolvedBy?: User;
    createdAt: string;
    updatedAt: string;
    resolvedAt?: string;
    id: string;
};

export type ReportCreate = Omit<
    Report,
    'status' | 'owner' | 'resolvedBy' | 'createdAt' | 'updatedAt' | 'resolvedAt' | 'id'
>;
