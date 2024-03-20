import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import SetPasswordStep from 'src/components/auth/SetPasswordStep';
import AuthTwoSection from 'src/layouts/AuthTwoSection';
import { resetPasswordService } from 'src/services/auth.service';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const isValidPassword = password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);

    useEffect(() => {
        document.title = 'Reset Password | Goffer';
    }, []);

    const handleSubmit = async () => {
        if (isValidPassword) {
            try {
                setLoading(true);
                await resetPasswordService(password, new URLSearchParams(window.location.search).get('token') || '');
                setIsSubmitted(true);
                toast.success('Successfully. Please login with your new password.');
                setTimeout(() => {
                    navigate('/auth/login');
                }, 1500);
            } catch (error) {
                if (isAxiosError(error)) {
                    toast.error(error.response?.data.message || 'An error occurred. Please try again later.');
                } else {
                    toast.error('An error occurred. Please try again later.');
                }
                console.log('Reset password error:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <AuthTwoSection
            right={
                <div className="flex h-full w-full p-10">
                    <img src="/lovers.png" className="object-container b-gw m-auto max-w-[400px]" alt="rest" />
                </div>
            }
        >
            <div className="m-auto w-80 text-sm">
                <SetPasswordStep
                    showLoginLink={false}
                    submitTitle="Reset password"
                    showGoBack={false}
                    title="Yay! You're almost there"
                    setPassword={setPassword}
                    setStep={() => {}}
                    isValidPassword={isValidPassword && !isSubmitted}
                    loading={loading}
                    password={password}
                    handleContinue={handleSubmit}
                />
            </div>
        </AuthTwoSection>
    );
};

export default ResetPassword;
