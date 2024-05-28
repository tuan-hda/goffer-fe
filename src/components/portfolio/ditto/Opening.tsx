import { useEffect, useState } from 'react';
import GetInTouch from '../GetInTouch';
import { motion, useAnimation } from 'framer-motion';

const transitions = {
    outro: { duration: 0.9, ease: [0.999, 0.1, 1, 1] },
    intro: { duration: 0.9, delay: 0.65, ease: [0, 0, 0.001, 1] },
};

const variants = {
    words: {
        outro: {
            initial: { top: 0, rotate: 0, left: '12vh' },
            animate: {
                top: '-17vh',
                left: '20vh',
                rotate: -10,
                transition: { duration: 0.9, ease: [0.999, 0.1, 1, 1] },
            },
        },
        intro: {
            animate: {
                top: 0,
                left: '12vh',
                rotate: 0,
                transition: { duration: 0.9, delay: 0.65, ease: [0, 0, 0.001, 1] },
            },
            initial: { top: '16vh', left: '8vh', rotate: 10 },
        },
    },
    asset: {
        outro: {
            initial: { scale: 1, top: '1vh', rotate: 0, left: '2vh' },
            animate: {
                scale: 0,
                rotate: 180,
                top: '-3vh',
                left: '11vh',
                transition: transitions.outro,
            },
        },
        intro: {
            initial: {
                scale: 0,
                rotate: 180,
                top: '1vh',
                left: '0vh',
            },
            animate: { scale: 1, rotate: 0, top: '1vh', left: '2vh', transition: transitions.intro },
        },
    },
};

const baseWords = ['a brand strategist', 'a wonderful strategist', 'a ui/ux magician'];
const baseAssets = ['✰︎', '✹︎', '✎︎'];

const Opening = () => {
    const [indexes, setIndexes] = useState([0, 1]);
    const ctrls = useAnimation();

    useEffect(() => {
        ctrls.set('initial');
        ctrls.start('animate');
    }, [indexes]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexes((prev) => {
                return [prev[1], (prev[1] + 1) % baseWords.length];
            });
        }, 2800);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="mx-auto mt-[16vh] w-[72vw]">
            <p className="text-[2.2vh]">WE DESIGN BRANDS THAT BRING JOY TO THE WORLD.</p>
            <h1 className="mt-[2vh] flex font-serif text-[10vh] font-medium leading-[100%] tracking-tight">
                <span className="inline-block h-[11.5vh] flex-shrink-0 overflow-hidden whitespace-nowrap">
                    Studio is
                </span>
                <div className="relative inline-block h-[11.5vh] w-full min-w-0 overflow-hidden underline">
                    <motion.span variants={variants.asset.outro} className="absolute" initial="initial" animate={ctrls}>
                        {baseAssets[indexes[0]]}
                    </motion.span>
                    <motion.span variants={variants.asset.intro} className="absolute" initial="initial" animate={ctrls}>
                        {baseAssets[indexes[1]]}
                    </motion.span>

                    <motion.span
                        variants={variants.words.outro}
                        className="absolute whitespace-nowrap underline"
                        initial="initial"
                        animate={ctrls}
                    >
                        {baseWords[indexes[0]]}
                    </motion.span>
                    <motion.span
                        variants={variants.words.intro}
                        className="absolute whitespace-nowrap underline"
                        initial="initial"
                        animate={ctrls}
                    >
                        {baseWords[indexes[1]]}
                    </motion.span>
                </div>
            </h1>
            <p className="ml-[12vh] font-serif text-[10vh] font-medium leading-[100%] tracking-tight">
                ➺ based in Barcelona, Spain.
            </p>
            <GetInTouch className="ml-[28vh] mt-[4vh]" />
        </div>
    );
};

export default Opening;
