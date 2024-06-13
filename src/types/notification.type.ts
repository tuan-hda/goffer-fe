import { User } from './user.type';

export type Notification = {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    read: boolean;
    user?: User;
};
