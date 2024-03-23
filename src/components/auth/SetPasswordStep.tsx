import { Button, Input } from '@nextui-org/react';
import classNames from 'classnames';
import { useState } from 'react';
import { TbCheck, TbChevronLeft, TbEye, TbEyeClosed } from 'react-icons/tb';
import { Link } from 'react-router-dom';

type SetPasswordStepProps = {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    isValidPassword: boolean;
    loading: boolean;
    handleContinue: () => void;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    title?: string;
    showGoBack?: boolean;
    submitTitle?: string;
    showLoginLink?: boolean;
};

const SetPasswordStep = ({
    password,
    setPassword,
    isValidPassword,
    loading,
    handleContinue,
    setStep,
    title = 'Enter your password',
    showGoBack = true,
    submitTitle = 'Sign up',
    showLoginLink = true,
}: SetPasswordStepProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirm, setShowConfirm] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setError('');
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        setError('');
    };

    const checkPasswords =
        (isPassword = false) =>
        () => {
            if (isPassword) {
                if (confirmPassword && password !== confirmPassword) {
                    setError('Passwords do not match');
                }
                return;
            }

            if (password !== confirmPassword) {
                setError('Passwords do not match');
            } else {
                setError('');
            }
        };

    const handleBack = () => {
        setPassword('');
        setConfirmPassword('');
        setStep((prev) => prev - 1);
    };

    const isInvalid = !isValidPassword || password !== confirmPassword;

    return (
        <>
            {showGoBack && (
                <button onClick={handleBack} className="group relative flex w-fit items-center gap-2">
                    <TbChevronLeft />
                    Go back
                    <div className="absolute bottom-0 left-0 hidden w-full border-b-1 border-text group-hover:block" />
                </button>
            )}
            <img alt="Logo" src="/logo.svg" className="mt-4 h-8 w-8 " />
            <h1 className="mt-3 font-serif text-xl font-bold">{title}</h1>

            <form className="mt-3" onSubmit={handleSubmit}>
                <label htmlFor="password" className="mt-3 block">
                    Password
                </label>
                <Input
                    endContent={
                        <button tabIndex={-1} type="button" onClick={() => setShowPassword((prev) => !prev)}>
                            {!showPassword ? <TbEyeClosed className="text-lg" /> : <TbEye className="text-lg" />}
                        </button>
                    }
                    onChange={handlePasswordChange}
                    value={password}
                    variant="faded"
                    className="mt-1"
                    classNames={{
                        inputWrapper: 'h-10 border-1 bg-white !ring-0',
                    }}
                    autoFocus
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Your password"
                    onBlur={checkPasswords(true)}
                />

                <div className="mt-3 space-y-1 rounded-xl bg-white p-3 shadow-small">
                    <div
                        className={classNames(
                            'flex items-center gap-2 opacity-40 transition',
                            password.length >= 8 && '!opacity-100',
                        )}
                    >
                        <TbCheck className={classNames('text-text', password.length >= 8 && '!text-green-500')} />{' '}
                        Password must be 8 length at least
                    </div>
                    <div
                        className={classNames(
                            'flex items-center gap-2 opacity-40 transition',
                            /\d/.test(password) && '!opacity-100',
                        )}
                    >
                        <TbCheck className={classNames('text-text', /\d/.test(password) && '!text-green-500')} />{' '}
                        Password must have at least 1 number
                    </div>
                    <div
                        className={classNames(
                            'flex items-center gap-2 opacity-40 transition',
                            /[a-zA-Z]/.test(password) && '!opacity-100',
                        )}
                    >
                        <TbCheck className={classNames('text-text', /[a-zA-Z]/.test(password) && '!text-green-500')} />{' '}
                        Password must have at least 1 alphabet
                    </div>
                </div>

                <label htmlFor="confirmPassword" className="mt-4 block">
                    Confirm password
                </label>
                <Input
                    endContent={
                        <button tabIndex={-1} type="button" onClick={() => setShowConfirm((prev) => !prev)}>
                            {!showConfirm ? <TbEyeClosed className="text-lg" /> : <TbEye className="text-lg" />}
                        </button>
                    }
                    isInvalid={!!error}
                    errorMessage={error}
                    onChange={handleConfirmPasswordChange}
                    value={confirmPassword}
                    variant="faded"
                    className="mt-1"
                    classNames={{
                        inputWrapper: classNames(
                            'h-10 border-1 bg-white !ring-0',
                            !!error && 'border-red-300 group-hover:border-red-600',
                        ),
                    }}
                    id="confirmPassword"
                    type={showConfirm ? 'text' : 'password'}
                    onBlur={checkPasswords()}
                    placeholder="Confirm your password"
                />

                <Button
                    disabled={isInvalid}
                    isLoading={loading}
                    onClick={handleContinue}
                    className={classNames('mt-4', isInvalid && 'pointer-events-none text-white')}
                    variant={!isInvalid ? 'shadow' : 'solid'}
                    color={!isInvalid ? 'primary' : 'default'}
                    fullWidth
                    type="submit"
                >
                    {submitTitle}
                </Button>
            </form>

            {showLoginLink && (
                <Link to="/auth/login" className="mt-6 block hover:underline">
                    Already have an account? <span className="text-primary">Login</span>
                </Link>
            )}
        </>
    );
};

export default SetPasswordStep;
