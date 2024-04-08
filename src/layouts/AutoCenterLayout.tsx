type AutoCenterLayoutProps = {
    children: React.ReactNode;
};
const AutoCenterLayout = ({ children }: AutoCenterLayoutProps) => {
    return (
        <div className="flex w-full">
            <div className="m-auto w-full max-w-7xl">{children}</div>
        </div>
    );
};

export default AutoCenterLayout;
