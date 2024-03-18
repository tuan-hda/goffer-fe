import { useState } from 'react';
import { checkExistEmailService } from 'src/services/users.service';
import { validateEmail } from 'src/utils/regex';
import toast from 'react-hot-toast';
import SignUpFirstStep from './SignUpFirstStep';
import SignUpSecondStep from './SignUpSecondStep';
import { signUpService } from 'src/services/auth.service';
import ConfirmEmail from './ConfirmEmail';
import { User } from 'src/types/user.type';
import { AuthToken, Token } from 'src/types/token.type';
import { useNavigate } from 'react-router-dom';

type SignUpFormProps = {
    type?: 'individual' | 'organization';
};

const SignUpForm = ({ type = 'individual' }: SignUpFormProps) => {
    const navigate = useNavigate();

    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [isValidEmail, setValidEmail] = useState(false);

    const [password, setPassword] = useState('');
    const isValidPassword = password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);

    const [accessToken, setAccessToken] = useState<Token>();

    const handleShouldVerifyEmail = (user: User, tokens: AuthToken, currStep: number) => {
        if (!user.isEmailVerified) {
            setStep(currStep + 1);
            setAccessToken(tokens.access);
        } else {
            navigate('/app/individual');
        }
    };

    const handleContinue = async () => {
        switch (step) {
            case 0:
                try {
                    setLoading(true);
                    const response = await checkExistEmailService(email);
                    setEmailExists(response.data.exists);
                    if (response.data.exists) return;
                    setStep((prev) => prev + 1);
                } catch (error) {
                    toast.error('An error occurred. Please try again later.');
                    console.log('Check email error:', error);
                } finally {
                    setLoading(false);
                }
                return;

            case 1:
                try {
                    setLoading(true);
                    const type = new URLSearchParams(window.location.search).get('type') || 'individual';
                    const response = await signUpService({ email, password }, type);
                    handleShouldVerifyEmail(response.data.user, response.data.tokens, step);
                } catch (error) {
                    toast.error('An error occurred. Please try again later.');
                    console.log('Sign up error:', error);
                } finally {
                    setLoading(false);
                }
                return;
            default:
                return;
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailExists(false);
        setValidEmail(validateEmail(e.target.value) !== null);
    };

    return (
        <>
            {step === 0 && (
                <SignUpFirstStep
                    email={email}
                    emailExists={emailExists}
                    handleChange={handleEmailChange}
                    handleContinue={handleContinue}
                    isValidEmail={isValidEmail}
                    loading={loading}
                    type={type}
                />
            )}
            {step === 1 && (
                <SignUpSecondStep
                    setPassword={setPassword}
                    password={password}
                    handleContinue={handleContinue}
                    isValidPassword={isValidPassword}
                    loading={loading}
                    setStep={setStep}
                />
            )}
            {step === 2 && accessToken && <ConfirmEmail accessToken={accessToken} email={email} />}
        </>
    );
};

export default SignUpForm;
