import { Job, NewJob } from '@/types/job.type';
import { baseAxios } from './base';

export const createJobService = async (data: NewJob) => {
    return (await baseAxios.post<Job>('/jobs', data)).data;
};
