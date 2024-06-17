import { TbCheck } from 'react-icons/tb';
import ProtectedProWrapper from '../proPlan/ProtectedProWrapper';
import ProDefaultFallback from '../proPlan/ProDefaultFallback';
import { TEMPLATE } from '@/data/portfolio';
import usePortfolioStore from '@/stores/portfolioStore';

const TemplateList = () => {
    const setPortfolio = usePortfolioStore((state) => state.setPortfolio);

    return (
        <ProtectedProWrapper fallback={<ProDefaultFallback />}>
            <div>
                <div className="col-span-3 mb-7 flex items-center">
                    <h1 className="text-3xl">Choose a template</h1>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {Object.keys(TEMPLATE).map((key) => {
                        const template = TEMPLATE[key];
                        return (
                            <div
                                key={template.key}
                                onClick={() =>
                                    setPortfolio((prev) => ({
                                        ...prev,
                                        template: template.key,
                                    }))
                                }
                                className="group relative cursor-pointer rounded-3xl shadow-small"
                            >
                                <video
                                    autoPlay
                                    width={1000}
                                    height={1000}
                                    muted
                                    loop
                                    className="aspect-[4/3] h-full w-full rounded-3xl object-cover"
                                >
                                    <source src={template.videoUrl} type={template.mimeType}></source>
                                </video>
                                <div className="absolute bottom-5 right-7 z-[11] rounded-full bg-white/50 p-4 opacity-0 shadow-small backdrop-blur-sm transition group-hover:opacity-100">
                                    <TbCheck className="text-xl text-black" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </ProtectedProWrapper>
    );
};

export default TemplateList;
