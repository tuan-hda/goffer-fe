import { Job } from '@/types/job.type';
import { baseAxios } from './base';
import { User } from '@/types/user.type';

export const toggleSavedJob = async (id: string) => {
    return (await baseAxios.post<Job>(`/jobs/${id}/toggle`)).data;
};

export const toggleSavedUser = async (id: string) => {
    return (await baseAxios.post<User>(`/users/${id}/toggle`)).data;
};

export const toggleSavedOrg = async (id: string) => {
    return (await baseAxios.post<User>(`/organizations/${id}/toggle`)).data;
};
