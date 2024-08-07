import AssessmentResultDetailContent from '@/components/assessment/assessmentResult/AssessmentResultDetailContent';
import AssessmentResultHeader from '@/components/assessment/assessmentResult/AssessmentResultHeader';
import AssessmentResultList from '@/components/assessment/assessmentResult/AssessmentResultList';
import useCurrTakingWithId from '@/hooks/useCurrTakingWithId';
import useGetCurrAssessment from '@/hooks/useGetCurrAssessment';
import useNewAssessmentStore, { initialData } from '@/stores/newAssessmentStore';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { useEffect } from 'react';
import { TbAtom, TbFlower, TbReport } from 'react-icons/tb';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const AssessmentResultDetail = () => {
    const navigate = useNavigate();
    const { domain } = useParams();
    const location = useLocation();
    const setAssessment = useNewAssessmentStore((state) => state.setAssessment);

    const { data } = useGetCurrAssessment();
    const { data: currTaking } = useCurrTakingWithId();

    useEffect(() => {
        if (data) {
            setAssessment({
                ...data,
                job: data.job?.id,
                org: data.org?.id,
            });
        } else {
            setAssessment(initialData);
        }
    }, [data, location]);

    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem onClick={() => navigate(`/app/organization/${domain}/assessment`)}>
                    <TbAtom className="text-lg" /> Assessment
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <TbFlower className="text-lg" /> Builder
                </BreadcrumbItem>
                {data && (
                    <BreadcrumbItem onClick={() => navigate(`/app/organization/${domain}/assessment/${data.id}`)}>
                        {data.title}
                    </BreadcrumbItem>
                )}
                <BreadcrumbItem onClick={() => navigate(`/app/organization/${domain}/assessment/${data?.id}/results`)}>
                    <TbReport className="text-lg" /> Results
                </BreadcrumbItem>
                <BreadcrumbItem>{currTaking?.user.name}</BreadcrumbItem>
            </Breadcrumbs>
            <div className="pt-5">
                <AssessmentResultDetailContent />
            </div>
        </div>
    );
};

export default AssessmentResultDetail;
