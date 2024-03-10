import { AnimationControls, Variants } from 'framer-motion';

export const transitionPreset = {
    duration: 1,
    ease: [0.2, 0.65, 0.3, 0.9],
};

export const fadeInAnimationFn: (_: number) => Variants = (index) => ({
    hidden: {
        opacity: 0,
        y: '80px',
        rotate: 3,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.25,
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
        },
        rotate: 0,
    },
});

export const zoomInAnimationFn: (_: number) => Variants = (index) => ({
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: index * 0.25,
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
        },
    },
});

export const fadeInPropsFn =
    (ctrls: AnimationControls) =>
    (index = 0) => ({
        initial: 'hidden',
        animate: ctrls,
        variants: fadeInAnimationFn(index),
    });

export const zoomInPropsFn =
    (ctrls: AnimationControls) =>
    (index = 0) => ({
        initial: 'hidden',
        animate: ctrls,
        variants: zoomInAnimationFn(index),
    });
