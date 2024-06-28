import { countApplicationsByPhasesService } from '@/services/apply.service';
import { useQuery } from '@tanstack/react-query';

const useCountApplicationsByPhases = () => {
    return useQuery({
        queryKey: ['countApplicationsByPhases'],
        queryFn: async () => countApplicationsByPhasesService(),
    });
};

export default useCountApplicationsByPhases;
