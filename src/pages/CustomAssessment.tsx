import AssessmentList from '@/components/jobDetail/AssessmentList';
import AssessmentListOrder from '@/components/jobDetail/AssessmentListOrder';

const CustomAssessment = () => {
    return (
        <div className="w-full text-sm">
            <div className="flex items-center">
                <div>
                    <h1 className="text-3xl">Custom Assessments (optional)</h1>
                    <p className="mb-6 mt-2 text-text/70">
                        Add assessments to evaluate the candidate's skills and knowledge.{' '}
                    </p>
                </div>
            </div>

            <div className="mx-auto">
                <p className="text-base font-semibold">Selected assessment</p>
                <AssessmentListOrder />
                <div className="my-14 border-t"></div>
                <p className="text-base font-semibold">Your assessments</p>
                <AssessmentList />
            </div>
        </div>
    );
};

export default CustomAssessment;
