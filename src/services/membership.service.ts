import { EditMembership, Membership, NewMembership } from '@/types/membership.type';
import { baseAxios } from './base';

export const addMemberService = async (data: NewMembership) => {
    return (await baseAxios.post<Membership>('/memberships', data)).data;
};

export const getOrgMembers = async (orgId: string) => {
    return await baseAxios.get<Membership[]>(`/memberships/org/${orgId}`);
};

export const getMembershipService = async (id: string) => {
    return await baseAxios.get<Membership>(`/memberships/${id}`);
};

export const acceptInvitation = async (token: string) => {
    return (await baseAxios.post<Membership>(`/memberships/accept`, { token })).data;
};

export const rejectInvitation = async (token: string) => {
    return (await baseAxios.post<Membership>(`/memberships/reject`, { token })).data;
};

export const deleteMembershipService = async (id: string) => {
    return await baseAxios.delete(`/memberships/${id}`);
};

export const updateMembershipService = async (id: string, data: EditMembership) => {
    return await baseAxios.patch(`/memberships/${id}`, data);
};
