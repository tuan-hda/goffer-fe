import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthTwoSection from '@/layouts/AuthTwoSection';
import { loginService } from '@/services/auth.service';
import { validateEmail } from '@/utils/regex';
import toast from 'react-hot-toast';
import useAuthStore from '@/stores/authStore';
import { LoginForm } from '@/components/auth';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';

const Login = () => {
    const { setAccess } = useAuthStore();
    const { refetch } = useSelfProfileQuery();

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [isEmailValid, setEmailValid] = useState(false);

    const [password, setPassword] = useState('');

    useEffect(() => {
        document.title = 'Login | Goffer';
    }, []);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailValid(validateEmail(e.target.value) !== null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await loginService(email, password);
            setAccess(response.data.tokens.access);
            navigate('/app/individual');
            refetch();
            toast.success('Login successful');
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
            <LoginForm
                email={email}
                handleEmailChange={handleEmailChange}
                handleSubmit={handleSubmit}
                isEmailValid={isEmailValid}
                loading={loading}
                password={password}
                setPassword={setPassword}
            />
        </AuthTwoSection>
    );
};

export default Login;
