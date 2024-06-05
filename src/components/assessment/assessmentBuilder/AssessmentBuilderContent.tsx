import AssessmentBuilderQuestionPick from './AssessmentBuilderQuestionPick';
import AssessmentBuilderConfigure from './AssessmentBuilderConfigure';
import AssessmentBuilderBasic from './AssessmentBuilderBasic';

const AssessmentBuilderContent = () => {
    return (
        <div>
            <div className="flex flex-col pt-6">
                <AssessmentBuilderBasic />

                <div className="mt-12 border-t" />

                <AssessmentBuilderConfigure />

                <div className="mt-12 border-t" />

                <AssessmentBuilderQuestionPick />

                <div className="h-20"></div>
            </div>
        </div>
    );
};

export default AssessmentBuilderContent;
