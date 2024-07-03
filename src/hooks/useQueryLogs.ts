import { queryLogsService } from '@/services/log.service';
import { useQuery } from '@tanstack/react-query';

const useQueryLogs = (params: any) => {
    return useQuery({
        queryKey: ['logs', params],
        queryFn: () => queryLogsService(params),
    });
};

export default useQueryLogs;
