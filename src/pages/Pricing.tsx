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
        <div className="scroll-hidden relative z-[4] flex h-[84vh] gap-10 overflow-y-auto px-6 pt-6 text-text mix-blend-difference invert">
            <div className="m-auto flex flex-col gap-10">
                <motion.div
                    {...fadeInPropsFn(ctrls)()}
                    className="mx-auto flex h-fit w-fit min-w-[450px] items-center gap-4 rounded-lg border-1 border-black/10 p-4 font-bold"
                >
                    <motion.p
                        initial="neutral"
                        className="ml-auto"
                        variants={{
                            neutral: { color: 'rgb(0,0,0)' },
                            toggled: { color: 'rgb(150, 150, 150)' },
                        }}
                    >
                        FOR ORGANIZATION
                    </motion.p>
                    <button onClick={toggle} className="relative h-4 w-20 rounded bg-gray-200 text-black outline-0">
                        <motion.div
                            initial="neutral"
                            variants={{
                                toggled: { x: 40 },
                                neutral: { x: 0 },
                            }}
                            animate={ctrls}
                            className="absolute top-0 h-full w-10 rounded bg-gray-900 shadow-[0_0_10px_0px_rgba(0,0,0,0.3)]"
                        />
                    </button>
                    <motion.p
                        className="mr-auto"
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

                <div className="-mx-4 flex flex-1 flex-col px-4">
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
                        <div className="m-auto flex h-fit flex-col items-start gap-6 lg:flex-row">
                            <PricingCard
                                ctrls={individualCtrls}
                                description="Quickly start"
                                title="Fragment"
                                features={[
                                    'Create your profile',
                                    'Find jobs matching your skills',
                                    'Expand your network',
                                ]}
                                pricing={'Free'}
                            />
                            <PricingCard
                                ctrls={individualCtrls}
                                description="Best for boosting your career"
                                title="Star"
                                features={[
                                    'All Fragment features',
                                    'Get priority support',
                                    'Create your portfolio from our templates',
                                    'Improve your profile with AI',
                                ]}
                                isPrimary
                                pricing={10}
                            />
                        </div>
                    )}
                    <motion.div
                        {...fadeInPropsFn(ctrls)(2)}
                        className="mx-auto mt-8 flex items-center gap-2 text-sm font-light text-black/40"
                    >
                        Press <img src="/space-button.svg" alt="space-bar" className="w-16 opacity-50" /> or use arrow
                        keys
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
