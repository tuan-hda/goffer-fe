import { useAnimation, motion } from 'framer-motion';
import { ReactElement, useEffect, useMemo } from 'react';
import { fadeInPropsFn, zoomInPropsFn } from '../utils/animation';

const SPEED_FACTOR = 1;

type WhoAreWeProps = {
    title: string;
    left: {
        animType: 'fadeIn' | 'zoomIn';
        el: ReactElement;
    }[];
    right: string;
    rightAlt: string;
};

const LandingTwoColumn = ({ left, right, title, rightAlt }: WhoAreWeProps) => {
    const ctrls = useAnimation();

    useEffect(() => {
        ctrls.start('visible');
    }, [ctrls]);

    const getFadeInProps = useMemo(() => {
        return fadeInPropsFn(ctrls);
    }, [ctrls]);

    const getZoomInProps = useMemo(() => {
        return zoomInPropsFn(ctrls);
    }, [ctrls]);

    const getAnimationProps = (animType: 'fadeIn' | 'zoomIn', i: number) => {
        if (animType === 'fadeIn') return getFadeInProps(i * SPEED_FACTOR + 0.5);
        else return getZoomInProps(i * SPEED_FACTOR + 0.5);
    };

    return (
        <div className="h-[86vh] flex relative z-[4] mix-blend-difference text-white text-xl">
            <div className="mx-auto p-8 max-w-6xl flex gap-8 xl:gap-16">
                <div className="flex flex-col max-w-[400px] m-auto flex-1 h-full max-h-[610px] overflow-y-auto scroll-hidden xl:max-w-lg flex-shrink-0">
                    <motion.h1 {...getFadeInProps()} className="text-2xl font-bold mb-6 font-serif">
                        {title}
                    </motion.h1>

                    {left.map((l, i) => (
                        <motion.div {...getAnimationProps(l.animType, i)} key={i}>
                            {l.el}
                        </motion.div>
                    ))}

                    <div className="flex-1 min-h-0" />

                    <motion.div
                        {...getFadeInProps(left.length * SPEED_FACTOR + 1)}
                        className="flex items-center gap-2 font-light text-sm text-black/40 mt-6 invert"
                    >
                        Press <img src="/space-button.svg" alt="space-bar" className="w-16 opacity-50" /> or use arrow
                        keys
                    </motion.div>
                </div>

                <motion.img
                    src={right}
                    alt={rightAlt}
                    className="flex-1 m-auto h-full min-w-0 object-cover rounded-lg max-h-[610px] invert"
                    {...getZoomInProps()}
                />
            </div>
        </div>
    );
};

export default LandingTwoColumn;
