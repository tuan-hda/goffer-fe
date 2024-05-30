import classNames from 'classnames';

type StatusProps = {
    status: 'opened' | 'working' | 'closed';
};

const Status = ({ status }: StatusProps) => {
    return (
        <span
            className={classNames({
                'text-yellow-600 hover:text-yellow-600': status === 'opened',
                'text-blue-600 hover:text-blue-600': status === 'working',
                'text-gray-600 hover:text-gray-600': status === 'closed',
            })}
        >
            {status[0].toUpperCase() + status.slice(1)}
        </span>
    );
};

export default Status;
