import { useQuery } from '@tanstack/react-query';
import { listReportsService } from '@/services/reports.service';

const useListReports = () => {
    return useQuery({
        queryKey: ['listReports'],
        queryFn: () => listReportsService(),
    });
};

export default useListReports;
