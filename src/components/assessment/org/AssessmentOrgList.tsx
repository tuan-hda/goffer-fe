import useListOrgAssessment from '@/hooks/useListOrgAssessment';
import AssessmentOrgItem from './AssessmentOrgItem';
import { TbLoader } from 'react-icons/tb';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const AssessmentOrgList = () => {
    const [searchParams] = useSearchParams();

    const { refetch, data, isLoading } = useListOrgAssessment({
        populate: 'owner',
    });

    useEffect(() => {
        if (searchParams.has('search')) {
            refetch();
        }
    }, [searchParams]);

    if (isLoading) {
        return (
            <div className="mt-10 flex h-[calc(100vh-280px)] items-center justify-center">
                <TbLoader className="animate-spin text-xl" />
            </div>
        );
    }

    if (!data || data.results.length === 0) {
        return <div className="mt-10">No assessment here.</div>;
    }

    return (
        <div className="mt-10 grid grid-cols-4 gap-6">
            {data.results.map((assessment) => (
                <AssessmentOrgItem key={assessment.id} assessment={assessment} />
            ))}
        </div>
    );
};

export default AssessmentOrgList;
