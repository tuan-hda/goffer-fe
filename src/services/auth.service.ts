import { SignUpRequest, User } from 'src/types/user.type';
import { baseAxios, noAuthAxios } from './base';
import { AuthToken } from 'src/types/token.type';

export const signUpService = async (user: SignUpRequest) => {
    return noAuthAxios.post<{
        user: User;
        tokens: AuthToken;
    }>('/auth/register', user);
};

export const sendOtpVerificationEmail = async (accessToken: string) => {
    return baseAxios.post(
        '/auth/send-otp-verification-email',
        {},
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },
    );
};
