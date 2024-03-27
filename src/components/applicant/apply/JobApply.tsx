import { useNavigate } from 'react-router-dom';
import ProgressFooter from '../common/ProgressFooter';
import { JobContent } from '../discover/job/JobDetail';

const JobApply = () => {
    const navigate = useNavigate();
    return (
        <div className="mx-auto max-w-screen-md pb-36">
            <JobContent />
            <ProgressFooter endContent="Apply to this Job" onEndPress={() => navigate('application')} />
        </div>
    );
};

export default JobApply;
