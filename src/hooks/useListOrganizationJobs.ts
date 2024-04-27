import { listJobsService } from '@/services/jobs.service';
import { useQuery } from '@tanstack/react-query';

const useListOrganizationJobs = () => {
    return useQuery({ queryKey: ['listOrganizationJobs'], queryFn: () => listJobsService() });
};

export default useListOrganizationJobs;
