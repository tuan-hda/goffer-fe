import { SignUpRequest } from 'src/types/user.type';
import { noAuthAxios } from './base';

export const signUpService = async (user: SignUpRequest) => {
    return noAuthAxios.post('/auth/register', user);
};
