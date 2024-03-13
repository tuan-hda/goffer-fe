import { noAuthAxios } from './base';

export const checkExistEmailService = async (email: string) => {
    return noAuthAxios.get(`/users/check-email?email=${email}`);
};
