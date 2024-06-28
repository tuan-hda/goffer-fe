import { listApplicationService } from '@/services/apply.service';
import { Apply } from '@/types/application.type';
import { ListQueryOptions } from '@/types/common.type';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const useListApplications = (params?: Partial<Record<keyof (Apply & ListQueryOptions), unknown>>) => {
    const query = useQuery({
        queryKey: ['listApplications', params],
        queryFn: () => listApplicationService(params),
    });

    return { ...query };
};

export default useListApplications;
