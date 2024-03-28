import { Button } from '@nextui-org/react';
import { TbCheck, TbInfoCircle } from 'react-icons/tb';
import { AnimationControls, motion } from 'framer-motion';
import { useMemo } from 'react';
import { fadeInPropsFn } from 'src/utils/animation';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

type FadeInProps = {
    ctrls: AnimationControls;
    title: string;
    description: string;
    pricing: string | number;
    isPrimary?: boolean;
    features: string[];
    additional?: number;
};

const PricingCard = ({ ctrls, title, description, pricing, isPrimary, features, additional }: FadeInProps) => {
    const getFadeInProps = useMemo(() => {
        return fadeInPropsFn(ctrls);
    }, [ctrls]);

    return (
        <motion.div
            {...getFadeInProps(0.3)}
            className="h-[432px] w-full max-w-[450px] rounded-2xl bg-white p-6 shadow-medium lg:p-8"
        >
            <motion.div {...getFadeInProps(0.3)}>
                <p className="text-lg font-bold text-black">{title}</p>
                <p className="text-text">{description}</p>
            </motion.div>
            <motion.p
                {...getFadeInProps(0.6)}
                className="mt-4 flex items-baseline font-serif text-5xl font-bold text-black"
            >
                {pricing !== 'Free' && '$'}
                {pricing}
                {pricing !== 'Free' && <span className="ml-1 font-serif text-xl font-normal text-text">/mo</span>}
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <div>
                                <TbInfoCircle className="-mb-1 ml-1 text-xl text-text" />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-black">
                            <p>Plus ${additional} per additional member</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </motion.p>
            <motion.div {...getFadeInProps(0.9)}>
                <Button
                    className={classNames('mt-4', !isPrimary && 'border-1 border-gray-500')}
                    variant={isPrimary ? 'shadow' : 'ghost'}
                    size="lg"
                    as={Link}
                    to="/sign-up"
                    color={isPrimary ? 'primary' : 'default'}
                >
                    Get Started
                </Button>
            </motion.div>
            <motion.div
                {...getFadeInProps(1.2)}
                variants={{
                    hidden: getFadeInProps(1.2).variants.hidden,
                    visible: {
                        ...getFadeInProps(1.2).variants.visible,
                        opacity: 0.4,
                    },
                }}
                className="mb-4 flex items-center overflow-hidden"
            >
                <img src="/dash-line.svg" className="mt-8 h-4 w-fit self-start" alt="dash-line" />
                <img src="/dash-line.svg" className="-ml-1 mt-8 h-4 w-fit self-start" alt="dash-line" />
                <img src="/dash-line.svg" className="-ml-1 mt-8 h-4 w-fit self-start" alt="dash-line" />
                <img src="/dash-line.svg" className="-ml-1 mt-8 h-4 w-fit self-start" alt="dash-line" />
            </motion.div>
            {features.map((feature, i) => (
                <motion.div key={i} {...getFadeInProps(1.5)} className="mt-2 flex w-full items-center gap-2 text-text">
                    <TbCheck className="text-xl" />
                    {feature}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default PricingCard;
