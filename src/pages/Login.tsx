import { Button, Input } from '@nextui-org/react';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { TbEye, TbEyeClosed } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import AuthTwoSection from 'src/layouts/AuthTwoSection';
import { loginService } from 'src/services/auth.service';
import { validateEmail } from 'src/utils/regex';
import toast from 'react-hot-toast';
import useAuthStore from 'src/stores/authStore';
import { useQuery } from '@tanstack/react-query';
import { getSelfService } from 'src/services/users.service';

const Login = () => {
    const { setAccess } = useAuthStore();
    const { refetch } = useQuery({ queryKey: ['getSelf'], queryFn: getSelfService, enabled: false });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [isEmailValid, setEmailValid] = useState(false);

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const isValid = isEmailValid && password.length > 0;

    useEffect(() => {
        document.title = 'Login | Goffer';
    }, []);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailValid(validateEmail(e.target.value) !== null);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await loginService(email, password);
            setAccess(response.data.tokens.access);
            refetch();
            toast.success('Login successful');
            navigate('/individual');
        } catch (error) {
            toast.error('Wrong email or password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthTwoSection
            right={
                <div className="m-auto p-10 font-light">
                    <img
                        src="/trivia1.png"
                        className="h-full w-full max-w-[400px] object-cover mix-blend-difference"
                        alt="Cone"
                    />
                </div>
            }
        >
            <div className="m-auto w-80 text-sm">
                <img alt="Logo" src="/logo.svg" className="mt-4 h-8 w-8 " />
                <h1 className="mt-3 flex items-center gap-2 font-serif text-xl font-bold">
                    Welcome back to Goffer <span className="ml-1">👋</span>
                </h1>
                <Button fullWidth startContent={<FcGoogle className="text-lg" />} className="mt-4" color="secondary">
                    Login with Google
                </Button>
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

                    <label htmlFor="password" className="mt-3 block">
                        Password
                    </label>
                    <Input
                        endContent={
                            <button tabIndex={-1} type="button" onClick={() => setShowPassword((prev) => !prev)}>
                                {!showPassword ? <TbEyeClosed className="text-lg" /> : <TbEye className="text-lg" />}
                            </button>
                        }
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
        </AuthTwoSection>
    );
};

export default Login;
