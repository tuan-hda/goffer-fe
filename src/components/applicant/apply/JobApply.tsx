import ProgressFooter from '../common/ProgressFooter';
import { JobContent } from '../discover/job/JobDetail';

const JobApply = () => {
    return (
        <div className="mx-auto max-w-screen-md">
            <JobContent />
            <ProgressFooter />
        </div>
    );
};

export default JobApply;
