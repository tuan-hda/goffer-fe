import { useParams } from 'react-router-dom';
import useListApplications from './useListApplications';
import useCountApplicationsByPhases from './useCountApplicationsByPhases';

const useRefetchInsights = () => {
    const { id } = useParams();
    const { refetch: refetchApplied } = useListApplications({
        populate: 'owner',
        job: id,
        phase: 'applied',
    });
    const { refetch: refetchShortlisted } = useListApplications({
        populate: 'owner',
        job: id,
        phase: 'shortlisted',
    });
    const { refetch: refetchInterviewed } = useListApplications({
        populate: 'owner',
        job: id,
        phase: 'interviewed',
    });
    const { refetch: refetchHired } = useListApplications({
        populate: 'owner',
        job: id,
        phase: 'hired',
    });
    const { refetch: refetchRejected } = useListApplications({
        populate: 'owner',
        job: id,
        phase: 'rejected',
    });
    const { refetch: refetchOffer } = useListApplications({
        populate: 'owner',
        job: id,
        phase: 'offer',
    });
    const { refetch: refetchAssessed } = useListApplications({
        populate: 'owner',
        job: id,
        phase: 'assessed',
    });

    const { refetch: refetchCount } = useCountApplicationsByPhases({
        job: id,
    });

    const refetch = () =>
        Promise.all(
            [
                refetchApplied,
                refetchShortlisted,
                refetchInterviewed,
                refetchHired,
                refetchRejected,
                refetchOffer,
                refetchAssessed,
                refetchCount,
            ].map((refetch) => refetch()),
        );

    return { refetch };
};

export default useRefetchInsights;
