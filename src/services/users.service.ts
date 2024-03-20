import { GoogleProfile, User } from 'src/types/user.type';
import { baseAxios, noAuthAxios } from './base';
import axios from 'axios';
import config from 'src/configs/config';

export const checkExistEmailService = async (email: string) => {
    return noAuthAxios.get(`/users/check-email?email=${email}`);
};

export const getSelfService = async () => {
    return (await baseAxios.get<User>('/users/self')).data;
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
