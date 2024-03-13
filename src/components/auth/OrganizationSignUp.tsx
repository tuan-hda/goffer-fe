import { Button, Input } from '@nextui-org/react';
import { FcGoogle } from 'react-icons/fc';
import { TbCheck, TbChevronLeft } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import AuthTwoSection from 'src/layouts/AuthTwoSection';

const OrganizationSignUp = () => {
    return (
        <AuthTwoSection
            right={
                <div className="m-auto p-10 font-light">
                    <h2 className="w-full max-w-[420px] font-serif text-4xl font-semibold text-white">
                        The all-in-one platform to speed up your hiring process
                    </h2>
                    <div className="mt-6 flex items-center gap-4">
                        <TbCheck className="text-2xl text-green-500" />{' '}
                        <p className="text-white">Discover the most talented individuals in the field</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <TbCheck className="text-2xl text-green-500" />{' '}
                        <p className="text-white">Get insights of your candidate</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <TbCheck className="text-2xl text-green-500" />{' '}
                        <p className="text-white">Audio and video response, with analytics</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <TbCheck className="text-2xl text-green-500" />{' '}
                        <p className="text-white">One platform to maintain all your candidates</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden">
                        <img
                            src="/assets/cone.png"
                            className="h-full w-full scale-110 object-contain pl-10 pt-20 opacity-80 mix-blend-difference"
                            alt="Cone"
                        />
                    </div>
                </div>
            }
        >
            <div className="m-auto w-80 text-sm">
                <Link to="/auth/sign-up?type=individual" className="group relative flex w-fit items-center gap-2">
                    <TbChevronLeft />
                    Sign up as an individual
                    <div className="absolute bottom-0 left-0 hidden w-full border-b-1 border-text group-hover:block" />
                </Link>
                <img alt="Logo" src="/logo.svg" className="mt-4 h-8 w-8 " />
                <h1 className="mt-3 font-serif text-xl font-bold">Goffer for organization</h1>
                <Button fullWidth startContent={<FcGoogle className="text-lg" />} className="mt-4" color="secondary">
                    Continue with Google
                </Button>
                <div className="mt-6 border-t" />
                <form className="mt-4">
                    <label htmlFor="email">Company email address</label>
                    <Input
                        variant="faded"
                        className="mt-1"
                        classNames={{
                            inputWrapper: 'h-10 border-1 bg-white',
                        }}
                        id="email"
                        type="email"
                        placeholder="name@work-email.com"
                    />
                    <Button className="mt-4" variant="shadow" color="primary" fullWidth>
                        Continue
                    </Button>
                </form>
                <Link to="/auth/login" className="mt-6 block hover:underline">
                    Already have an account? <span className="text-primary">Login</span>
                </Link>
            </div>
        </AuthTwoSection>
    );
};

export default OrganizationSignUp;
