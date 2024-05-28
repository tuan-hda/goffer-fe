import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

type RevealProps = {
    children?: React.ReactNode;
    threshold?: number;
    log?: boolean;
    delay?: number;
};

const Reveal = ({ children, threshold = 0.5, log, delay = 0 }: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const ctrls = useAnimation();

    useEffect(() => {
        scrollYProgress.on('change', () => {
            if (log) {
                console.log(scrollYProgress.get());
            }
            if (scrollYProgress.get() > threshold) {
                ctrls.start('visible');
            }
        });
    }, []);

    return (
        <motion.div
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
