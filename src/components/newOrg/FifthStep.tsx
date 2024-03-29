import { Button } from '../ui/button';
import { TbChevronLeft, TbCircleCheckFilled, TbInfoCircle } from 'react-icons/tb';
import { NewOrganization } from 'src/types/organization.type';
import { Spinner } from '@nextui-org/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

type FourthStepProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    data: NewOrganization;
    handleSubmit: (_: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
};

const FourthStep = ({ loading, setStep, data, handleSubmit }: FourthStepProps) => {
    return (
        <form className="m-auto flex w-[640px] flex-col text-center" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-4">
                <img src={data.logo} className="h-11 w-11 rounded-full object-cover" alt="logo" />
                <h1 className="text-center font-serif text-3xl font-medium">{data.name}</h1>
            </div>
            <p className="mt-3 text-sm text-text/50">Step 5/5</p>

            <div className="-ml-8 mb-4 flex items-center justify-center gap-2">
                <img src="/ice-cube.png" className="h-80 w-80" alt="ice-cube" />
                <div className="min-w-0 text-left text-sm">
                    <div className="font-serif text-3xl font-semibold">
                        organization subscribe
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div>
                                        <TbInfoCircle className="-mb-1 ml-2 text-2xl text-text" />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-black">
                                    <p>$20/mo plus $5/mo per additional member</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>

                    <p className="mt-1">
                        You will be able to create and access your organization later after you subscribed a license.
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                        <TbCircleCheckFilled className="text-lg" /> Post jobs, browse candidates, & hire experts
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                        <TbCircleCheckFilled className="text-lg" /> Audio and video response, with analytics
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                        <TbCircleCheckFilled className="text-lg" /> Shared company workspace & payment methods
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                        <TbCircleCheckFilled className="text-lg" /> Evaluate your candidate with AI
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-2 flex w-80 items-center gap-2">
                <Button
                    disabled={loading}
                    type="button"
                    onClick={() => setStep(4)}
                    size="lg"
                    variant="outline"
                    className="flex-1 gap-1 rounded-xl"
                >
                    <TbChevronLeft className="text-lg" />
                    Back
                </Button>
                <Button disabled={loading} type="submit" size="lg" className="flex-1 rounded-xl">
                    {loading && (
                        <Spinner
                            classNames={{
                                circle1: 'border-t-black',
                                circle2: 'border-t-black',
                            }}
                            className="mr-1 scale-50"
                        />
                    )}
                    $20 /mo
                </Button>
            </div>
        </form>
    );
};

export default FourthStep;
