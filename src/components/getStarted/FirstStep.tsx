import { Button, Input } from '@nextui-org/react';
import { StartedInfo } from 'src/types/start.type';

type FirstStepProps = {
    onContinue: () => void;
    info: StartedInfo;
    setInfo: React.Dispatch<React.SetStateAction<StartedInfo>>;
};

const FirstStep = ({ onContinue, info, setInfo }: FirstStepProps) => {
    const name = info.name;
    const setName = (name: string) => {
        setInfo((prev) => ({ ...prev, name }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name) {
            onContinue();
        }
    };

    return (
        <div>
            <p className="text-sm font-light text-black/40">Step 1/5</p>
            <h1 className="mt-4 font-serif text-4xl">What&apos;s your name?</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    className="mt-6"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name here"
                    classNames={{
                        inputWrapper: 'h-10',
                    }}
                />
                <Button isDisabled={!name} size="md" type="submit" color="primary" className="mt-6">
                    Continue
                </Button>
            </form>
        </div>
    );
};

export default FirstStep;
