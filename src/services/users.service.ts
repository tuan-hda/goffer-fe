import { User } from 'src/types/user.type';
import { baseAxios, noAuthAxios } from './base';

export const checkExistEmailService = async (email: string) => {
    return noAuthAxios.get(`/users/check-email?email=${email}`);
};

export const getSelfService = async () => {
    return (await baseAxios.get<User>('/users/self')).data;
};
