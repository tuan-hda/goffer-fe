import { GoogleProfile, SeparatedDomainUser, UpdateUser, User, UserUpdateRequest } from '@/types/user.type';
import { baseAxios, noAuthAxios } from './base';
import axios from 'axios';
import config from '@/configs/config';
import { List } from '@/types/list.type';

export const checkExistEmailService = async (email: string) => {
    return noAuthAxios.get(`/users/check-email?email=${email}`);
};

export const getSelfService = async () => {
    return (await baseAxios.get<User>('/users/self')).data;
};

export const updateSelfService = async (data: Partial<UserUpdateRequest>) => {
    return baseAxios.put<User>('/users/self', data);
};

export const googleProfileService = async (accessToken: string) => {
    return (
        await axios.get<GoogleProfile>(config.GOOGLE_ACCOUNT_API_BASE_URL, {
            params: {
                access_token: accessToken,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
            },
        })
    ).data;
};

export const updateUserService = (user: UpdateUser) => baseAxios.put('/users/self', user);

export const listPeopleService = async (query?: Partial<Record<keyof SeparatedDomainUser, string>>) => {
    return (
        await baseAxios.get<List<User>>('/users', {
            params: query,
        })
    ).data;
};

export const getUserInfo = async (id: string) => {
    return (await baseAxios.get<User>(`/users/${id}`)).data;
};

export const subscribeProService = async () => (await baseAxios.post('/users/subscribe-pro')).data;
