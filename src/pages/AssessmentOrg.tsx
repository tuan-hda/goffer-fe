import AssessmentOrgHeader from '@/components/assessment/org/AssessmentOrgHeader';
import AssessmentOrgList from '@/components/assessment/org/AssessmentOrgList';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbAtom } from 'react-icons/tb';

const AssessmentOrg = () => {
    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <TbAtom className="text-lg" /> Assessment
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="pt-5">
                <AssessmentOrgHeader />
                <AssessmentOrgList />
            </div>
        </div>
    );
};

export default AssessmentOrg;
