export type NewOrganization = {
    name: string;
    logo: string;
    field: string;
    email: string;
    website: string;
    visibility: 'public' | 'private' | '';
    description: string;
};
