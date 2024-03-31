import { Spinner } from '@nextui-org/react';
import classNames from 'classnames';

type LoadingProps = {
    className?: string;
};

const Loading = ({ className }: LoadingProps) => {
    return (
        <Spinner
            classNames={{
                circle1: 'border-b-black',
                circle2: 'border-b-black',
            }}
            className={classNames('scale-50', className)}
        />
    );
};

export default Loading;
