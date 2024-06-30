import useCurrApplication from '@/hooks/useCurrApplication';
import useCurrOrganizationJob from '@/hooks/useCurrOrganizationJob';
import useListTakingAssessments from '@/hooks/useListTakingAssessments';
import { Fragment } from 'react/jsx-runtime';

const ApplicantAssessments = () => {
    const { data } = useCurrApplication();
    const { data: job } = useCurrOrganizationJob();
    const { data: takings } = useListTakingAssessments({
        user: data?.owner?.id,
        assessment: job?.assessments?.map((assessment) => assessment.id).join(','),
        populate: 'assessment',
    });

    if (!data?.assessmentAvg) return null;

    if (!takings || takings.length === 0) {
        return (
            <div>
                <p className="mt-16 text-3xl">Assessment average</p>
                <p className="mt-4 text-base">This candidate has not taken any assessment.</p>
            </div>
        );
    }

    return (
        <div>
            <p className="mt-16 text-3xl">Assessment average: {data?.assessmentAvg}%</p>
            {takings?.map((taking, index) => (
                <Fragment key={taking.id}>
                    <p className="mt-4 text-base font-medium">
                        Assessment {index + 1}: {taking.assessment.title}
                    </p>
                    <div className="mb-8 mt-4 flex items-center justify-center rounded-2xl bg-gray-50 px-10 py-16 text-base">
                        <p>Score: {taking.score}</p>
                    </div>
                </Fragment>
            ))}
        </div>
    );
};

export default ApplicantAssessments;
