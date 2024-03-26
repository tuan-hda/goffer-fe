import { useState } from 'react';
import { TbChevronLeft } from 'react-icons/tb';
import { FirstStep, SecondStep } from 'src/components/newOrg';
import { Button } from 'src/components/ui/button';
import { Progress } from 'src/components/ui/progress';

const NewOrganization = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="relative">
            <img src="/diamond.png" alt="bloom" className="absolute left-[12vw] top-[4vh] w-[35vw] opacity-50" />
            <img
                src="/flower.png"
                alt="bloom"
                className="absolute bottom-[16vh] left-[65vw] w-[35vw] -translate-x-1/2 opacity-50"
            />
            <div className="relative flex h-screen w-full bg-pale/50  text-base backdrop-blur-xl">
                <Button variant="ghost" className="absolute left-4 top-4 gap-2">
                    <TbChevronLeft className="text-xl" /> Go back
                </Button>

                <div className="m-auto w-80">
                    <Progress className="mb-6 h-[6px]" value={(step / 4) * 100} />
                    <h1 className="text-center font-serif text-3xl font-medium">New organization</h1>
                    {step === 1 && <FirstStep setStep={setStep} />}
                    {step === 2 && <SecondStep setStep={setStep} />}
                </div>
            </div>
        </div>
    );
};

export default NewOrganization;
