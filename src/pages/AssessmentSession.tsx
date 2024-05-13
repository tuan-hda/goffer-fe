import { CodingSession, McqSession } from '@/components/assessment';
import { useParams } from 'react-router-dom';

const AssessmentSession = () => {
    const { type } = useParams();

    if (type === 'session') return <McqSession />;
    return <CodingSession />;
};

export default AssessmentSession;
