import { listApplicationService } from '@/services/apply.service';
import { Apply } from '@/types/application.type';
import { ListQueryOptions } from '@/types/common.type';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const useListApplications = (params?: Partial<Record<keyof (Apply & ListQueryOptions), unknown>>) => {
    const [searchParams] = useSearchParams();

    params = params || {};

    if (searchParams.get('page')) {
        params.page = searchParams.get('page');
    }

    if (searchParams.get('limit')) {
        params.limit = searchParams.get('limit');
    }

    if (searchParams.get('q')) {
        params.q = searchParams.get('q');
    }

    if (searchParams.get('match')) {
        params.match = searchParams.get('match');
    }

    if (searchParams.get('rating')) {
        params.rating = searchParams.get('rating');
    }

    if (searchParams.get('assess')) {
        params.assessmentAvg = searchParams.get('assess');
    }

    const query = useQuery({
        queryKey: ['listApplications', params],
        queryFn: () => listApplicationService(params),
    });

    return { ...query };
};

export default useListApplications;
