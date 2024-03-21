import { Button, Input } from '@nextui-org/react';

type FirstStepProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const FirstStep = ({ setStep }: FirstStepProps) => {
    return (
        <div>
            <p className="text-sm font-light text-black/40">Step 1/5</p>
            <h1 className="mt-4 font-serif text-4xl">What&apos;s your name?</h1>
            <Input
                className="mt-6"
                placeholder="Your name here"
                classNames={{
                    inputWrapper: 'h-10',
                }}
            />
            <Button size="md" onClick={() => setStep(1)} color="primary" className="mt-6">
                Continue
            </Button>
        </div>
    );
};

export default FirstStep;
