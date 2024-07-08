import { ApplyResponse } from '@/types/application.type';
import ApplySuccess from './ApplySuccess';
import useGetOrganizationJob from '@/hooks/useGetOrganizationJob';
import ApplicantFeedback from './ApplicantFeedback';

type FinalStepProps = {
    data?: ApplyResponse;
};

const FinalStep = ({ data }: FinalStepProps) => {
    if (!data) return null;

    return <div>{data.job.hasFeedback ? <ApplicantFeedback data={data} /> : <ApplySuccess />}</div>;
};

export default FinalStep;
