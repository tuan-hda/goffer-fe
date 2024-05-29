import PortfolioPreview from './PortfolioPreview';
import SetupBar from './SetupBar';

const PortfolioSetup = () => {
    return (
        <div className="grid h-full w-full grid-cols-12 gap-10">
            <div className="col-span-8 h-screen bg-black">
                <PortfolioPreview />
            </div>
            <div className="col-span-4">
                <SetupBar />
            </div>
        </div>
    );
};

export default PortfolioSetup;
