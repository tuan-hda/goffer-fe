import { getApplyJob } from '@/services/apply.service';
import { useQuery } from '@tanstack/react-query';

const useApplyJob = (id: string) => {
    return useQuery({ queryKey: ['getApplyJob', id], queryFn: () => getApplyJob(id) });
};

export default useApplyJob;
