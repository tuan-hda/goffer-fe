import useCurrApplication from './useCurrApplication';
import useListEvaluations from './useListEvaluations';
import useSelfProfileQuery from './useSelfProfileQuery';

const useCurrEvaluation = (answerId?: string) => {
    const { data: self } = useSelfProfileQuery();

    const { data: c, refetch } = useListEvaluations({
        owner: self?.id,
        answer: answerId,
    });
    const currEvaluation = c?.at(0);

    return { currEvaluation, refetch };
};

export default useCurrEvaluation;
