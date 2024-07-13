import { EditOrganization, NewOrganization, Organization } from '@/types/organization.type';
import { baseAxios } from './base';
import { List } from '@/types/list.type';

export const createOrganizationService = async (data: NewOrganization) =>
    (
        await baseAxios.post<Organization>('/organizations', {
            ...data,
            visibility: 'public',
        })
    ).data;

export const listOrganizationsService = async () => (await baseAxios.get<List<Organization>>('/organizations')).data;

export const getOrganizationService = async (id: string) =>
    (await baseAxios.get<Organization>(`/organizations/${id}`)).data;

export const getOrganizationByDomainService = async (domain: string) =>
    (await baseAxios.get<Organization>(`/organizations/get-by-domain/${domain}`)).data;

export const updateOrganizationService = async (id: string, data: EditOrganization) =>
    (await baseAxios.patch<Organization>(`/organizations/${id}`, data)).data;

export const deleteOrganizationService = (id: string) => baseAxios.delete(`/organizations/${id}`);
