import { Button } from '@nextui-org/react';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { isAxiosError } from 'axios';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { googleProfileService } from '@/services/users.service';
import { loginGoogleService, signUpGoogleService } from '@/services/auth.service';
import { useState } from 'react';

type GoogleLoginProps = {
    authType: 'login';
    type?: null;
};

type GoogleSignUpProps = {
    authType: 'register';
    type: 'individual' | 'organization';
};

type GoogleAuthProps = GoogleLoginProps | GoogleSignUpProps;

const GoogleAuth = ({ type, authType }: GoogleAuthProps) => {
    const [loading, setLoading] = useState(false);

    const handleLogin = async (res: TokenResponse) => {
        try {
            setLoading(true);
            const data = await loginGoogleService(res.access_token);

            const redirect = new URLSearchParams(window.location.search).get('redirect');
            if (redirect) {
                window.location.href = redirect;
                return;
            }

            window.location.pathname = `/app/${data.user.initialType}`;
        } catch (error) {
            console.log('Google sign up error:', error);
            if (isAxiosError(error)) {
                toast.error(error.response?.data.message || 'An error occurred. Please try again later.');
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = async (res: TokenResponse) => {
        try {
            setLoading(true);
            if (authType !== 'register') return;
            const data = await googleProfileService(res.access_token);
            await signUpGoogleService(
                {
                    avatar: data.picture || '',
                    email: data.email,
                    isEmailVerified: data.verified_email,
                    name: data.name,
                    provider: 'google',
                },
                type,
            );
            window.location.pathname = `/app/${type}`;
        } catch (error) {
            console.log('Google sign up error:', error);
            if (isAxiosError(error)) {
                toast.error(error.response?.data.message || 'An error occurred. Please try again later.');
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSuccess = async (res: TokenResponse) => {
        if (authType === 'register') {
            await handleSignUp(res);
        } else {
            await handleLogin(res);
        }
    };

    const login = useGoogleLogin({
        onSuccess: handleSuccess,
        onError: (error) => console.log('Google Login Failed:', error),
    });

    const handleContinueWithGoogle = async () => {
        try {
            login();
        } catch (error) {
            console.log('Google auth error:', error);
            if (isAxiosError(error)) {
                toast.error(error.response?.data.message || 'An error occurred. Please try again later.');
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <Button
            isLoading={loading}
            onClick={handleContinueWithGoogle}
            fullWidth
            startContent={<FcGoogle className="text-lg" />}
            className="mt-4"
            color="secondary"
        >
            {authType === 'login' ? 'Login with Google' : 'Continue with Google'}
        </Button>
    );
};

export default GoogleAuth;
