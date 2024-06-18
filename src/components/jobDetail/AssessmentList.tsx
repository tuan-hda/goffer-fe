import useListOrgAssessment from '@/hooks/useListOrgAssessment';
import { TbLoader } from 'react-icons/tb';
import AssessmentOrgItem from '../assessment/org/AssessmentOrgItem';
import useSetupJobStore from '@/stores/setupJobStore';
import { shallow } from 'zustand/shallow';
import { Assessment } from '@/types/assessment.type';

type AssessmentListProps = {
    isGlobal?: boolean;
};

const AssessmentList = ({ isGlobal }: AssessmentListProps) => {
    const { data: assessmentList, isLoading } = useListOrgAssessment({
        populate: 'owner',
        job: isGlobal ? 'all' : 'global',
    });
    const [data, setData] = useSetupJobStore((state) => [state.data, state.setData], shallow);
    const assessments = data.assessments;
    const setAssessments = (assessments: Assessment[]) => setData((state) => ({ ...state, assessments }));

    if (isLoading) {
        return (
            <div className="mt-10 flex h-[calc(100vh-280px)] items-center justify-center">
                <TbLoader className="animate-spin text-xl" />
            </div>
        );
    }

    if (!assessmentList || assessmentList.results.length === 0) {
        return <div className="mt-10">No assessment here.</div>;
    }

    const handlePick = (assessment: Assessment) => {
        const index = assessments.findIndex((a) => a.id === assessment.id);
        if (index === -1) {
            setAssessments([...assessments, assessment]);
        } else {
            setAssessments(assessments.filter((a) => a.id !== assessment.id));
        }
    };

    return (
        <div className="mt-6 grid grid-cols-3 gap-6">
            {assessmentList.results.map((assessment) => (
                <AssessmentOrgItem
                    onPick={handlePick}
                    picked={assessments.findIndex((a) => a.id === assessment.id) !== -1}
                    mode="pick"
                    key={assessment.id}
                    assessment={assessment}
                />
            ))}
        </div>
    );
};

export default AssessmentList;
