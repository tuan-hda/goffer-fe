import { TbHeartHandshake, TbPlayerRecord, TbSparkles, TbWaveSine } from 'react-icons/tb';
import { useMotionValue, useTransform, motion, useAnimation } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSpring } from 'use-spring';
import { fadeInPropsFn, zoomInPropsFn } from '../utils/animation';

const LandingPage = () => {
    const [floatY, setFloatY] = useState(0);
    const floatYRef = useRef(0);
    const direction = useRef(1);
    const [floatSecY, setFloatSecY] = useState(0);
    const floatYSecRef = useRef(5);
    const directionSec = useRef(1);

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [currentX] = useSpring(x);
    const [currentY] = useSpring(y);
    const xSpring = useMotionValue(0);
    const ySpring = useMotionValue(0);

    const rotateX = useTransform(ySpring, [-1, 1], ['-165deg', '-185deg']);
    const rotateY = useTransform(xSpring, [-1, 1], ['15.5deg', '-16.5deg']);
    const rotateSecX = useTransform(ySpring, [-1, 1], ['-17.5deg', '17.5deg']);
    const rotateSecY = useTransform(xSpring, [-1, 1], ['-197.5deg', '-163.5deg']);

    const ctrls = useAnimation();

    useEffect(() => {
        ctrls.start('visible');
    }, [ctrls]);

    // Spring effect
    useEffect(() => {
        xSpring.set(currentX);
        ySpring.set(currentY);
    }, [currentX, currentY, xSpring, ySpring]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const left = e.clientX;
            const top = e.clientY;

            const middleX = window.innerWidth / 2;
            const middleY = window.innerHeight / 2;
            const l = left - middleX;
            const t = top - middleY;
            const pctX = l / middleX;
            const pctY = t / middleY;

            setX(pctX);
            setY(pctY);
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            floatYRef.current += 0.175 * direction.current;
            setFloatY(floatYRef.current);
            if (Math.abs(floatYRef.current) > 15) {
                direction.current *= -1;
            }
        }, 1000 / 60);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            floatYSecRef.current += 0.225 * directionSec.current;
            setFloatSecY(floatYSecRef.current);
            if (Math.abs(floatYSecRef.current) > 15) {
                directionSec.current *= -1;
            }
        }, 1000 / 60);
        return () => clearInterval(interval);
    }, []);

    const getFadeInProps = useMemo(() => {
        return fadeInPropsFn(ctrls);
    }, [ctrls]);

    const getZoomInProps = useMemo(() => {
        return zoomInPropsFn(ctrls);
    }, [ctrls]);

    return (
        <div className="flex w-full h-full">
            <div className="m-auto flex flex-col z-[4] items-center relative text-white mix-blend-difference">
                <motion.div {...getFadeInProps()} className="mix-blend-difference">
                    <img src="/logo.svg" alt="logo" className="w-10 invert h-10" />
                </motion.div>
                <motion.p {...getFadeInProps(0.3)} className="mt-5 text-white">
                    Hi there. We&#39;re Goffer.
                </motion.p>
                <motion.p {...getFadeInProps(0.6)} className="font-serif font-semibold text-5xl mt-2 text-white">
                    Offer to your quality candidates.
                </motion.p>
                <motion.p {...getFadeInProps(0.9)} className="font-serif font-semibold text-5xl mt-2 text-white">
                    Got offer from your recruiter.
                </motion.p>
                <div className="flex items-center gap-5 mt-6">
                    <motion.div {...getZoomInProps(0)} className="flex items-center gap-1 text-white">
                        <TbWaveSine className="text-2xl p-1 bg-white rounded-full" /> Audio Responses
                    </motion.div>
                    <motion.div {...getZoomInProps(1)} className="flex items-center gap-1 text-white">
                        <TbPlayerRecord className="text-2xl p-1 bg-white rounded-full" /> Video Responses
                    </motion.div>
                    <motion.div {...getZoomInProps(2)} className="flex items-center gap-1 text-white">
                        <TbSparkles className="text-2xl p-1 bg-white rounded-full" /> Artificial Intelligence
                    </motion.div>
                    <motion.div {...getZoomInProps(3)} className="flex items-center gap-1 text-white">
                        <TbHeartHandshake className="text-2xl p-1 bg-white rounded-full" /> Network
                    </motion.div>
                </div>
                <motion.div
                    {...getFadeInProps(4)}
                    className="flex items-center justify-center gap-2 font-light text-sm text-white/40 mt-2"
                >
                    Press <img src="/space-button.svg" alt="space-bar" className="w-16 h-16 opacity-50 invert" /> or use
                    arrow keys
                </motion.div>
            </div>
            <motion.img
                src="/assets/tunnel.png"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                    translateY: floatY,
                }}
                className="w-[35vw] fixed -z-0 pointer-events-none"
            />
            <motion.img
                style={{
                    rotateX: rotateSecX,
                    rotateY: rotateSecY,
                    transformStyle: 'preserve-3d',
                    translateY: floatSecY,
                }}
                src="/assets/cone.png"
                className="w-[36vw] fixed right-10 bottom-10 select-none pointer-events-none"
            />
        </div>
    );
};

export default LandingPage;
