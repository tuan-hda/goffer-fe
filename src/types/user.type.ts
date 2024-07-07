import { PortfolioConfiguration } from './portfolio.type';
import { ProjectCreate } from './project.type';

export type Suggestion = {
    pros?: string[];
    cons?: string[];
};

export type Enhance = {
    score: number;
    result: {
        contact: Suggestion;
        experiences: Suggestion;
        educations: Suggestion;
        skills: Suggestion;
        summary: Suggestion;
        format: Suggestion;
    };
    details: {
        basic: {
            first_name: string;
            last_name: string;
            email: string;
            phone_number: string;
            location: string;
            portfolio_website_url: string;
            linkedin_url: string;
            github_url: string;
            university: string;
            graduation_year: string;
            majors: string;
        };
        summary: string;
        work_experiences: {
            title: string;
            company: string;
            location: string;
            duration: {
                years: number;
                months: number;
            };
            summary: string;
            achievements: string;
        }[];

        educations: {
            school: string;
            degree: string;
            field: string;
            start: {
                year: number;
            };
            end: {
                year: number;
            };
        }[];
        certifications: {
            title: string;
            provider: string;
        }[];
    };
};

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
    portfolio?: PortfolioConfiguration;
    yoe?: number;
    enhance?: Enhance;
    createdAt?: string;
    updatedAt?: string;
    reason?: string;
    blockedAt?: string;
};

export type SeparatedDomainUser = User & {
    portfolioDomain?: string;
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
