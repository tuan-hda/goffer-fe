import classNames from 'classnames';
import { Badge } from '../ui/badge';
import Status from './Status';

type ReportProps = {
    title: string;
    description: string;
    status: 'pending' | 'in_progress' | 'resolved';
    selected?: boolean;
    onClick: () => void;
};

const Report = ({ title, description, status, selected, onClick }: ReportProps) => {
    return (
        <div
            onClick={onClick}
            className={classNames('cursor-pointer p-6 transition hover:bg-gray-50', selected && 'bg-gray-100')}
        >
            <p className="font-medium">{title}</p>
            <p className="mt-1 text-gray-600">{description}</p>
            <Badge variant="outline" className="mt-3">
                <Status status={status} />
            </Badge>
        </div>
    );
};

export default Report;
