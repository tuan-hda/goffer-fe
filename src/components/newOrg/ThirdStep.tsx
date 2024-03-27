import { Button } from '../ui/button';
import { TbChevronLeft, TbSparkles } from 'react-icons/tb';

type ThirdStepProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const fields = [
    {
        name: 'Computer Science',
        img: '/macbook.png',
    },
    {
        name: 'Education',
        img: '/education.png',
    },
    {
        name: 'Designing',
        img: '/design.png',
    },
    {
        name: 'Copywriting',
        img: '/copywriting.png',
    },
    {
        name: 'Social Media',
        img: '/socialmedia.png',
    },
    {
        name: 'Entertainment',
        img: '/entertainment.png',
    },
    {
        name: 'Entertainment',
        img: '/translator.png',
    },
];

const ThirdStep = ({ setStep }: ThirdStepProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStep(4);
    };

    return (
        <form className="m-auto flex flex-col text-center" onSubmit={handleSubmit}>
            <p className="mt-3 text-sm text-text/50">Step 3/4</p>
            <p className="mt-2">You are hiring in...</p>
            <div className="mx-auto mb-5 mt-5 grid grid-cols-4 justify-center gap-6">
                {fields.map((field, index) => (
                    <Button
                        type="button"
                        variant="outline"
                        className="relative aspect-square h-36 w-60 items-start justify-start rounded-xl bg-white/20 p-6 text-base shadow-medium"
                        key={index}
                    >
                        {field.name}
                        <img
                            src={field.img}
                            alt="illustration"
                            className="absolute bottom-2 right-4 h-20 w-20 object-contain"
                        />
                    </Button>
                ))}
                <Button
                    type="button"
                    variant="outline"
                    className="aspect-square h-36 w-60 items-start justify-start rounded-xl bg-white/20 p-6 text-base shadow-medium"
                >
                    Other
                </Button>
            </div>

            <div className="mx-auto mt-5 flex w-80 items-center gap-2">
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

export default ThirdStep;
