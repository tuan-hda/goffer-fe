import { baseAxios, noAuthAxios } from './base';

export const checkExistEmailService = async (email: string) => {
    return noAuthAxios.get(`/users/check-email?email=${email}`);
};

export const getSelfService = async () => {
    return baseAxios.get('/users/self');
};
