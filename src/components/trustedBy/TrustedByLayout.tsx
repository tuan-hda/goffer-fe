type TrustedByLayoutProps = {
    title: string;
    children: React.ReactNode;
};
const TrustedByLayout = ({ title, children }: TrustedByLayoutProps) => {
    return (
        <div className="h-[84vh] w-full flex">
            <div className="w-full max-w-[1000px] m-auto h-full flex flex-col p-6 max-h-[610px] mix-blend-difference relative z-[4]">
                <p className="invert font-bold tracking-wider text-2xl mx-auto mb-2 bg-clip-text bg-gradient-to-r from-orange-700 to-orange-400 w-fit text-transparent">
                    {title}
                </p>
                {children}
            </div>
        </div>
    );
};

export default TrustedByLayout;
