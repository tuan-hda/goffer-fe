import { SignUpRequest, User } from 'src/types/user.type';
import { baseAxios, noAuthAxios } from './base';
import { AuthToken } from 'src/types/token.type';

export const signUpService = async (user: SignUpRequest, type: string) => {
    return noAuthAxios.post<{
        user: User;
        tokens: AuthToken;
    }>('/auth/register', user, {
        params: {
            type,
        },
    });
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

export const verifyOtpEmail = async (accessToken: string, otp: string) => {
    return baseAxios.post(
        '/auth/verify-otp-email?token=' + otp,
        {},
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },
    );
};

export const loginService = async (email: string, password: string) => {
    return noAuthAxios.post<{
        user: User;
        tokens: AuthToken;
    }>('/auth/login', {
        email,
        password,
    });
};
