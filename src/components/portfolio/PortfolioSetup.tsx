import { TbArrowLeft } from 'react-icons/tb';
import PortfolioPreview from './PortfolioPreview';
import SetupBar from './SetupBar';

type PortfolioSetupProps = {
    setPortfolio: React.Dispatch<React.SetStateAction<boolean>>;
};

const PortfolioSetup = ({ setPortfolio }: PortfolioSetupProps) => {
    return (
        <div>
            <div className="mb-7 flex items-center">
                <button className="px-4" onClick={() => setPortfolio(false)}>
                    <TbArrowLeft className="text-3xl" />
                </button>
                <h1 className="text-3xl">Setup portfolio</h1>
            </div>
            <div className="grid h-full w-full grid-cols-12 gap-10">
                <div className="col-span-8 flex h-full items-start">
                    <PortfolioPreview />
                </div>
                <div className="col-span-4">
                    <SetupBar />
                </div>
            </div>
        </div>
    );
};

export default PortfolioSetup;
