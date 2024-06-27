import { User } from "./user.type";

export type NewMembership = {
    email: string;
    org: string;
    role?: string;
    status?: string;
    title?: string;
};

export type Membership = Omit<NewMembership, 'email' | 'role' | 'status'> & {
    id: string;
    role: string;
    status: string;
    user: User;
    org: string;
    invitationToken: string;
    createdAt: string;
    updatedAt: string;
};
