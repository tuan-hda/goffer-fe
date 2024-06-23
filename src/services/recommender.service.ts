import { User } from '@/types/user.type';
import { baseAxios } from './base';
import { Job } from '@/types/job.type';
import { Organization } from '@/types/organization.type';

export const getUsersRecommenderService = async (page = 1) => {
    return (
        await baseAxios.get<User[]>('/recombee/users', {
            params: {
                page,
            },
        })
    ).data;
};

export const getJobsRecommenderService = async (page = 1) => {
    return (
        await baseAxios.get<Job[]>('/recombee/jobs', {
            params: {
                page,
            },
        })
    ).data;
};

export const getCompaniesRecommenderService = async (page = 1) => {
    return (
        await baseAxios.get<Organization[]>('/recombee/organizations', {
            params: {
                page,
            },
        })
    ).data;
};

export const interactWithItemService = async (itemId: string, action: 'view' | 'bookmark') => {
    return await baseAxios.post(`/recombee/interact/${itemId}`, {
        interactionType: action,
    });
};
