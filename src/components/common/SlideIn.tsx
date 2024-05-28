import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type SlideIn = {
    children?: React.ReactNode;
    threshold?: number;
    log?: boolean;
    delay?: number;
};

const SlideIn = ({ children, delay = 0 }: SlideIn) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);
    const ctrls = useAnimation();

    useEffect(() => {
        if (isInView) {
            ctrls.start('visible');
        }
    }, [isInView]);

    return (
        <div className="overflow-hidden rounded-[4vh]">
            <motion.div
                ref={ref}
                variants={{
                    hidden: {
                        opacity: 0,
                        x: '-100%',
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        transition: {
                            duration: 0.9,
                            delay: delay,
                            ease: [0.76, 0, 0.24, 1],
                        },
                    },
                }}
                initial="hidden"
                animate={ctrls}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default SlideIn;
