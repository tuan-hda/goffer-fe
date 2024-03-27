import { useState } from 'react';
import { ImageEdit } from '../common';
import { Button } from '../ui/button';
import { TbChevronLeft, TbSparkles } from 'react-icons/tb';

type SecondStepProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const SecondStep = ({ setStep }: SecondStepProps) => {
    const [image, setImage] = useState<string>();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStep(3);
    };

    return (
        <form className="m-auto w-80 text-center" onSubmit={handleSubmit}>
            <p className="mt-3 text-sm text-text/50">Step 2/4</p>
            <p className="mt-2">You will need a logo</p>
            <ImageEdit
                setImage={setImage}
                image={image}
                loading={loading}
                setLoading={setLoading}
                uploadClassName="mt-3 w-full"
                className="mb-4 mt-5"
            />
            <div className="mt-5 flex items-center gap-2">
                <Button
                    type="button"
                    onClick={() => setStep(1)}
                    size="lg"
                    variant="outline"
                    className="flex-1 gap-1 rounded-xl"
                >
                    <TbChevronLeft className="text-lg" />
                    Back
                </Button>
                <Button type="submit" size="lg" className="flex-1 rounded-xl">
                    Continue <TbSparkles className="ml-1 text-lg" />
                </Button>
            </div>
        </form>
    );
};

export default SecondStep;
