import { getConversionRateService } from '@/services/analytics.service';
import { AnalyticsGranularity } from '@/types/analytics.type';
import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';

const useGetConversionRateData = () => {
    const { id: job } = useParams();
    const [searchParams] = useSearchParams();
    const startDate = new Date(searchParams.get('startDate') || '');
    const endDate = new Date(searchParams.get('endDate') || '');
    const granularity = searchParams.get('granularity') || 'day';

    return useQuery({
        queryKey: ['conversionRateData', job, startDate, endDate, granularity],
        queryFn: () => getConversionRateService(job!, startDate!, endDate!, granularity as AnalyticsGranularity),
        enabled: !!job && !!startDate && !!endDate,
    });
};

export default useGetConversionRateData;
