import { Button } from '@nextui-org/react';
import { TbCheck } from 'react-icons/tb';
import { AnimationControls, motion } from 'framer-motion';
import { useMemo } from 'react';
import { fadeInPropsFn } from 'src/utils/animation';

type FadeInProps = {
    ctrls: AnimationControls;
    title: string;
    description: string;
    pricing: number;
    isPrimary: boolean;
    features: string[];
};

const PricingCard = ({ ctrls, title, description, pricing, isPrimary, features }: FadeInProps) => {
    const getFadeInProps = useMemo(() => {
        return fadeInPropsFn(ctrls);
    }, [ctrls]);

    return (
        <div className="max-w-[430px] h-[410px] w-full">
            <motion.div {...getFadeInProps(0.3)}>
                <p className="font-bold text-black text-lg">{title}</p>
                <p className="text-text">{description}</p>
            </motion.div>
            <motion.p {...getFadeInProps(0.6)} className="text-5xl font-bold text-black font-serif mt-4">
                ${pricing}
                <span className="font-serif text-xl font-normal ml-1 text-text">/mo</span>
            </motion.p>
            <motion.div {...getFadeInProps(0.9)}>
                <Button className="mt-4" variant="shadow" size="lg" color={isPrimary ? 'primary' : 'default'}>
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
                className="flex items-center overflow-hidden mb-4"
            >
                <img src="/dash-line.svg" className="self-start mt-8 w-fit h-4" alt="dash-line" />
                <img src="/dash-line.svg" className="-ml-1 self-start mt-8 w-fit h-4" alt="dash-line" />
                <img src="/dash-line.svg" className="-ml-1 self-start mt-8 w-fit h-4" alt="dash-line" />
                <img src="/dash-line.svg" className="-ml-1 self-start mt-8 w-fit h-4" alt="dash-line" />
            </motion.div>
            {features.map((feature, i) => (
                <motion.div key={i} {...getFadeInProps(1.5)} className="flex mt-2 gap-2 items-center text-text">
                    <TbCheck className="text-xl" />
                    {feature}
                </motion.div>
            ))}
        </div>
    );
};

export default PricingCard;
