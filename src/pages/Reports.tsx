import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbReport } from 'react-icons/tb';

const Reports = () => {
    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <TbReport className="text-lg" /> Reports
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="mt-5 flex items-center gap-4">
                <div>
                    <p className="mt-[6px] font-light text-text">Here's your statistics for Goffer</p>
                </div>
                <div className="ml-auto">
                    <p className="mb-1">Time range</p>
                </div>
            </div>
        </div>
    );
};

export default Reports;
