export type User = {
    id: string;
    email: string;
    name?: string;
    avatar?: string;
    role: string;
    isEmailVerified: boolean;
    isBanned: boolean;
    initialType: 'individual' | 'organization';
    skills?: string[];
    refDoc?: string;
    gender?: string;
    dob?: Date;
    bio?: string;
    tools?: string[];
    location?: string;
    links?: { label: string; url: string }[];
};

export type UpdateUser = {
    password?: string;
    name?: string;
    avatar?: string;
    skills?: string[];
    refDoc?: string;
    gender?: string;
    dob?: Date;
};

export type SignUpRequest = {
    email: string;
    password: string;
};

export type GoogleProfile = {
    id: string;
    email: string;
    verified_email: boolean;
    name: string;
    picture?: string;
};

export type SignUpGoogle = {
    email: string;
    isEmailVerified: boolean;
    name: string;
    avatar: string;
    provider: string;
};
