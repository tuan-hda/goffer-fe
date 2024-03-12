import { Button, Input } from '@nextui-org/react';
import classNames from 'classnames';
import { useState } from 'react';
import { checkExistEmailService } from 'src/services/auth.serivce';
import { validateEmail } from 'src/utils/regex';

type SignUpFormProps = {
    type?: 'individual' | 'organization';
};

const SignUpForm = ({ type = 'individual' }: SignUpFormProps) => {
    const [step, setStep] = useState(0);

    const [email, setEmail] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isValidEmail, setValidEmail] = useState(false);

    const handleContinue = async () => {
        switch (step) {
            case 0:
                try {
                    setLoading(true);
                    const response = await checkExistEmailService(email);
                    setEmailExists(response.data.exists);
                    setStep((prev) => prev + 1);
                } catch (error) {
                    console.log('Check email error:', error);
                } finally {
                    setLoading(false);
                }
                return;
            default:
                return;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailExists(false);
        setValidEmail(validateEmail(e.target.value) !== null);
    };

    if (step === 0)
        return (
            <form className="mt-4">
                <label htmlFor="email">{type === 'individual' ? 'Email' : 'Work email'} address</label>
                <Input
                    errorMessage={emailExists}
                    isInvalid={emailExists}
                    onChange={handleChange}
                    value={email}
                    variant="faded"
                    className="mt-1"
                    classNames={{
                        inputWrapper: 'h-10 border-1 bg-white',
                    }}
                    id="email"
                    type="email"
                    placeholder={type === 'individual' ? 'name@email.com' : 'name@work-email.com'}
                />
                <Button
                    disabled={!isValidEmail}
                    isLoading={loading}
                    onClick={handleContinue}
                    className={classNames('mt-4', !isValidEmail && 'pointer-events-none text-white')}
                    variant={isValidEmail ? 'shadow' : 'solid'}
                    color={isValidEmail ? 'primary' : 'default'}
                    fullWidth
                >
                    Continue
                </Button>
            </form>
        );
};

export default SignUpForm;
