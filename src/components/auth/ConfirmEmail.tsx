import { Fragment, useEffect, useRef, useState } from 'react';
import { TbPencil } from 'react-icons/tb';

type ConfirmEmailProps = {
    email: string;
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const ConfirmEmail = ({ email, setStep }: ConfirmEmailProps) => {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
    const [curr, setCurr] = useState<number>(0);

    const inputRef = useRef<HTMLInputElement[]>(new Array(6).fill(null));

    useEffect(() => {
        document.title = 'Confirm Email | Goffer';
    }, []);

    useEffect(() => {
        inputRef.current[curr]?.select();
    }, [curr]);

    const handleOnKeyDown = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.key === 'Backspace') {
            setCurr(Math.max(index - 1, 0));
            setOtp((prev) => {
                const copy = [...prev];
                copy[index] = '';
                return copy;
            });

            return;
        }
        if (!/^\d+$/.test(e.key)) return;
        const val = e.key;
        setCurr(Math.min(index + 1, 5));
        setOtp((prev) => {
            const copy = [...prev];
            copy[index] = val;
            return copy;
        });
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-serif text-xl font-bold">We&apos;ve emailed you a code</h1>
            <p className="mt-3">Enter code to confirm your email</p>
            <button
                onClick={() => setStep(0)}
                className="mt-1 flex items-center gap-1 bg-beige/50 px-1 font-semibold transition hover:bg-beige"
            >
                {email} <TbPencil />{' '}
            </button>

            <div className="mt-5 w-fit space-x-2 rounded-xl border-1 border-gray-400 px-3 py-2">
                {otp.map((_, index) => (
                    <Fragment key={index}>
                        <input
                            onClick={() => setCurr(index)}
                            ref={(el) => (inputRef.current[index] = el as HTMLInputElement)}
                            value={otp[index]}
                            onChange={() => {}}
                            type="number"
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
        </div>
    );
};

export default ConfirmEmail;
