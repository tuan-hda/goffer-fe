import { NewOrganization } from '@/types/organization.type';
import { Button } from '../ui/button';
import { TbChevronLeft } from 'react-icons/tb';
import classNames from 'classnames';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';

type ThirdStepProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    data: NewOrganization;
    setData: React.Dispatch<React.SetStateAction<NewOrganization>>;
};

const fields = [
    {
        name: 'Engineering',
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
        name: 'Translation',
        img: '/translator.png',
    },
];

const ThirdStep = ({ setStep, data, setData }: ThirdStepProps) => {
    const [other, setOther] = useState('');

    const _field = data.field;
    const setField = (field: string) => () => {
        setData((prev) => ({ ...prev, field }));
        setStep(4);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form className="m-auto flex flex-col text-center" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-4">
                <img src={data.logo} className="h-11 w-11 rounded-full object-cover" alt="logo" />
                <h1 className="text-center font-serif text-3xl font-medium">{data.name}</h1>
            </div>
            <p className="mt-3 text-sm text-text/50">Step 3/5</p>
            <p className="mt-2">You are hiring in...</p>
            <div className="mx-auto mb-5 mt-5 grid grid-cols-4 justify-center gap-6">
                {fields.map((field, index) => (
                    <Button
                        onClick={setField(field.name)}
                        type="button"
                        variant="outline"
                        className={classNames(
                            'relative aspect-square h-36 w-60 items-start justify-start rounded-xl p-6 text-base shadow-medium',
                            field.name === _field
                                ? 'border-primary bg-orange-300/30 hover:bg-orange-300/30'
                                : 'bg-white/20',
                        )}
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
                    className="aspect-square h-36 w-60 flex-col items-start justify-start rounded-xl bg-white/20 p-6 text-base shadow-medium"
                >
                    Other
                    <Textarea
                        placeholder="Your organization field"
                        value={other}
                        onChange={(e) => setOther(e.target.value)}
                        className="mt-2 bg-white/50"
                    />
                </Button>
            </div>

            <div className="mx-auto mt-5 flex w-80 items-center gap-2">
                <Button
                    type="button"
                    onClick={() => setStep(2)}
                    size="lg"
                    variant="outline"
                    className="flex-1 gap-1 rounded-xl"
                >
                    <TbChevronLeft className="text-lg" />
                    Back
                </Button>
                <Button
                    type="button"
                    onClick={() => setStep(2)}
                    size="lg"
                    disabled={!other}
                    className="flex-1 gap-1 rounded-xl"
                >
                    <TbChevronLeft className="rotate-180 text-lg" />
                    Next
                </Button>
            </div>
        </form>
    );
};

export default ThirdStep;
