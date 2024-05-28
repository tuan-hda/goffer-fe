import { useAnimation, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ImagesShowcase = () => {
    const [hovering, setHovering] = useState(false);
    const [mount, setMount] = useState(false);
    const animate = useAnimation();

    const handleHover = useCallback(async () => {
        if (hovering) {
            animate.start('hover');
        } else {
            animate.start('initial');
        }
    }, [hovering]);

    useEffect(() => {
        handleHover();
    }, [hovering]);

    useEffect(() => {
        setTimeout(() => {
            setMount(true);
        }, 2000);
    }, []);

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', '60% start'],
    });

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
        [-1200, 1000],
    ];
    const imgs = [
        'https://media.contra.com/image/upload/v1689528859/x2a5yyzhauyg8ttduvtp.gif',
        'https://media.contra.com/image/upload/v1669011150/bid4annvfzfutjkuvd59.gif',
        'https://media.contra.com/image/upload/egv71imze4f2lwoh96el.png',
    ];

    return (
        <div className="relative flex h-[100vh]">
            <motion.div
                ref={ref}
                style={{
                    transformStyle: 'preserve-3d',
                }}
                animate={animate}
                variants={{
                    initial: {
                        rotateX: 0,
                        rotateY: 0,
                    },
                }}
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
                            className="absolute aspect-[4/3] h-[70%] object-cover shadow-small"
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
                                        duration: mount ? 0.5 : 1,
                                        ease: 'easeInOut',
                                        delay: mount ? 0 : index * 0.5,
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
    );
};

export default ImagesShowcase;