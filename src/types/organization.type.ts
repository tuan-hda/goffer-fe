import { User } from './user.type';

export type NewOrganization = {
    name: string;
    logo: string;
    field: string;
    location: string;
    email: string;
    website: string;
    visibility: 'public' | 'private' | '';
    description: string;
};

export type Organization = NewOrganization & {
    id: string;
    domain: string;
    owner: string;
    saved?: boolean;
    follow: number;
    members: User[];
};

export type EditOrganization = Partial<Organization>;
