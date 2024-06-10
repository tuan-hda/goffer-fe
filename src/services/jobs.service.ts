import { IndividualJob, Job, JobResponse, NewJob } from '@/types/job.type';
import { baseAxios } from './base';
import { List } from '@/types/list.type';
import { User } from '@/types/user.type';
import { Question } from '@/types/question.type';

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
    const response = (await baseAxios.get<JobResponse>(`/jobs/${id}`)).data;
    const questionsMap = new Map(response.questions.map((question: Question) => [question.id, question]));
    const finalResponse: Job = {
        ...response,
        questions: questionsMap,
    };
    return finalResponse;
};

export const updateJobService = async (id: string, data: Partial<Job>) => {
    const finalData = {
        ...data,
        questions: Array.from(data.questions?.values() || []).map((question) => question.id),
    };
    delete finalData.org;
    delete finalData.owner;
    delete finalData.createdAt;
    delete finalData.updatedAt;
    delete finalData.id;
    delete finalData.publicLink;
    delete finalData.saved;

    return (await baseAxios.patch<Job>(`/jobs/${id}`, finalData)).data;
};

export const deleteJobService = async (id: string) => {
    return (await baseAxios.delete<Job>(`/jobs/${id}`)).data;
};
