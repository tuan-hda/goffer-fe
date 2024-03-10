import { AnimationControls, motion } from 'framer-motion';
import { transitionPreset } from '../../utils/animation';
import classNames from 'classnames';

type FancyTabContentProps = {
    ctrls: AnimationControls;
    img: string;
    imgAlt: string;
    imgClassName?: string;
};

const FancyTabContent = ({ ctrls, img, imgAlt, imgClassName }: FancyTabContentProps) => {
    return (
        <div className="relative flex w-44 h-14 overflow-hidden rounded-full">
            <motion.img
                initial="hidden"
                src={img}
                draggable={false}
                className={classNames(
                    'mix-blend-difference invert h-12 m-auto w-full object-contain z-[1] relative',
                    imgClassName,
                )}
                alt={imgAlt}
            />
            <motion.div
                initial="hidden"
                animate={ctrls}
                variants={{
                    hidden: { height: 0, width: 0 },
                    visible: {
                        height: 56,
                        width: 176,
                        transition: transitionPreset,
                    },
                }}
                className="absolute bottom-0 z-0 bg-black rounded-full"
            />
        </div>
    );
};

export default FancyTabContent;
