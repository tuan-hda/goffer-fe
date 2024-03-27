import { Button } from '../ui/button';
import { TbChevronLeft, TbLockOff, TbLockOpen, TbSparkles } from 'react-icons/tb';
import { Input } from '../ui/input';
import classNames from 'classnames';
import { Textarea } from '../ui/textarea';
import { NewOrganization } from 'src/types/organization.type';

type FourthStepProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    data: NewOrganization;
    setData: React.Dispatch<React.SetStateAction<NewOrganization>>;
    handleSubmit: (_: React.FormEvent<HTMLFormElement>) => void;
};

const FourthStep = ({ setStep, data, setData, handleSubmit }: FourthStepProps) => {
    const handleChange =
        (key: string) => (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
            setData((prev) => ({ ...prev, [key]: e.target.value }));
        };

    const setVisibility = (visibility: string) => () => {
        setData((prev) => ({ ...prev, visibility }) as NewOrganization);
    };

    const disabled = !data.email || !data.website || !data.visibility;

    return (
        <form className="m-auto flex w-80 flex-col text-center" onSubmit={handleSubmit}>
            <p className="mt-3 text-sm text-text/50">Step 4/4</p>
            <p className="mt-2">Just a little bit information</p>

            <div className="mb-4 mt-6 text-sm">
                <label htmlFor="email" className="block w-full text-left font-semibold">
                    Corporate email
                </label>
                <Input
                    value={data.email}
                    onChange={handleChange('email')}
                    id="email"
                    placeholder="name@email.com"
                    className="mt-1 h-10 rounded-xl"
                />

                <label htmlFor="website" className="mt-4 block w-full text-left font-semibold">
                    Website
                </label>
                <Input
                    value={data.website}
                    onChange={handleChange('website')}
                    id="website"
                    placeholder="https://domain.com"
                    className="mt-1 h-10 rounded-xl"
                />

                <p className="mt-4 block w-full text-left font-semibold">Visibility</p>
                <div className="mt-1 flex items-center gap-3">
                    <Button
                        onClick={setVisibility('public')}
                        variant="outline"
                        className={classNames(
                            'h-40 flex-1 flex-col gap-2 whitespace-normal rounded-xl p-6',
                            data.visibility === 'public'
                                ? 'border-primary bg-orange-300/30 hover:bg-orange-300/30'
                                : 'bg-white/30',
                        )}
                    >
                        <span>Public</span>
                        <TbLockOpen className="text-xl" />
                        <p className="text-text/60">Everyone can find company</p>
                    </Button>
                    <Button
                        onClick={setVisibility('private')}
                        variant="outline"
                        className={classNames(
                            'h-40 flex-1 flex-col gap-2 whitespace-normal rounded-xl p-6',
                            data.visibility === 'private'
                                ? 'border-primary bg-orange-300/30 hover:bg-orange-300/30'
                                : 'bg-white/30',
                        )}
                    >
                        <span>Private</span>
                        <TbLockOff className="text-xl" />
                        <p className="text-text/60">Only those who you invited can</p>
                    </Button>
                </div>

                <label htmlFor="description" className="mt-4 block w-full text-left font-semibold">
                    Description
                </label>
                <Textarea
                    value={data.description}
                    onChange={handleChange('description')}
                    id="description"
                    placeholder="Brief your description about company here"
                    className="scroll-hidden mt-1 h-10 rounded-xl"
                />
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
                <Button disabled={disabled} type="submit" size="lg" className="flex-1 rounded-xl">
                    Pay & Finish <TbSparkles className="ml-1 text-lg" />
                </Button>
            </div>
        </form>
    );
};

export default FourthStep;
