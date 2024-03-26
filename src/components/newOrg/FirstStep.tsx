import { TbSparkles } from 'react-icons/tb';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

type FirstStepProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const FirstStep = ({ setStep }: FirstStepProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStep(2);
    };

    return (
        <form className="text-center" onSubmit={handleSubmit}>
            <p className="mt-3 text-sm text-text/50">Step 1/4</p>
            <p className="mt-2">What&apos;s your organization called?</p>
            <Input className="mt-3 h-12 rounded-xl text-center font-serif text-2xl font-medium" />
            <Button type="submit" size="lg" className="mt-4 w-full rounded-xl">
                Continue <TbSparkles className="ml-1 text-lg" />
            </Button>
        </form>
    );
};

export default FirstStep;
