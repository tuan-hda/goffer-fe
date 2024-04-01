import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { fadeInPropsFn } from '@/utils/animation';

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
        <div className="flex h-[84vh] w-full">
            <div
                className={classNames(
                    'relative z-[4] m-auto flex h-full max-h-[610px] w-full max-w-[1000px] flex-col p-6',
                    !blendTitleOnly && 'mix-blend-difference',
                    className,
                )}
            >
                <p
                    className={classNames(
                        'mx-auto mb-2 w-fit bg-gradient-to-r from-orange-700 to-orange-400 bg-clip-text text-2xl font-bold tracking-wider text-transparent',
                        blendTitleOnly ? 'mix-blend-difference' : 'invert',
                    )}
                >
                    {title}
                </p>
                {children}
                <motion.div
                    {...fadeInPropsFn(ctrls)(2)}
                    className="mx-auto mt-6 flex items-center gap-2 text-sm font-light text-black/40 invert"
                >
                    Press <img src="/space-button.svg" alt="space-bar" className="w-16 opacity-50" /> or use arrow keys
                </motion.div>
            </div>
        </div>
    );
};

export default TrustedByLayout;
