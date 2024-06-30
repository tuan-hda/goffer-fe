import useCurrApplication from '@/hooks/useCurrApplication';
import ApplicantResponse from './ApplicantResponse';
import ApplicantAssessments from './ApplicantAssessments';
import useListTakingAssessments from '@/hooks/useListTakingAssessments';
import useCurrOrganizationJob from '@/hooks/useCurrOrganizationJob';

const ApplicantPerformance = () => {
    const { data } = useCurrApplication();

    return (
        <div className="mt-14">
            <p className="text-3xl">Applicant's responses</p>
            <div className="mt-4 space-y-8">
                {data?.answers?.map((answer, index) => <ApplicantResponse key={index} answer={answer} />)}
            </div>
            <ApplicantAssessments />
        </div>
    );
};

export default ApplicantPerformance;
