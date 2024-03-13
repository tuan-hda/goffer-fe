import { useState } from 'react';
import { checkExistEmailService } from 'src/services/users.service';
import { validateEmail } from 'src/utils/regex';
import toast from 'react-hot-toast';
import SignUpFirstStep from './SignUpFirstStep';
import SignUpSecondStep from './SignUpSecondStep';
import { signUpService } from 'src/services/auth.service';
import ConfirmEmail from './ConfirmEmail';

type SignUpFormProps = {
    type?: 'individual' | 'organization';
};

const SignUpForm = ({ type = 'individual' }: SignUpFormProps) => {
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [isValidEmail, setValidEmail] = useState(false);

    const [password, setPassword] = useState('');
    const isValidPassword = password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);

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
                    await signUpService({ email, password });
                    setStep((prev) => prev + 1);
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
            {step === 2 && <ConfirmEmail setStep={setStep} email={'hdatdragon2@gmail.com'} />}
        </>
    );
};

export default SignUpForm;
