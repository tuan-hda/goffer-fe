export type NewOrganization = {
    name: string;
    logo: string;
    field: string;
    email: string;
    website: string;
    visibility: 'public' | 'private' | '';
    description: string;
};

export type Organization = NewOrganization & {
    id: string;
    domain: string;
    owner: string;
};
