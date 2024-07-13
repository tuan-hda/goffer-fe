import { useQuery } from '@tanstack/react-query';
import { listOrganizationsService } from '@/services/organizations.service';

const useListOrganizations = (params?: Record<string, unknown>) => {
    return useQuery({ queryKey: ['listOrganizations'], queryFn: () => listOrganizationsService(params) });
};

export default useListOrganizations;
