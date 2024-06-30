import { Organization } from './organization.type';
import { User } from './user.type';

export type NewMembership = {
    email: string;
    org: string;
    role?: string;
    status?: string;
    title?: string;
};

export type Membership = Omit<NewMembership, 'email' | 'role' | 'status' | 'org'> & {
    id: string;
    role: string;
    status: string;
    user: User;
    org: Organization;
    invitationToken: string;
    createdAt: string;
    updatedAt: string;
};

export type EditMembership = {
    role?: string;
    status?: string;
    title?: string;
};
