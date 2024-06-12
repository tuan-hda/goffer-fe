import { GoogleProfile, UpdateUser, User } from '@/types/user.type';
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

export const updateSelfService = async (data: Partial<User>) => {
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

export const listPeopleService = async () => {
    return (await baseAxios.get<List<User>>('/users')).data;
};

export const getUserInfo = async (id: string) => {
    return (await baseAxios.get<User>(`/users/${id}`)).data;
};
