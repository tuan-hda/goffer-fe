import { useQuery } from '@tanstack/react-query';
import { listOrganizationsService } from '@/services/organizations.service';

const useListOrganizations = () => {
    return useQuery({ queryKey: ['listOrganizations'], queryFn: listOrganizationsService });
};

export default useListOrganizations;
