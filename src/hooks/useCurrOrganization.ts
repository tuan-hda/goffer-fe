import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getOrganizationByDomainService } from 'src/services/organizations.service';

const useCurrOrganization = (outerDomain?: string) => {
    const { domain } = useParams();
    return useQuery({
        queryKey: ['organization', outerDomain ?? domain],
        queryFn: () => getOrganizationByDomainService((outerDomain ?? domain)!),
        enabled: !!outerDomain || !!domain,
    });
};

export default useCurrOrganization;
