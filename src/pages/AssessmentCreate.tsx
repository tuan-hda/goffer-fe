import AssessmentBuilderContent from '@/components/assessment/assessmentBuilder/AssessmentBuilderContent';
import AssessmentBuilderHeader from '@/components/assessment/assessmentBuilder/AssessmentBuilderHeader';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbAtom, TbFlower } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';

const AssessmentCreate = () => {
    const navigate = useNavigate();
    const { domain } = useParams();

    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem onClick={() => navigate(`/app/organization/${domain}/assessment`)}>
                    <TbAtom className="text-lg" /> Assessment
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <TbFlower className="text-lg" /> Builder
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="pt-5">
                <AssessmentBuilderHeader />
                <AssessmentBuilderContent />
            </div>
        </div>
    );
};

export default AssessmentCreate;
