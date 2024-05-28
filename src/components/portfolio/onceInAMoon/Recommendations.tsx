import { recommendations } from '@/data/mock/recommendations';
import { Avatar } from '@nextui-org/react';
import { useState } from 'react';
import { TbArrowLeft } from 'react-icons/tb';
import { motion, useAnimation } from 'framer-motion';

const Recommendations = () => {
    const [curr, setCurr] = useState(0);
    const ctrls = useAnimation();

    const animate = async (value: 0 | 1) => {
        await ctrls.start(
            { opacity: 0, x: (2 * value - 1) * 5 },
            {
                duration: 0.15,
            },
        );
        ctrls.start(
            { opacity: 1, x: 0 },
            {
                duration: 0.15,
            },
        );
    };

    const moveLeft = () => {
        animate(0);
        setCurr((prev) => (prev - 1 + recommendations.length) % recommendations.length);
    };
    const moveRight = () => {
        animate(1);
        setCurr((prev) => (prev + 1) % recommendations.length);
    };

    return (
        <div id="recommendations" className="mx-auto w-full max-w-[64vw]">
            <p className="mb-[10vh] mt-[calc(55vh-200px)] text-center uppercase">RECOMMENDATIONS</p>
            <div className="flex items-start justify-between gap-[5vh]">
                <button className="group mt-[3vh]" onClick={moveLeft}>
                    <TbArrowLeft className="portfolio-secondary text-[5vh] transition group-hover:opacity-80" />
                </button>
                <motion.div animate={ctrls} className="font-mono">
                    <p className="text-center text-[6.5vh] leading-[140%]">"{recommendations[curr].content}"</p>
                    <div className="mt-[4vh] flex items-center justify-center gap-[3vh]">
                        <Avatar src={recommendations[curr].avatar} className="h-[8vh] w-[8vh]" />
                        <p className="text-[3vh]">
                            <span className="font-medium">{recommendations[curr].name}</span>,{' '}
                            <span className="text-gray-500">{recommendations[curr].company}</span>
                        </p>
                    </div>
                </motion.div>
                <button className="group mt-[3vh]" onClick={moveRight}>
                    <TbArrowLeft className="portfolio-secondary rotate-180 text-[5vh] transition group-hover:opacity-80" />
                </button>
            </div>
        </div>
    );
};

export default Recommendations;