import { Button } from '../ui/button';
import { TbChevronDown, TbChevronLeft, TbGlobe, TbShield, TbSparkles } from 'react-icons/tb';
import { Input } from '../ui/input';
import { useState } from 'react';
import classNames from 'classnames';
import { Textarea } from '../ui/textarea';

type FourthStepProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
};

const FourthStep = ({ setStep }: FourthStepProps) => {
    const [expand, setExpand] = useState(false);
    const [visibility, setVisibility] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStep(4);
    };

    return (
        <form className="m-auto flex w-80 flex-col text-center" onSubmit={handleSubmit}>
            <p className="mt-3 text-sm text-text/50">Step 4/4</p>
            <p className="mt-2">Just a little bit information</p>

            <div className="mb-4 mt-6 text-sm">
                <label htmlFor="email" className="block w-full text-left font-semibold">
                    Corporate email
                </label>
                <Input id="email" placeholder="name@email.com" className="mt-1 h-10 rounded-xl" />

                <label htmlFor="website" className="mt-4 block w-full text-left font-semibold">
                    Website
                </label>
                <Input id="website" placeholder="https://domain.com" className="mt-1 h-10 rounded-xl" />

                <p className="mt-4 block w-full text-left font-semibold">Visibility</p>
                <div className="mt-1 flex items-center gap-3">
                    <Button
                        onClick={() => setVisibility('public')}
                        variant="outline"
                        className={classNames(
                            'h-40 flex-1 flex-col gap-2 whitespace-normal rounded-xl p-6',
                            visibility === 'public'
                                ? 'border-primary bg-orange-500/30 hover:bg-orange-500/30'
                                : 'bg-white/30',
                        )}
                    >
                        <span>Public</span>
                        <TbGlobe className="text-xl" />
                        <p className="text-text/60">Everyone can find company</p>
                    </Button>
                    <Button
                        onClick={() => setVisibility('private')}
                        variant="outline"
                        className={classNames(
                            'h-40 flex-1 flex-col gap-2 whitespace-normal rounded-xl p-6',
                            visibility === 'private'
                                ? 'border-primary bg-orange-500/30 hover:bg-orange-500/30'
                                : 'bg-white/30',
                        )}
                    >
                        <span>Private</span>
                        <TbShield className="text-xl" />
                        <p className="text-text/60">Only those who you invited can</p>
                    </Button>
                </div>

                <button onClick={() => setExpand((prev) => !prev)} className="mt-4 flex gap-2 font-semibold">
                    <TbChevronDown className={classNames('text-lg transition', expand && 'rotate-90')} />
                    Optional
                </button>

                {expand && (
                    <>
                        <label htmlFor="description" className="mt-2 block w-full text-left font-semibold">
                            Description
                        </label>
                        <Textarea
                            id="description"
                            placeholder="Brief your description about company here"
                            className="mt-1 h-10 rounded-xl"
                        />
                    </>
                )}
            </div>

            <div className="mx-auto mt-5 flex w-80 items-center gap-2">
                <Button
                    type="button"
                    onClick={() => setStep(3)}
                    size="lg"
                    variant="outline"
                    className="flex-1 gap-1 rounded-xl"
                >
                    <TbChevronLeft className="text-lg" />
                    Back
                </Button>
                <Button type="submit" size="lg" className="flex-1 rounded-xl">
                    Pay & Finish <TbSparkles className="ml-1 text-lg" />
                </Button>
            </div>
        </form>
    );
};

export default FourthStep;
