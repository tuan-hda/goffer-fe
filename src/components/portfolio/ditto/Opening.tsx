import GetInTouch from '../GetInTouch';
import { motion } from 'framer-motion';

const Opening = () => {
    return (
        <div className="mx-auto mt-[16vh] w-[72vw]">
            <p className="text-[2.2vh]">WE DESIGN BRANDS THAT BRING JOY TO THE WORLD.</p>
            <h1 className="mt-[2vh] flex font-serif text-[10vh] font-medium leading-[100%] tracking-tight">
                <span className="inline-block h-[11.5vh] overflow-hidden">Studio is ✰︎ </span>
                <div className="relative ml-[1.5vh] inline-block h-[11.5vh] w-full overflow-hidden underline">
                    <motion.span
                        variants={{
                            initial: { top: 0, left: 0 },
                            animate: {
                                top: '-12vh',
                                left: 0,
                                transition: { duration: 1, ease: [0.99, 0, 1, 1] },
                            },
                        }}
                        className="absolute whitespace-nowrap underline"
                        initial="initial"
                        animate="animate"
                    >
                        a brand strategist
                    </motion.span>
                    <motion.span
                        variants={{
                            animate: {
                                top: 0,
                                left: 0,
                                transition: { duration: 1, delay: 1, ease: [0, 0, 0.01, 1] },
                            },
                            initial: { top: '10vh', left: 0 },
                        }}
                        className="absolute whitespace-nowrap underline"
                        initial="initial"
                        animate="animate"
                    >
                        a brand strategist
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
