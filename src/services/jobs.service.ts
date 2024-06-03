import { IndividualJob, Job, NewJob } from '@/types/job.type';
import { baseAxios } from './base';
import { List } from '@/types/list.type';
import { User } from '@/types/user.type';

export const createJobService = async (data: NewJob) => {
    return (await baseAxios.post<Job>('/jobs', data)).data;
};

export const getIndividualJob = async () => {
    return (
        await baseAxios.get<List<IndividualJob>>('/jobs/individual', {
            params: {
                populate: 'org,owner',
            },
        })
    ).data;
};
export const listJobsService = async (query?: Record<string, string>) => {
    return (
        await baseAxios.get<List<Job>>('/jobs', {
            params: {
                populate: 'owner',
                ...query,
            },
        })
    ).data;
};

export const getSourcingService = async (id: string, page?: number) => {
    return (
        await baseAxios.get<List<User>>(`/jobs/${id}/sourcing`, {
            params: {
                page,
            },
        })
    ).data;
};

export const getJobService = async (id: string) => {
    return (await baseAxios.get<Job>(`/jobs/${id}`)).data;
};
