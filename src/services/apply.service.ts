import { baseAxios } from './base';
import { ApplicationProps } from '@/types/application.type';

export const applyJobService = async (data: ApplicationProps) => {
    return (await baseAxios.post<ApplicationProps>('/apply', data)).data;
};
