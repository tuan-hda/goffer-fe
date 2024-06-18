import { Assessment } from '@/types/assessment.type';
import AssessmentOrgItem from '../assessment/org/AssessmentOrgItem';

type AssessmentListOrderProps = {
    assessments: Assessment[];
    selectedAssessments: string[];
    refetch: () => void;
    handlePick: (assessment: Assessment) => void;
};

const AssessmentListOrder = ({ assessments, selectedAssessments, handlePick }: AssessmentListOrderProps) => {
    return (
        <div className="mt-6 grid grid-cols-3 gap-6">
            {assessments.length === 0 ? (
                <p className="col-span-full min-h-[271px]">Your namespace's assessments will be shown here.</p>
            ) : (
                assessments.map((assessment) => (
                    <div key={assessment.id}>
                        <AssessmentOrgItem
                            onPick={handlePick}
                            picked={selectedAssessments.includes(assessment.id)}
                            pickContent={<PickContent index={selectedAssessments.indexOf(assessment.id)} />}
                            mode="pick"
                            key={assessment.id}
                            assessment={assessment}
                        />
                    </div>
                ))
            )}
        </div>
    );
};

const PickContent = ({ index }: { index: number }) => {
    if (index === -1) return <div className="h-5 w-5 rounded-lg border border-black"></div>;
    return <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-black text-white">{index + 1}</div>;
};

export default AssessmentListOrder;
