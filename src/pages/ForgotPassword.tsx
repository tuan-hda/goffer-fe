import { Button, Input } from '@nextui-org/react';
import { isAxiosError } from 'axios';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { TbChevronLeft } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import AuthTwoSection from 'src/layouts/AuthTwoSection';
import { forgotPasswordService } from 'src/services/auth.service';
import { validateEmail } from 'src/utils/regex';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setValidEmail] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        document.title = 'Forgot Password | Goffer';
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setValidEmail(validateEmail(e.target.value) !== null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValidEmail) {
            try {
                setLoading(true);
                await forgotPasswordService(email);
                toast.success('Successfully. Please check your email.');
                setIsSubmitted(true);
            } catch (error) {
                if (isAxiosError(error)) {
                    toast.error(error.response?.data.message || 'An error occurred. Please try again later.');
                } else {
                    toast.error('An error occurred. Please try again later.');
                }
                console.log('Forgot password error:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <AuthTwoSection
            right={
                <div className="m-auto flex h-full w-full bg-black p-10 font-light">
                    <img
                        src="/fade-away-emote.gif"
                        className="object-container m-auto h-[280px] w-[280px]"
                        alt="fade-away"
                    />
                </div>
            }
        >
            <div className="m-auto w-80 text-sm">
                <Link to={`/auth/login`} className="group relative flex w-fit items-center gap-2">
                    <TbChevronLeft />
                    Back to login
                    <div className="absolute bottom-0 left-0 hidden w-full border-b-1 border-text group-hover:block" />
                </Link>
                <img alt="Logo" src="/logo.svg" className="mt-4 h-8 w-8 " />
                <h1 className="mt-3 font-serif text-xl font-bold">Let&apos;s get your account back</h1>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <Input
                        onChange={handleChange}
                        value={email}
                        variant="faded"
                        className="mt-1"
                        classNames={{
                            inputWrapper: classNames('h-10 border-1 bg-white'),
                        }}
                        id="email"
                        type="email"
                        placeholder="your-address@email.com"
                    />
                    <Button
                        type="submit"
                        isDisabled={!isValidEmail || isSubmitted}
                        isLoading={loading}
                        className={classNames(
                            'mt-4',
                            (!isValidEmail || isSubmitted) && 'pointer-events-none text-white',
                        )}
                        variant={isValidEmail && !isSubmitted ? 'shadow' : 'solid'}
                        color={isValidEmail && !isSubmitted ? 'primary' : 'default'}
                        fullWidth
                    >
                        Send reset email
                    </Button>
                </form>
            </div>
        </AuthTwoSection>
    );
};

export default ForgotPassword;
