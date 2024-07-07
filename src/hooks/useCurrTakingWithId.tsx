import { getTakingAssessmentService } from '@/services/takeAssessment.service';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useCurrTakingWithId = () => {
    const { takingId } = useParams();
    return useQuery({
        queryKey: ['takingDetail', takingId],
        queryFn: () => getTakingAssessmentService(takingId!),
        enabled: !!takingId,
    });
};

export default useCurrTakingWithId;
