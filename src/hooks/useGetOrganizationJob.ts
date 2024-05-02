import { getJobService } from '@/services/jobs.service';
import { useQuery } from '@tanstack/react-query';

const useGetOrganizationJob = (id?: string) => {
    return useQuery({
        queryKey: ['getOrganizationJob', id],
        queryFn: () => getJobService(id!),
        enabled: !!id,
    });
};

export default useGetOrganizationJob;
