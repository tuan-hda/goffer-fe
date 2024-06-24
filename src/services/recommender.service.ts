import { User } from '@/types/user.type';
import { baseAxios } from './base';
import { Job } from '@/types/job.type';
import { Organization } from '@/types/organization.type';
import { List } from '@/types/list.type';

export const getUsersRecommenderService = async (page = 1, params?: Record<string, string>) => {
    return (
        await baseAxios.get<List<User>>('/recombee/users', {
            params: {
                page,
                populate: 'org',
                ...params,
            },
        })
    ).data;
};

export const getJobsRecommenderService = async (page = 1, params: Record<string, string>) => {
    return (
        await baseAxios.get<List<Job>>('/recombee/jobs', {
            params: {
                page,
                populate: 'org,owner',
                ...params,
            },
        })
    ).data;
};

export const getCompaniesRecommenderService = async (page = 1, params?: Record<string, string>) => {
    return (
        await baseAxios.get<List<Organization>>('/recombee/organizations', {
            params: {
                page,
                populate: 'owner',
                ...params,
            },
        })
    ).data;
};

export const getCandidatesRecommenderService = async (id: string, page = 1, params?: Record<string, string>) => {
    return (
        await baseAxios.get<List<User>>(`/recombee/candidates/${id}`, {
            params: {
                page,
                populate: 'org',
                ...params,
            },
        })
    ).data;
};

export const interactWithItemService = async (itemId: string, action: 'view' | 'bookmark') => {
    return await baseAxios.post(`/recombee/interact/${itemId}`, {
        interactionType: action,
    });
};
