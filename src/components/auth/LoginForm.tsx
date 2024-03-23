import { Button, Input } from '@nextui-org/react';
import classNames from 'classnames';
import { useState } from 'react';
import { TbEye, TbEyeClosed } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleSignUp';

type LoginFormProps = {
    handleSubmit: (_: React.FormEvent<HTMLFormElement>) => void;
    email: string;
    handleEmailChange: (_: React.ChangeEvent<HTMLInputElement>) => void;

    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    isEmailValid: boolean;
    loading: boolean;
};

const LoginForm = ({
    handleSubmit,
    email,
    handleEmailChange,
    password,
    setPassword,
    isEmailValid,
    loading,
}: LoginFormProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const isValid = isEmailValid && password.length >= 8;

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className="m-auto w-80 text-sm">
            <img alt="Logo" src="/logo.svg" className="mt-4 h-8 w-8 " />
            <h1 className="mt-3 flex items-center gap-2 font-serif text-xl font-bold">
                Welcome back to Goffer <span className="ml-1">👋</span>
            </h1>
            <GoogleAuth authType="login" />
            <div className="mt-6 border-t" />

            <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="email">Email address</label>
                <Input
                    value={email}
                    variant="faded"
                    className="mt-1"
                    classNames={{
                        inputWrapper: 'h-10 border-1 bg-white !ring-0',
                    }}
                    id="email"
                    autoFocus
                    type="email"
                    name="email"
                    placeholder="name@email.com"
                    onChange={handleEmailChange}
                />

                <div className="mt-3 flex">
                    <label htmlFor="password" className="block">
                        Password
                    </label>
                    <Link to="/auth/forgot-password" className="ml-auto text-primary hover:underline">
                        Forgot password?
                    </Link>
                </div>
                <Input
                    endContent={
                        <button tabIndex={-1} type="button" onClick={() => setShowPassword((prev) => !prev)}>
                            {!showPassword ? <TbEyeClosed className="text-lg" /> : <TbEye className="text-lg" />}
                        </button>
                    }
                    value={password}
                    name="password"
                    variant="faded"
                    className="mt-1"
                    classNames={{
                        inputWrapper: 'h-10 border-1 bg-white !ring-0',
                    }}
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Your password"
                    onChange={handlePasswordChange}
                />

                <Button
                    isLoading={loading}
                    disabled={!isValid}
                    className={classNames('mt-4', !isValid && 'pointer-events-none text-white')}
                    variant={isValid ? 'shadow' : 'solid'}
                    color={isValid ? 'primary' : 'default'}
                    fullWidth
                    type="submit"
                >
                    Login
                </Button>
            </form>
            <Link to="/auth/sign-up" className="mt-6 block hover:underline">
                New to Goffer? Join our platform. <span className="text-primary">Sign up</span>
            </Link>
        </div>
    );
};

export default LoginForm;
