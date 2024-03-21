import { Button, Input } from '@nextui-org/react';
import { TbChevronLeft } from 'react-icons/tb';

type SecondStepProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const SecondStep = ({ setStep }: SecondStepProps) => {
    return (
        <div>
            <p className="text-sm font-light text-black/40">Step 2/5</p>
            <h1 className="mt-4 font-serif text-4xl">Tell us your skills</h1>
            <Input
                className="mt-6"
                placeholder="Your name here"
                classNames={{
                    inputWrapper: 'h-10',
                }}
            />
            <div className="mt-6 flex items-center gap-3">
                <Button onClick={() => setStep(0)} isIconOnly radius="full" variant="flat">
                    <TbChevronLeft className="text-lg" />
                </Button>
                <Button onClick={() => setStep(2)} size="md" color="primary">
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default SecondStep;
