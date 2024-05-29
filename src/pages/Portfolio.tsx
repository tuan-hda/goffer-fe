import { PortfolioSetup, TemplateList } from '@/components/portfolio';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { useState } from 'react';
import { TbPaint } from 'react-icons/tb';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState(false);

    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <TbPaint className="text-lg" /> Portfolio
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="pt-5">
                {portfolio ? (
                    <PortfolioSetup setPortfolio={setPortfolio} />
                ) : (
                    <TemplateList setPortfolio={setPortfolio} />
                )}
            </div>
        </div>
    );
};

export default Portfolio;
