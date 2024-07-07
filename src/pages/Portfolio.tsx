import { PortfolioSetup, TemplateList } from '@/components/portfolio';
import { analytics } from '@/configs/firebase';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import usePortfolioStore from '@/stores/portfolioStore';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import { TbPaint } from 'react-icons/tb';
import { shallow } from 'zustand/shallow';

const Portfolio = () => {
    useEffect(() => {
        logEvent(analytics, 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname,
        })
    },[])

    const [portfolio, setPortfolio] = usePortfolioStore((state) => [state.portfolio, state.setPortfolio], shallow);
    const { data: self } = useSelfProfileQuery();

    useEffect(() => {
        if (self?.portfolio) {
            setPortfolio((prev) => ({ ...prev, ...self.portfolio }));
        }
    }, [self?.portfolio]);

    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <TbPaint className="text-lg" /> Portfolio
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="pt-5">{portfolio?.template ? <PortfolioSetup /> : <TemplateList />}</div>
        </div>
    );
};

export default Portfolio;
