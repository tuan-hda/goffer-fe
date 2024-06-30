import useCurrApplication from '@/hooks/useCurrApplication';
import ApplicantResponse from './ApplicantResponse';
import ApplicantAssessments from './ApplicantAssessments';
import useListTakingAssessments from '@/hooks/useListTakingAssessments';
import useCurrOrganizationJob from '@/hooks/useCurrOrganizationJob';

const ApplicantPerformance = () => {
    const { data } = useCurrApplication();

    if (!data || !data.owner) return null;

    return (
        <div className="mt-14">
            <p className="text-3xl">Applicant's responses</p>
            <div className="mt-4 space-y-8">
                {data?.answers?.map((answer, index) => (
                    <ApplicantResponse jobId={data.job.id} applicantId={data.owner?.id!} key={index} answer={answer} />
                ))}
            </div>
            <ApplicantAssessments />
        </div>
    );
};

export default ApplicantPerformance;
