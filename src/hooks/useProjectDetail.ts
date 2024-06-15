import { getProjectService } from '@/services/projects.service';
import { useQuery } from '@tanstack/react-query';

const useProjectDetail = (id?: string) => {
    return useQuery({
        queryKey: ['projectDetail', id],
        queryFn: () => getProjectService(id!),
        enabled: !!id,
    });
};

export default useProjectDetail;
