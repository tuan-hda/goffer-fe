import classNames from 'classnames';

type TrustedByLayoutProps = {
    title: string;
    children: React.ReactNode;
    blendTitleOnly?: boolean;
    className?: string;
};
const TrustedByLayout = ({ title, children, blendTitleOnly, className }: TrustedByLayoutProps) => {
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
            </div>
        </div>
    );
};

export default TrustedByLayout;
