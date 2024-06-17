import { TEMPLATE } from '@/data/portfolio';
import usePortfolioStore from '@/stores/portfolioStore';

const PortfolioPreview = () => {
    const portfolio = usePortfolioStore((state) => state.portfolio);

    return (
        <div className="pointer-events-none relative w-full rounded-3xl shadow-small">
            <video
                autoPlay
                width={1000}
                height={1000}
                muted
                loop
                className="aspect-[4/3] h-full w-full rounded-3xl object-cover"
            >
                {portfolio?.template && (
                    <source
                        src={TEMPLATE[portfolio.template].videoUrl}
                        type={TEMPLATE[portfolio.template].mimeType}
                    ></source>
                )}
            </video>
        </div>
    );
};

export default PortfolioPreview;
