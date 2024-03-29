import { NewOrganization } from 'src/types/organization.type';
import { baseAxios } from './base';

export const createOrganizationService = async (data: NewOrganization) =>
    (await baseAxios.post<{ id: string }>('/organizations', data)).data;
