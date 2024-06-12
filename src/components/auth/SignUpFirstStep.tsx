import { Button, Input } from '@nextui-org/react';
import classNames from 'classnames';
import { TbChevronLeft } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleSignUp';

type SignUpFirstStepProps = {
    type: 'individual' | 'organization';
    emailExists: boolean;
    handleChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
    email: string;
    isValidEmail: boolean;
    loading: boolean;
    handleContinue: () => void;
};

const SignUpFirstStep = ({
    type,
    emailExists,
    handleChange,
    email,
    isValidEmail,
    loading,
    handleContinue,
}: SignUpFirstStepProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValidEmail) handleContinue();
    };

    return (
        <>
            <img alt="Logo" src="/logo.svg" className="mt-4 h-8 w-8 " />
            <h1 className="mt-3 font-serif text-xl font-bold">Goffer for {type}</h1>

            <GoogleAuth authType="register" type={type} />
            <div className="mt-6 border-t" />
            <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="email">{type === 'individual' ? 'Email' : 'Work email'} address</label>
                <Input
                    errorMessage={emailExists && 'Email already exists'}
                    isInvalid={emailExists}
                    onChange={handleChange}
                    value={email}
                    variant="faded"
                    className="mt-1"
                    classNames={{
                        inputWrapper: classNames(
                            'h-10 border-1 bg-white',
                            emailExists && 'border-red-300 group-hover:border-red-600',
                        ),
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

            <Link to="/auth/login" className="mt-6 block hover:underline">
                Already have an account? <span className="text-primary">Login</span>
            </Link>
        </>
    );
};

export default SignUpFirstStep;
