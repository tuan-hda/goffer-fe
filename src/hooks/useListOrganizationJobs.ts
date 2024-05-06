import { listJobsService } from '@/services/jobs.service';
import { useQuery } from '@tanstack/react-query';

const useListOrganizationJobs = (query?: Record<string, string>) => {
    return useQuery({ queryKey: ['listOrganizationJobs'], queryFn: () => listJobsService(query) });
};

export default useListOrganizationJobs;
