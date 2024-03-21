import { useState } from 'react';
import { FirstStep, SecondStep } from 'src/components/getStarted';

const GetStarted = () => {
    const [step, setStep] = useState(0);
    return (
        <div className="flex h-screen w-screen">
            <div className="m-auto flex w-[820px] items-center justify-between rounded-2xl bg-white p-12 shadow-large">
                {step === 0 && <FirstStep setStep={setStep} />}
                {step === 1 && <SecondStep setStep={setStep} />}
                <img src="/trivia4.png" alt="Trivia-4" className="h-[360px] rounded-lg" />
            </div>
        </div>
    );
};

export default GetStarted;
