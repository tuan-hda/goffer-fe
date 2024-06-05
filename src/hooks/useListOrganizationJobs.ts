import { listJobsService } from '@/services/jobs.service';
import { Job } from '@/types/job.type';
import { useQuery } from '@tanstack/react-query';

const useListOrganizationJobs = (query?: Partial<Record<keyof Job, string>>) => {
    return useQuery({ queryKey: ['listOrganizationJobs', query], queryFn: () => listJobsService(query) });
};

export default useListOrganizationJobs;
