import ProgressFooter from '../common/ProgressFooter';
import { JobContent } from '../discover/job/JobDetail';

const JobApply = () => {
    return (
        <div className="mx-auto max-w-screen-md pb-24">
            <JobContent />
            <JobContent />
            <ProgressFooter />
        </div>
    );
};

export default JobApply;
