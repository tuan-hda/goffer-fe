import { baseAxios } from './base';
import { List } from '@/types/list.type';
import { Apply, ApplyCount, ApplyResponse, EditApply, NewApply } from '@/types/application.type';

export const submitApplicationService = async (data: NewApply) => (await baseAxios.post<Apply>('/apply', data)).data;

export const listApplicationService = async (query?: Record<string, unknown>) => {
    return (
        await baseAxios.get<List<Apply>>('/apply', {
            params: {
                populate: 'owner,job',
                ...query,
            },
        })
    ).data;
};

export const getApplicationById = async (id: string) => {
    return (await baseAxios.get<Apply>(`/apply/${id}`)).data;
};

export const getApplyJob = async (jobId: string) => {
    return (await baseAxios.get<ApplyResponse>(`/apply/job/${jobId}`)).data;
};

export const updateApplyService = async (data: EditApply) => (await baseAxios.patch<Apply>('/apply', data)).data;

export const countApplicationsByPhasesService = async (params?: Partial<Record<keyof Apply, unknown>>) => {
    return (
        await baseAxios.get<ApplyCount[]>('/apply/count', {
            params,
        })
    ).data;
};
