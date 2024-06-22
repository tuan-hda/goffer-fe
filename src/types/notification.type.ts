import { User } from './user.type';

export type Notification = {
    title: string;
    description: string;
    createdAt: string;
    read: boolean;
    user?: User;
    link?: string;
};
