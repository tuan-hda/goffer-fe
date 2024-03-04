import { useAnimation } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { fadeInPropsFn } from '../utils/animation';
import { motion } from 'framer-motion';
const WhoAreWe = () => {
    const ctrls = useAnimation();

    useEffect(() => {
        ctrls.start('visible');
    }, [ctrls]);

    const getFadeInProps = useMemo(() => {
        return fadeInPropsFn(ctrls);
    }, [ctrls]);

    return (
        <div className="max-w-2xl h-screen flex relative z-[2] m-auto px-4 py-8 mix-blend-difference text-white text-xl">
            <div className="m-auto pb-[14%]">
                <motion.h1 {...getFadeInProps()} className="text-2xl font-bold text-center mb-6 font-serif">
                    Who Are We
                </motion.h1>

                <motion.p {...getFadeInProps(0.5)} className="mb-4 font-serif">
                    Welcome to <span className="font-bold font-serif">Goffer</span> - Your Gateway to Smarter Hiring and
                    Career Advancement.
                </motion.p>

                <motion.div {...getFadeInProps(1)} className="mb-8">
                    <h2 className="font-semibold mb-3 font-serif border-b border-gray-700">For Employers</h2>
                    <p className="mb-2 font-serif">
                        Our tools are crafted for HR professionals, enhancing the screening process with audio and video
                        responses and custom assessments to ensure the right fit for your team.
                    </p>
                </motion.div>

                <motion.div {...getFadeInProps(1.5)} className="mb-8">
                    <h2 className="font-semibold mb-3 font-serif border-b border-gray-700">For Job Seekers</h2>
                    <p className="mb-2 font-serif">
                        Goffer goes beyond job listings, offering a community for networking, career growth, and
                        showcasing your unique skills. Our assessments and AI-driven profile enhancements help you stand
                        out in the job market.
                    </p>
                </motion.div>

                <motion.p {...getFadeInProps(2)} className="font-serif">
                    Embark on a journey with Goffer and experience a new era of hiring and job search. Togethaaa, we
                    will devour the very gods.
                </motion.p>
                <motion.div
                    {...getFadeInProps(3)}
                    className="flex items-center justify-center gap-2 font-light text-sm text-white/40 mt-4"
                >
                    Press <img src="/space-button.svg" alt="space-bar" className="w-16 h-16 opacity-50 invert" /> or use
                    arrow keys
                </motion.div>
            </div>
        </div>
    );
};

export default WhoAreWe;
