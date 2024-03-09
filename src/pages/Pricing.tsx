import { useAnimation, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { fadeInPropsFn } from '../utils/animation';
import PricingCard from 'src/components/pricing/PricingCard';

const Pricing = () => {
    const [isIndividual, setIsIndividual] = useState(false);
    const ctrls = useAnimation();
    const organizationCtrls = useAnimation();
    const individualCtrls = useAnimation();

    useEffect(() => {
        organizationCtrls.start('visible');
        ctrls.start('visible');
    }, [organizationCtrls, ctrls]);

    const toggle = () => {
        ctrls.start(isIndividual ? 'neutral' : 'toggled');
        setIsIndividual(!isIndividual);
    };

    useEffect(() => {
        organizationCtrls.start('visible');
        individualCtrls.start('visible');
    }, [isIndividual, organizationCtrls, individualCtrls]);

    return (
        <div className="h-[84vh] invert flex relative z-[4] mix-blend-difference p-6 text-text gap-10">
            <div className="mx-auto mt-[6vh] h-full max-h-[72vh] flex flex-col gap-10">
                <motion.div
                    {...fadeInPropsFn(ctrls)()}
                    className="flex h-fit items-center font-bold gap-4 border-1 border-beige/70 rounded-lg p-4"
                >
                    <motion.p
                        initial="neutral"
                        variants={{
                            neutral: { color: 'rgb(0,0,0)' },
                            toggled: { color: 'rgb(150, 150, 150)' },
                        }}
                    >
                        FOR ORGANIZATION
                    </motion.p>
                    <button onClick={toggle} className="w-20 text-black h-4 bg-gray-200 rounded relative outline-0">
                        <motion.div
                            initial="neutral"
                            variants={{
                                toggled: { x: 40 },
                                neutral: { x: 0 },
                            }}
                            animate={ctrls}
                            className="bg-gray-900 h-full rounded w-10 absolute shadow-[0_0_10px_0px_rgba(0,0,0,0.3)] top-0"
                        />
                    </button>
                    <motion.p
                        initial="neutral"
                        variants={{
                            toggled: { color: 'rgb(0,0,0)' },
                            neutral: { color: 'rgb(150, 150, 150)' },
                        }}
                        animate={ctrls}
                    >
                        FOR INDIVIDUAL
                    </motion.p>
                </motion.div>

                <div className="flex-1 h-[calc(100%-98px)] scroll-hidden -mx-4 px-4 overflow-y-auto">
                    {!isIndividual ? (
                        <PricingCard
                            ctrls={organizationCtrls}
                            description="Best for speed up and scale your hiring process"
                            title="Lord"
                            features={[
                                'Post jobs, browse candidates, & hire experts',
                                'Audio and video response, with analytics',
                                'Shared company workspace & payment methods',
                                'Evaluate your candidate with ease',
                            ]}
                            isPrimary
                            pricing={20}
                        />
                    ) : (
                        <div className="flex flex-col items-start gap-6">
                            <PricingCard
                                ctrls={individualCtrls}
                                description="Best for speed up and scale your hiring process"
                                title="Lord"
                                features={[
                                    'Post jobs, browse candidates, & hire experts',
                                    'Audio and video response, with analytics',
                                    'Shared company workspace & payment methods',
                                    'Evaluate your candidate with ease',
                                ]}
                                isPrimary
                                pricing={20}
                            />
                            <PricingCard
                                ctrls={individualCtrls}
                                description="Best for speed up and scale your hiring process"
                                title="Lord"
                                features={[
                                    'Post jobs, browse candidates, & hire experts',
                                    'Audio and video response, with analytics',
                                    'Shared company workspace & payment methods',
                                    'Evaluate your candidate with ease',
                                ]}
                                isPrimary
                                pricing={20}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
