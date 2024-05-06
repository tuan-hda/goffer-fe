import { getSourcingService } from '@/services/jobs.service';
import { useQuery } from '@tanstack/react-query';

const useSourcing = (id?: string, page?: number) => {
    return useQuery({
        queryKey: ['sourcing', id],
        queryFn: () => getSourcingService(id!, page),
        enabled: !!id,
    });
};

export default useSourcing;
