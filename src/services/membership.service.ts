import { Membership, NewMembership } from '@/types/membership.type';
import { baseAxios } from './base';
import { List } from '@/types/list.type';
import { ListQueryOptions } from '@/types/common.type';

export const addMemberService = async (data: NewMembership) => {
    return (await baseAxios.post<Membership>('/memberships', data)).data;
};

export const listMemberService = async (query?: Partial<Record<keyof (Membership & ListQueryOptions), string>>) => {
    return (await baseAxios.get<List<Membership>>('/memberships', { params: query })).data;
};

export const getOrgMembers = async (orgId: string) => {
    return await baseAxios.get<Membership[]>(`/memberships/org/${orgId}`);
};

export const acceptInvitation = async (token: string) => {
    return (await baseAxios.post<Membership>(`/memberships/accept`, { token })).data;
};

export const rejectInvitation = async (token: string) => {
    return (await baseAxios.post<Membership>(`/memberships/reject`, { token })).data;
};
