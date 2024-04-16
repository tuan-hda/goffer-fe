import { IndividualJob, Job, NewJob } from '@/types/job.type';
import { baseAxios } from './base';
import { List } from '@/types/list.type';

export const createJobService = async (data: NewJob) => {
    return (await baseAxios.post<Job>('/jobs', data)).data;
};

export const getIndividualJob = async () => {
    return (await baseAxios.get<List<IndividualJob>>('/jobs/individual?populate=org,author')).data;
};
