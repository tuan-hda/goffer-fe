import { motion } from 'framer-motion';
import { Project } from '@/types/project.type';
import { Image } from '@nextui-org/react';

const scaleAnimation = {
    initial: { scale: 0, x: '-50%', y: '-50%' },
    enter: { scale: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
};

type ModalProps = {
    modal: { active: boolean; index: number };
    projects: Project[];
};

export default function Modal({ modal, projects }: ModalProps) {
    const { active, index } = modal;

    return (
        <>
            <motion.div
                variants={scaleAnimation}
                initial="initial"
                animate={active ? 'enter' : 'closed'}
                className="pointer-events-none absolute flex h-[350px] w-[400px] items-center justify-center overflow-hidden bg-white"
            >
                <div
                    style={{ top: index * -100 + '%' }}
                    className="modalSlider ease-[cubic-bezier(0.76, 0, 0.24, 1)] absolute h-full w-full transition-[top] duration-500"
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
                                <Image src={`${cover}`} width={300} height={0} alt="image" />
                            </div>
                        );
                    })}
                </div>
            </motion.div>
            <motion.div
                className="cursor pointer-events-none absolute z-[2] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#455CE9] text-sm font-light text-white"
                variants={scaleAnimation}
                initial="initial"
                animate={active ? 'enter' : 'closed'}
            ></motion.div>
            <motion.div
                className="cursorLabel pointer-events-none absolute z-[2] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-transparent text-sm font-light text-white"
                variants={scaleAnimation}
                initial="initial"
                animate={active ? 'enter' : 'closed'}
            >
                View
            </motion.div>
        </>
    );
}
