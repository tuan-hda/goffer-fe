import { useState } from 'react';
import { TbChevronLeft } from 'react-icons/tb';
import { FirstStep, FourthStep, SecondStep, ThirdStep } from 'src/components/newOrg';
import { Progress } from 'src/components/ui/progress';

const NewOrganization = () => {
    const [step, setStep] = useState(1);

    return (
        <div>
            <img src="/diamond.png" alt="bloom" className="fixed left-[16vw] top-[4vh] w-[35vw] opacity-50" />
            <img
                src="/flower.png"
                alt="bloom"
                className="fixed bottom-[16vh] left-[65vw] w-[35vw] -translate-x-1/2 opacity-50"
            />
            <button className="group fixed left-4 top-4 z-[1] flex gap-2 text-sm">
                <TbChevronLeft className="text-xl" /> Go back
                <div className="absolute -bottom-1 ml-1 w-full border-t opacity-0 transition group-hover:opacity-100" />
            </button>
            <div className="scroll-hidden relative flex h-screen w-full overflow-y-auto bg-pale/30 py-6 text-base backdrop-blur-xl">
                <div className="m-auto min-w-80">
                    <Progress color="primary" className="mx-auto mb-6 h-[6px] w-80" value={(step / 4) * 100} />
                    <h1 className="text-center font-serif text-3xl font-medium">New organization</h1>
                    {step === 1 && <FirstStep setStep={setStep} />}
                    {step === 2 && <SecondStep setStep={setStep} />}
                    {step === 3 && <ThirdStep setStep={setStep} />}
                    {step === 4 && <FourthStep setStep={setStep} />}
                </div>
            </div>
        </div>
    );
};

export default NewOrganization;
