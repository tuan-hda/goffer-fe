import { TemplateList } from '@/components/portfolio';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbPaint } from 'react-icons/tb';

const Portfolio = () => {
    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <TbPaint className="text-lg" /> Portfolio
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="pt-5">
                <h1 className="mb-7 text-3xl">Choose a template</h1>
                <TemplateList />
            </div>
        </div>
    );
};

export default Portfolio;
