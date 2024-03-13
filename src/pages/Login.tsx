import { Button, Input } from '@nextui-org/react';
import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import AuthTwoSection from 'src/layouts/AuthTwoSection';

const Login = () => {
    useEffect(() => {
        document.title = 'Login | Goffer';
    }, []);

    return (
        <AuthTwoSection
            right={
                <div className="m-auto p-10 font-light">
                    <img
                        src="/trivia1.png"
                        className="h-full w-full max-w-[600px] object-cover mix-blend-difference"
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
                <form className="mt-4">
                    <label htmlFor="email">Email address</label>
                    <Input
                        variant="faded"
                        className="mt-1"
                        classNames={{
                            inputWrapper: 'h-10 border-1 bg-white',
                        }}
                        id="email"
                        type="email"
                        placeholder="name@email.com"
                    />
                    <Button className="mt-4" variant="shadow" color="primary" fullWidth>
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
