import { Button, Input } from '@nextui-org/react';
import classNames from 'classnames';
import { TbCheck, TbChevronLeft } from 'react-icons/tb';
import { Link } from 'react-router-dom';

type SignUpSecondStepProps = {
    handleChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
    password: string;
    isValidPassword: boolean;
    loading: boolean;
    handleContinue: () => void;
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const SignUpSecondStep = ({
    handleChange,
    password,
    isValidPassword,
    loading,
    handleContinue,
    setStep,
}: SignUpSecondStepProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('trigger');
        if (isValidPassword) handleContinue();
    };

    return (
        <>
            <button
                onClick={() => setStep((prev) => prev - 1)}
                className="group relative flex w-fit items-center gap-2"
            >
                <TbChevronLeft />
                Go back
                <div className="absolute bottom-0 left-0 hidden w-full border-b-1 border-text group-hover:block" />
            </button>
            <img alt="Logo" src="/logo.svg" className="mt-4 h-8 w-8 " />
            <h1 className="mt-3 font-serif text-xl font-bold">Enter your password</h1>

            <form className="mt-3" onSubmit={handleSubmit}>
                <label htmlFor="password" className="mt-3 block">
                    Password
                </label>
                <Input
                    onChange={handleChange}
                    value={password}
                    variant="faded"
                    className="mt-1"
                    classNames={{
                        inputWrapper: 'h-10 border-1 bg-white !ring-0',
                    }}
                    autoFocus
                    id="password"
                    type="password"
                    placeholder="Your password"
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

                <label htmlFor="password" className="mt-4 block">
                    Confirm password
                </label>
                <Input
                    onChange={handleChange}
                    value={password}
                    variant="faded"
                    className="mt-1"
                    classNames={{
                        inputWrapper: 'h-10 border-1 bg-white !ring-0',
                    }}
                    autoFocus
                    id="password"
                    type="password"
                    placeholder="Confirm your password"
                />

                <Button
                    disabled={!isValidPassword}
                    isLoading={loading}
                    onClick={handleContinue}
                    className={classNames('mt-4', !isValidPassword && 'pointer-events-none text-white')}
                    variant={isValidPassword ? 'shadow' : 'solid'}
                    color={isValidPassword ? 'primary' : 'default'}
                    fullWidth
                >
                    Sign up
                </Button>
            </form>

            <Link to="/auth/login" className="mt-6 block hover:underline">
                Already have an account? <span className="text-primary">Login</span>
            </Link>
        </>
    );
};

export default SignUpSecondStep;
