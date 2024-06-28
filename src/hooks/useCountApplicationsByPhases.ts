import { countApplicationsByPhasesService } from '@/services/apply.service';
import { Apply } from '@/types/application.type';
import { useQuery } from '@tanstack/react-query';

const useCountApplicationsByPhases = (params?: Partial<Record<keyof Apply, unknown>>) => {
    return useQuery({
        queryKey: ['countApplicationsByPhases', params],
        queryFn: async () => countApplicationsByPhasesService(params),
    });
};

export default useCountApplicationsByPhases;
