import { baseAxios } from './base';

export const signUpService = async () => {
    return baseAxios.post('/auth/sign-up');
};

export const checkExistEmailService = async (email: string) => {
    return baseAxios.get(`/auth/check-email?email=${email}`);
};
