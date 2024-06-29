import { getApplicationById, getApplyJob } from '@/services/apply.service';
import { useQuery } from '@tanstack/react-query';

const useApplicationById = (id?: string) => {
    return useQuery({ queryKey: ['getApplicationId', id], queryFn: () => getApplicationById(id!), enabled: !!id });
};

export default useApplicationById;
