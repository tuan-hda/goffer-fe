import ReportPanel from '@/components/report/ReportPanel';
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
            <ReportPanel />
        </div>
    );
};

export default Reports;
