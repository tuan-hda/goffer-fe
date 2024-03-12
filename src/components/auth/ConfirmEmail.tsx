import { Spinner } from '@nextui-org/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { TbPencil } from 'react-icons/tb';

type ConfirmEmailProps = {
    email: string;
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const ConfirmEmail = ({ email, setStep }: ConfirmEmailProps) => {
    const [otp, setOtp] = useState<string>('      ');
    const [curr, setCurr] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement[]>(new Array(6).fill(null));

    useEffect(() => {
        document.title = 'Confirm Email | Goffer';
    }, []);

    useEffect(() => {
        inputRef.current[curr]?.select();
    }, [curr]);

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
                Not get any code? <button className="text-primary hover:underline">Send new code</button>
            </div>

            <div className="mt-8 h-10">{loading && <Spinner />}</div>
        </div>
    );
};

export default ConfirmEmail;
