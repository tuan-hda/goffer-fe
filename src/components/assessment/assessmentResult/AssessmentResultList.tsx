import useListCurrTakings from '@/hooks/useListCurrTakings';
import AssessmentResult from './AssessmentResult';
import useGetCurrAssessment from '@/hooks/useGetCurrAssessment';

const AssessmentResultList = () => {
    const { data, isLoading } = useListCurrTakings();
    const { data: assessment } = useGetCurrAssessment();

    if (isLoading) return <div>Loading...</div>;

    if (!assessment) return null;

    if (!data || data.length === 0) return <div className="mt-4">No one takes assessment yet.</div>;

    return (
        <div>
            <p className="mb-4 mt-2 text-base">
                {data.length} applicant{data.length === 1 ? '' : 's'} took this assessment
            </p>
            <div className="flex gap-6">
                <div className="max-w-[720px] flex-[2] space-y-6">
                    {data.map((result) => (
                        <AssessmentResult assessment={assessment} key={result.id} data={result} />
                    ))}
                </div>
                <div className="bg-image-doodles flex-1 rounded-xl opacity-50" />
            </div>
        </div>
    );
};

export default AssessmentResultList;
