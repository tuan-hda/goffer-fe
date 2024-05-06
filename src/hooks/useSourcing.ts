import { getSourcingService } from '@/services/jobs.service';
import { useQuery } from '@tanstack/react-query';

const useSourcing = (id?: string) => {
    return useQuery({
        queryKey: ['sourcing', id],
        queryFn: () => getSourcingService(id!),
        enabled: !!id,
    });
};

export default useSourcing;
