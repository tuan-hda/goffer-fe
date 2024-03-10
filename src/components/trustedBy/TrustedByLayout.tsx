import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { fadeInPropsFn } from 'src/utils/animation';

type TrustedByLayoutProps = {
    title: string;
    children: React.ReactNode;
    blendTitleOnly?: boolean;
    className?: string;
};
const TrustedByLayout = ({ title, children, blendTitleOnly, className }: TrustedByLayoutProps) => {
    const ctrls = useAnimation();

    useEffect(() => {
        ctrls.start('visible');
    }, [ctrls]);

    return (
        <div className="h-[84vh] w-full flex">
            <div
                className={classNames(
                    'w-full max-w-[1000px] m-auto h-full flex flex-col p-6 max-h-[610px] relative z-[4]',
                    !blendTitleOnly && 'mix-blend-difference',
                    className,
                )}
            >
                <p
                    className={classNames(
                        'font-bold tracking-wider text-2xl mx-auto mb-2 bg-clip-text bg-gradient-to-r from-orange-700 to-orange-400 w-fit text-transparent',
                        blendTitleOnly ? 'mix-blend-difference' : 'invert',
                    )}
                >
                    {title}
                </p>
                {children}
                <motion.div
                    {...fadeInPropsFn(ctrls)(2)}
                    className="flex items-center mx-auto gap-2 font-light text-sm text-black/40 mt-6 invert"
                >
                    Press <img src="/space-button.svg" alt="space-bar" className="w-16 opacity-50" /> or use arrow keys
                </motion.div>
            </div>
        </div>
    );
};

export default TrustedByLayout;
