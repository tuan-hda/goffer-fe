import { useEffect, useMemo, useState } from 'react';
import GetInTouch from '../GetInTouch';
import { motion, useAnimation } from 'framer-motion';
import { PortfolioConfiguration } from '@/types/portfolio.type';
import { User } from '@/types/user.type';

const DURATION = 1.1;
const DELAY = 0.76 * DURATION;
const INTERVAL = 2800;

const wordConfig = {
    left: '12vh',
    top: '0vh',
    rotate: 0,
};
const assetsConfig = {
    scale: 1,
    top: '1vh',
    rotate: 0,
    left: '2vh',
};

const transitions = {
    outro: { duration: DURATION, ease: [0.999, 0.1, 1, 1] },
    intro: { duration: DURATION, delay: DELAY, ease: [0, 0, 0.001, 1] },
};

const variants = {
    words: {
        outro: {
            initial: {
                ...wordConfig,
            },
            animate: {
                top: '-18vh',
                left: '20vh',
                rotate: -10,
                transition: transitions.outro,
            },
        },
        intro: {
            animate: {
                ...wordConfig,
                transition: transitions.intro,
            },
            initial: { top: '16vh', left: '8vh', rotate: 10 },
        },
    },
    asset: {
        outro: {
            initial: assetsConfig,
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
            animate: { ...assetsConfig, transition: transitions.intro },
        },
    },
};

const baseAssets = ['✰︎', '✹︎', '✎︎'];

type OpeningProps = {
    portfolio: PortfolioConfiguration;
    user: User;
};

const Opening = ({ portfolio, user }: OpeningProps) => {
    const [indexes, setIndexes] = useState([0, 1]);
    const ctrls = useAnimation();

    const appendArticle = (word: string) => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return vowels.includes(word[0].toLowerCase()) ? 'an ' + word : 'a ' + word;
    };

    const baseWords = useMemo(() => {
        const skills = user.skills || [];
        if (skills.length === 0) return ['developer', 'designer', 'freelancer'];
        if (skills.length === 1) return [skills[0], skills[0], skills[0]];
        if (skills.length === 2) return [skills[0], skills[1], skills[0]];
        return skills.map((skill) => appendArticle(skill.toLowerCase()));
    }, [user.skills]);

    useEffect(() => {
        ctrls.set('initial');
        ctrls.start('animate');
    }, [indexes]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexes((prev) => {
                return [prev[1], (prev[1] + 1) % baseWords.length];
            });
        }, INTERVAL);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="mx-auto mt-[16vh] w-[72vw]">
            <h1 className="mt-[2vh] flex font-serif text-[10vh] font-medium leading-[100%] tracking-tight">
                <span className="inline-block h-[11.5vh] flex-shrink-0 overflow-hidden whitespace-nowrap">
                    {portfolio.brandName} is
                </span>
                <div className="relative inline-block h-[11.5vh] w-full min-w-0 overflow-hidden">
                    {/* Assets loop */}
                    <motion.span variants={variants.asset.outro} className="absolute" initial="initial" animate={ctrls}>
                        {baseAssets[indexes[0]]}
                    </motion.span>
                    <motion.span variants={variants.asset.intro} className="absolute" initial="initial" animate={ctrls}>
                        {baseAssets[indexes[1]]}
                    </motion.span>

                    {/* Words loop */}
                    <motion.span
                        variants={variants.words.outro}
                        className="absolute whitespace-nowrap"
                        initial="initial"
                        animate={ctrls}
                    >
                        {baseWords[indexes[0]]}
                        <div
                            className="border-t-2"
                            style={{
                                borderTopColor: 'var(--text-color)',
                            }}
                        ></div>
                    </motion.span>
                    <motion.span
                        variants={variants.words.intro}
                        className="absolute whitespace-nowrap"
                        initial="initial"
                        animate={ctrls}
                    >
                        {baseWords[indexes[1]]}
                        <div
                            className="border-t-2"
                            style={{
                                borderTopColor: 'var(--text-color)',
                            }}
                        ></div>
                    </motion.span>
                </div>
            </h1>
            <p className="mt-[1vh] font-serif text-[10vh] font-medium leading-[100%] tracking-tight">
                ➺ based in {user.location}
            </p>
            <GetInTouch className="mt-[4vh]" />
        </div>
    );
};

export default Opening;
