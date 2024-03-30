import { EditOrganization, NewOrganization, Organization } from 'src/types/organization.type';
import { baseAxios } from './base';
import { List } from 'src/types/list.type';

export const createOrganizationService = async (data: NewOrganization) =>
    (await baseAxios.post<{ id: string }>('/organizations', data)).data;

export const listOrganizationsService = async () => (await baseAxios.get<List<Organization>>('/organizations')).data;

export const getOrganizationService = async (id: string) =>
    (await baseAxios.get<Organization>(`/organizations/${id}`)).data;

export const updateOrganizationService = async (id: string, data: EditOrganization) =>
    (await baseAxios.patch<Organization>(`/organizations/${id}`, data)).data;
