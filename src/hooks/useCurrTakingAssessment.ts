import { getTakingAssessmentByAssessmentId } from './../services/takeAssessment.service';
import useSelfProfileQuery from './useSelfProfileQuery';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const useCurrTakingAssessment = () => {
    const { data: self } = useSelfProfileQuery();
    const { assessmentId } = useParams();

    return useQuery({
        queryKey: ['currTakingAssessment', assessmentId, self?.id],
        enabled: !!self?.id && !!assessmentId,
        queryFn: () => getTakingAssessmentByAssessmentId(assessmentId!),
    });
};

export default useCurrTakingAssessment;
