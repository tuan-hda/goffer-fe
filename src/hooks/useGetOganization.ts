import { useQuery } from '@tanstack/react-query';
import { getOrganizationService } from '@/services/organizations.service';

const useGetOrganization = (id?: string) => {
    return useQuery({
        queryKey: ['getOrganization', id],
        queryFn: () => getOrganizationService(id!),
        enabled: !!id,
    });
};

export default useGetOrganization;
