import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type RevealProps = {
    children?: React.ReactNode;
    threshold?: number;
    log?: boolean;
    delay?: number;
};

const Reveal = ({ children, delay = 0 }: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);
    const ctrls = useAnimation();

    useEffect(() => {
        if (isInView) {
            ctrls.start('visible');
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: {
                    opacity: 0,
                    y: 75,
                    x: -20,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    transition: {
                        duration: 0.5,
                        delay: delay,
                    },
                },
            }}
            initial="hidden"
            animate={ctrls}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
