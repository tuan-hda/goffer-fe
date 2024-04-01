import { SignUpGoogle, SignUpRequest, User } from '@/types/user.type';
import { baseAxios, noAuthAxios } from './base';
import { AuthToken } from '@/types/token.type';
import config from '@/configs/config';

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

export const signUpGoogleService = async (user: SignUpGoogle, type: string) =>
    noAuthAxios.post<{ user: User; tokens: AuthToken }>('/auth/register/google', user, {
        params: {
            type,
        },
    });

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

export const loginGoogleService = async (accessToken: string) => {
    return (
        await noAuthAxios.post<{
            user: User;
            tokens: AuthToken;
        }>('/auth/login/google', {
            accessToken,
        })
    ).data;
};

export const logoutService = async () => baseAxios.post('/auth/logout');

export const getGoogleAuthUrl = (authType: 'login' | 'register') => {
    return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${config.GOOGLE_CLIENT_ID}&redirect_uri=${config.BACKEND_BASE_URL}/${config.BACKEND_VERSION}/auth/${authType}/google/callback&response_type=code&scope=email%20profile`;
};

export const forgotPasswordService = async (email: string) => noAuthAxios.post('/auth/forgot-password', { email });

export const resetPasswordService = async (password: string, token: string) =>
    noAuthAxios.post(
        '/auth/reset-password',
        { password },
        {
            params: {
                token,
            },
        },
    );
