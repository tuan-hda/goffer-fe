import { Job, NewJob } from '@/types/job.type';
import { baseAxios } from './base';
import { List } from '@/types/list.type';

export const createJobService = async (data: NewJob) => {
    return (await baseAxios.post<Job>('/jobs', data)).data;
};

export const getIndividualJob = async () => {
    return (
        await baseAxios.get<List<Job>>('/jobs/individual', {
            params: {
                populate: 'org,owner',
            },
        })
    ).data;
};
export const listJobsService = async () => {
    return (
        await baseAxios.get<List<Job>>('/jobs', {
            params: {
                populate: 'owner',
            },
        })
    ).data;
};

export const getJobService = async (id: string) => {
    return (await baseAxios.get<Job>(`/jobs/${id}`)).data;
};
