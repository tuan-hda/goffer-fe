import { ListQueryOptions } from '@/types/common.type';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import useCurrOrganization from './useCurrOrganization';
import { Assessment } from '@/types/assessment.type';
import { listAssessmentsService } from '@/services/assessment.service';

const useListOrgAssessment = (query?: Partial<Record<keyof (Assessment & ListQueryOptions), string>>) => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || '';
    const type = searchParams.get('type') || 'all';

    const queryKey = query || {};
    const { data } = useCurrOrganization();

    queryKey.limit = '100';

    if (!queryKey.org) {
        queryKey.org = data?.id;
    }

    if (!queryKey.job) {
        queryKey.job = 'all';
    }

    if (type !== 'all') queryKey.type = type;

    const actualQuery = {
        ...queryKey,
        ...(search && { search }),
    };

    return useQuery({
        queryKey: ['listOrgAssessments', queryKey],
        queryFn: async () => listAssessmentsService(actualQuery),
    });
};

export default useListOrgAssessment;
