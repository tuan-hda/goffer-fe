import { useState } from 'react';
import { FirstStep, SecondStep, ThirdStep } from 'src/components/getStarted';
import { StartedInfo } from 'src/types/start.type';

const GetStarted = () => {
    const [step, setStep] = useState(2);
    const [info, setInfo] = useState<StartedInfo>({});

    const handleContinue = () => {
        setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
    };

    return (
        <div className="flex h-screen w-screen">
            <div className="m-auto flex w-[820px] items-center justify-between gap-10 rounded-2xl bg-white p-12 shadow-large">
                {step === 0 && <FirstStep info={info} setInfo={setInfo} onContinue={handleContinue} />}
                {step === 1 && (
                    <SecondStep info={info} setInfo={setInfo} onContinue={handleContinue} onBack={handleBack} />
                )}
                {step === 2 && (
                    <ThirdStep onBack={handleBack} onContinue={handleContinue} info={info} setInfo={setInfo} />
                )}
                <img src="/trivia4.png" alt="Trivia-4" className="h-[360px] rounded-lg" />
            </div>
        </div>
    );
};

export default GetStarted;
