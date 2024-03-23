import { useState } from 'react';
import { FirstStep, SecondStep, ThirdStep } from 'src/components/getStarted';
import FourthStep from 'src/components/getStarted/FourthStep';
import { StartedInfo } from 'src/types/start.type';

const GetStarted = () => {
    const [step, setStep] = useState(3);
    const [info, setInfo] = useState<StartedInfo>({});

    const handleContinue = () => {
        setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
    };

    return (
        <div className="flex h-screen w-screen">
            <div className="m-auto w-[820px]">
                <div className=" flex items-center justify-between gap-10 rounded-2xl bg-white p-12 shadow-large">
                    {step === 0 && <FirstStep info={info} setInfo={setInfo} onContinue={handleContinue} />}
                    {step === 1 && (
                        <SecondStep info={info} setInfo={setInfo} onContinue={handleContinue} onBack={handleBack} />
                    )}
                    {step === 2 && (
                        <ThirdStep onBack={handleBack} onContinue={handleContinue} info={info} setInfo={setInfo} />
                    )}
                    {step === 3 && (
                        <FourthStep onBack={handleBack} onContinue={handleContinue} info={info} setInfo={setInfo} />
                    )}
                    <img src="/trivia4.png" alt="Trivia-4" className="h-[360px] rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
