import { ProjectCreate } from './project.type';

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
    oneLiner?: string;
    resume?: string;
    education?: Education[];
    experiences?: Experience[];
    saved?: boolean;
    follow: number;
    org?: string;
    status?: string;
    badges?: string[];
    isPro?: boolean;
};

export type UserUpdateRequest = Omit<User, 'projects'> & {
    projects?: ProjectCreate[];
};

export type Education = {
    _id?: string;
    school: string;
    degree?: string;
    startDate?: Date;
    endDate?: Date;
    major?: string;
    description?: string;
};

export type Experience = {
    _id?: string;
    title: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    description?: string;
    logo?: string;
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
