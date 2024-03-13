import { Spinner } from '@nextui-org/react';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { TbPencil } from 'react-icons/tb';
import { sendOtpVerificationEmail } from 'src/services/auth.service';
import { AuthToken } from 'src/types/token.type';
import { User } from 'src/types/user.type';
import toast from 'react-hot-toast';
import dayjs from 'dayjs';
import classNames from 'classnames';

type ConfirmEmailProps = {
    email: string;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    user: User;
    tokens: AuthToken;
};

const ConfirmEmail = ({ email, setStep, user, tokens }: ConfirmEmailProps) => {
    const [otp, setOtp] = useState<string>('      ');
    const [curr, setCurr] = useState<number>(0);
    const [remainingTime, setRemainingTime] = useState<number>(60);
    const sent = useRef<boolean>(false);

    const [initialLoading, setInitialLoading] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement[]>(new Array(6).fill(null));

    useEffect(() => {
        document.title = 'Confirm Email | Goffer';
    }, []);

    useEffect(() => {
        inputRef.current[curr]?.select();
    }, [curr]);

    const checkStillRemaining = useCallback(() => {
        const lastSentEmailStr = localStorage.getItem('lastSentEmail');
        if (lastSentEmailStr) {
            const lastSentEmail = dayjs(lastSentEmailStr);
            const diff = dayjs().diff(lastSentEmail, 'second');
            if (diff < 60) {
                setRemainingTime(60 - diff);
                return true;
            } else {
                setRemainingTime(0);
                return false;
            }
        } else {
            setRemainingTime(0);
            return false;
        }
    }, []);

    const sendVerificationEmail = useCallback(async (accessToken: string) => {
        try {
            setLoading(true);
            localStorage.setItem('lastSentEmail', dayjs().toISOString());
            await sendOtpVerificationEmail(accessToken);
            setRemainingTime(60);
        } catch (error) {
            console.log('Send verification email error:', error);
            toast.error('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
            setInitialLoading(false);
        }
    }, []);

    useEffect(() => {
        let interval: number | null = null;
        if (checkStillRemaining()) {
            interval = setInterval(() => {
                setRemainingTime((prev) => {
                    if (prev === 0 && interval) {
                        clearInterval(interval);
                    }
                    return prev - 1;
                });
            }, 1000);
        } else if (!sent.current) {
            sent.current = true;
            sendVerificationEmail(tokens.access.token);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [checkStillRemaining, sendVerificationEmail, tokens]);

    const checkOtp = async () => {
        try {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (error) {
            console.log('Check otp error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (index: number) => async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!/^\d$/g.test(value)) return;
        const newOtp = otp.split('');
        newOtp[index] = value;
        const newOtpStr = newOtp.join('');
        setOtp(newOtpStr);
        if (newOtpStr.replace(/\s/g, '').length === 6) {
            await checkOtp();
        }
        setCurr(Math.min(index + 1, 5));
    };

    const handleOnKeyDown = (index: number) => async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            setCurr(Math.max(index - 1, 0));
            setOtp((prev) => prev.slice(0, index) + ' ' + prev.slice(index + 1));
            return;
        }

        if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
            e.preventDefault();
            let clipboard = await navigator.clipboard.readText();
            clipboard = clipboard.replace(/\D/g, '').trim();
            if (clipboard.length > 6) clipboard = clipboard.slice(0, 6);
            setCurr(Math.min(5, clipboard.length));
            if (clipboard.length < 6) clipboard = clipboard.padEnd(6, ' ');
            setOtp(clipboard);
            return;
        }
    };

    if (initialLoading)
        return (
            <div className="flex flex-col items-center">
                <Spinner />
            </div>
        );

    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-6 font-serif text-xl font-bold">We&apos;ve emailed you a code</h1>
            <p className="mt-3">Enter code to confirm your email</p>
            <button
                onClick={() => setStep(0)}
                className="mt-1 flex items-center gap-1 bg-beige/50 px-1 font-semibold transition hover:bg-beige"
            >
                {email} <TbPencil />{' '}
            </button>

            <div className="mt-5 w-fit space-x-2 rounded-xl border-1 border-gray-400 px-3 py-2">
                {otp.split('').map((_, index) => (
                    <Fragment key={index}>
                        <input
                            onClick={() => setCurr(index)}
                            ref={(el) => (inputRef.current[index] = el as HTMLInputElement)}
                            value={otp[index]}
                            type="number"
                            onChange={handleChange(index)}
                            className="h-8 w-8 rounded-lg bg-transparent text-center text-lg font-semibold placeholder-text/20 outline-none"
                            placeholder="●"
                            onKeyDown={handleOnKeyDown(index)}
                        />
                    </Fragment>
                ))}
            </div>
            <div className="mt-4">
                Not get any code?{' '}
                <button
                    disabled={remainingTime > 0 || loading}
                    onClick={() => {
                        tokens.access.token && sendVerificationEmail(tokens.access.token);
                    }}
                    className={classNames(
                        'text-primary transition',
                        remainingTime > 0 || loading ? 'opacity-50' : 'opacity-100 hover:underline',
                    )}
                >
                    Send new code {remainingTime > 0 && <>({remainingTime})</>}
                </button>
            </div>

            <div className="mt-8 h-10">{loading && <Spinner />}</div>
        </div>
    );
};

export default ConfirmEmail;
