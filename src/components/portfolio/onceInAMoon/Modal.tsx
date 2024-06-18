import { motion } from 'framer-motion';
import { ProjectCreate } from '@/types/project.type';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const scaleAnimation = {
    initial: { scale: 0, x: '-50%', y: '-50%' },
    enter: { scale: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
};

type ModalProps = {
    modal: { active: boolean; index: number };
    projects: ProjectCreate[];
};

export default function Modal({ modal, projects }: ModalProps) {
    const { active, index } = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    useEffect(() => {
        //Move Container
        const xMoveContainer = gsap.quickTo(modalContainer.current, 'left', { duration: 0.8, ease: 'power3' });
        const yMoveContainer = gsap.quickTo(modalContainer.current, 'top', { duration: 0.8, ease: 'power3' });

        //Move cursor
        const xMoveCursor = gsap.quickTo(cursor.current, 'left', { duration: 0.5, ease: 'power3' });
        const yMoveCursor = gsap.quickTo(cursor.current, 'top', { duration: 0.5, ease: 'power3' });

        //Move cursor label
        const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', { duration: 0.45, ease: 'power3' });
        const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', { duration: 0.45, ease: 'power3' });

        window.addEventListener('mousemove', (e) => {
            const { pageX, pageY } = e;
            xMoveContainer(pageX);
            yMoveContainer(pageY);
            xMoveCursor(pageX);
            yMoveCursor(pageY);
            xMoveCursorLabel(pageX);
            yMoveCursorLabel(pageY);
        });
    }, []);

    return (
        <>
            <motion.div
                ref={modalContainer}
                variants={scaleAnimation}
                initial="initial"
                animate={active ? 'enter' : 'closed'}
                className="pointer-events-none absolute flex aspect-[4/3] h-[30vh] items-center justify-center overflow-hidden bg-white"
            >
                <div
                    style={{ top: index * -100 + '%' }}
                    className="ease-[cubic-bezier(0.76, 0, 0.24, 1)] absolute h-full w-full transition-[top] duration-500"
                >
                    {projects.map((project, index) => {
                        const { cover } = project;
                        const color = '#000';
                        return (
                            <div
                                className="modal flex h-full w-full items-center justify-center"
                                style={{ backgroundColor: color }}
                                key={`modal_${index}`}
                            >
                                <img
                                    src={`${cover}`}
                                    width={300}
                                    height={0}
                                    className="h-full w-full object-cover"
                                    alt="image"
                                />
                            </div>
                        );
                    })}
                </div>
            </motion.div>
            <motion.div
                ref={cursor}
                className="cursor pointer-events-none absolute z-[2] flex h-[9vh] w-[9vh] items-center justify-center rounded-full bg-white/30 text-sm font-light text-white"
                variants={scaleAnimation}
                initial="initial"
                animate={active ? 'enter' : 'closed'}
            ></motion.div>
            <motion.div
                ref={cursorLabel}
                className="pointer-events-none absolute z-[2] flex h-[9vh] w-[9vh] items-center justify-center rounded-full bg-white/60 text-sm font-light text-black backdrop-blur-sm"
                variants={scaleAnimation}
                initial="initial"
                animate={active ? 'enter' : 'closed'}
            >
                View
            </motion.div>
        </>
    );
}
