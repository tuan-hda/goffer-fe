import classNames from 'classnames';

type StatusProps = {
    status: 'pending' | 'in_progress' | 'resolved';
};

const Status = ({ status }: StatusProps) => {
    return (
        <span
            className={classNames({
                'text-yellow-600 hover:text-yellow-600': status === 'pending',
                'text-blue-600 hover:text-blue-600': status === 'in_progress',
                'text-gray-600 hover:text-gray-600': status === 'resolved',
            })}
        >
            {status === 'pending' && 'Pending'}
            {status === 'in_progress' && 'In Progress'}
            {status === 'resolved' && 'Resolved'}
        </span>
    );
};

export default Status;
