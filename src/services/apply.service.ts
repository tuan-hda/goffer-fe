import { baseAxios } from './base';
import { List } from '@/types/list.type';
import { Apply, EditApply, NewApply } from '@/types/application.type';

export const submitApplicationService = async (data: NewApply) => (await baseAxios.post<Apply>('/apply', data)).data;

export const listApplicationService = async (query?: Record<string, string>) => {
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

export const updateApplyService = async (data: EditApply) => (await baseAxios.patch<Apply>('/apply', data)).data;
