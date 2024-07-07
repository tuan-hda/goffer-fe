import { getAllTakingsService } from '@/services/takeAssessment.service';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useListCurrTakings = () => {
    const { id, assessmentId } = useParams();

    const identifier = id || assessmentId;

    return useQuery({
        queryKey: ['listCurrTakings', identifier],
        queryFn: () => getAllTakingsService(identifier!),
        enabled: !!identifier,
    });
};

export default useListCurrTakings;
