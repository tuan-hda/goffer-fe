import useSetupJobStore from '@/stores/setupJobStore';
import { Assessment } from '@/types/assessment.type';
import { shallow } from 'zustand/shallow';
import AssessmentOrgItem from '../assessment/org/AssessmentOrgItem';

const AssessmentListOrder = () => {
    const [data, setData] = useSetupJobStore((state) => [state.data, state.setData], shallow);
    const assessments = data.assessments;
    const setAssessments = (assessments: Map<string, Assessment>) => setData((state) => ({ ...state, assessments }));

    const handlePick = (assessment: Assessment) => {
        const newAssessments = new Map(assessments);
        if (newAssessments.has(assessment.id)) {
            newAssessments.delete(assessment.id);
        } else {
            newAssessments.set(assessment.id, assessment);
        }
        setAssessments(newAssessments);
    };

    return (
        <div className="mt-6 grid grid-cols-3 gap-6">
            {assessments.size === 0 ? (
                <p className="min-h-[271px]">You have not selected any assessment</p>
            ) : (
                Array.from(assessments).map(([_, assessment], index) => (
                    <div key={assessment.id}>
                        <p className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl p-2 text-lg shadow-small">
                            {index + 1}
                        </p>
                        <AssessmentOrgItem
                            onPick={handlePick}
                            picked={assessments.has(assessment.id)}
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

export default AssessmentListOrder;
