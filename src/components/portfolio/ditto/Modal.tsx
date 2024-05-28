import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

type ModalProps = {
    modal: boolean;
};

const scaleAnimation = {
    initial: { scale: 0, x: '-50%', y: '-50%' },
    enter: { scale: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
};

const Modal = ({ modal }: ModalProps) => {
    const cursor = useRef<HTMLDivElement>(null);

    useEffect(() => {
        //Move cursor
        let xMoveCursor = gsap.quickTo(cursor.current, 'left', { duration: 0.5, ease: 'power3' });
        let yMoveCursor = gsap.quickTo(cursor.current, 'top', { duration: 0.5, ease: 'power3' });

        window.addEventListener('mousemove', (e) => {
            const { pageX, pageY } = e;
            xMoveCursor(pageX);
            yMoveCursor(pageY);
        });
    }, []);

    return (
        <div className="pointer-events-none">
            <motion.div
                ref={cursor}
                className="cursor pointer-events-none absolute z-[2] flex h-[28vh] w-[28vh] items-center justify-center rounded-full text-sm font-light mix-blend-difference"
                variants={scaleAnimation}
                initial="initial"
                animate={modal ? 'enter' : 'closed'}
            >
                <img src="/assets/sparkle.png" className="h-full w-full invert" />
            </motion.div>
        </div>
    );
};

export default Modal;
