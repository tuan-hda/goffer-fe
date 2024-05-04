import { getIndividualJob } from '@/services/jobs.service';
import { useQuery } from '@tanstack/react-query';

const useIndividualJobs = () => {
    return useQuery({ queryKey: ['getIndividualJobs'], queryFn: getIndividualJob });
};

export default useIndividualJobs;
