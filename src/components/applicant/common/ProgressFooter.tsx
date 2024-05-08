import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface Props {
    rate?: number;
    startContent?: ReactNode;
    onStartPress?: () => void;
    endContent?: ReactNode;
    onEndPress?: () => void;
}

const ProgressFooter = ({ rate, startContent, endContent, onStartPress, onEndPress }: Props) => {
    return (
        <div className="fixed bottom-0 left-0 z-[1] w-full">
            {rate !== undefined && <Progress color="default" className="h-1" aria-label="Loading..." value={rate} />}
        </div>
    );
};

export default ProgressFooter;
