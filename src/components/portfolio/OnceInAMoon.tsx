import { motion, useAnimation, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/button';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';

const OnceInAMoon = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', '60% start'],
    });

    const animate = useAnimation();
    const [hovering, setHovering] = useState(false);
    const [mount, setMount] = useState(false);

    useEffect(() => {
        if (hovering) {
            animate.start('hover');
        } else {
            animate.start('initial');
        }
    }, [hovering]);

    useEffect(() => {
        setTimeout(() => {
            setMount(true);
        }, 2000);
    }, []);

    const words = [
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
        'MARIE CURIE',
    ];

    // For the rotation of the images
    const rotate = useTransform(scrollYProgress, [0, 1], ['30deg', '-20deg']);
    const rotate2 = useTransform(scrollYProgress, [0, 1], ['-15deg', '20deg']);
    const rotate3 = useTransform(scrollYProgress, [0, 1], ['20deg', '-25deg']);
    const rotates = [rotate, rotate2, rotate3];
    const directions = [
        [100, -100],
        [-60, 120],
        [-100, -100],
    ];
    const startPos = [
        [1000, 1000],
        [-1000, 1000],
        [0, 1000],
    ];
    const imgs = [
        'https://media.contra.com/image/upload/v1689528859/x2a5yyzhauyg8ttduvtp.gif',
        'https://media.contra.com/image/upload/v1669011150/bid4annvfzfutjkuvd59.gif',
        'https://media.contra.com/image/upload/egv71imze4f2lwoh96el.png',
    ];

    // For the 3d effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };
    const rotateX = useTransform(y, [-0.5, 0.5], ['15deg', '-15deg']);
    const rotateY = useTransform(x, [-0.5, 0.5], ['-15deg', '15deg']);

    return (
        <div className="bg-dots flex min-h-screen flex-col overflow-hidden text-base tracking-wider text-black">
            <div className="sticky top-10 z-[10] mx-auto mt-10 flex w-[90vw] items-center gap-10">
                <p className="font-serif text-5xl font-semibold">Marie</p>
                <p className="ml-auto uppercase">Experiences</p>
                <p className="uppercase">Projects</p>
                <p className="uppercase">Recommendations</p>
                <Button
                    variant="black"
                    className="h-16 rounded-full bg-black px-10 py-6 text-base uppercase tracking-widest text-white"
                >
                    Get in touch
                </Button>
            </div>
            <p className="mt-[calc(50vh-200px)] text-center">Magician, specialize in Website magic ✨</p>
            <div className="infinite-words-slide relative h-[200px] w-full overflow-hidden">
                <div className="words-loop relative z-[1] mt-20 flex items-center gap-24 font-serif text-[20vh] font-black text-black">
                    {words.map((word, index) => (
                        <span key={index}>{word}</span>
                    ))}
                </div>
                <div className="absolute top-1/2 h-4 w-full -translate-y-1/2 bg-gray-500"></div>
            </div>

            {/* Showcase images part */}
            <div className="relative flex h-[80vh]">
                <motion.div
                    ref={ref}
                    style={{
                        transformStyle: 'preserve-3d',
                        rotateX,
                        rotateY,
                    }}
                    animate={animate}
                    variants={{
                        initial: {
                            rotateX: 0,
                            rotateY: 0,
                        },
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    className="mx-auto mt-16 flex aspect-[4/3] h-full items-center justify-center"
                >
                    {Array(3)
                        .fill(0)
                        .map((_, index) => (
                            <motion.img
                                initial="start"
                                animate={animate}
                                src={imgs[index]}
                                key={index}
                                className="absolute aspect-[4/3] h-[70%] object-cover"
                                style={{
                                    rotate: rotates[index],
                                    zIndex: 3 - index,
                                    transform: 'translateZ(100px)',
                                    transformStyle: 'preserve-3d',
                                }}
                                variants={{
                                    hover: {
                                        translateX: directions[index][0],
                                        translateY: directions[index][1],
                                        transition: {
                                            duration: 0.5,
                                            ease: 'easeInOut',
                                        },
                                    },
                                    initial: {
                                        translateX: 0,
                                        translateY: 0,
                                        transition: {
                                            duration: mount ? 0.5 : 2,
                                            ease: 'easeInOut',
                                        },
                                    },
                                    start: {
                                        translateX: startPos[index][0],
                                        translateY: startPos[index][1],
                                    },
                                }}
                            ></motion.img>
                        ))}
                </motion.div>
            </div>

            <Button
                variant="black"
                className="mx-auto mt-[24vh] h-16 w-fit rounded-full bg-black px-10 py-6 text-base uppercase tracking-widest text-white"
            >
                Get in touch
            </Button>
            <div className="h-[1000px]"></div>
        </div>
    );
};

export default OnceInAMoon;
