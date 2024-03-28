import { Button, ButtonProps, Progress } from '@nextui-org/react';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface Props {
    rate?: number;
    startContent?: ReactNode;
    onStartPress?: () => void;
    endContent?: ReactNode;
    onEndPress?: () => void;
    startProps?:ButtonProps
    endProps?:ButtonProps
}

const ProgressFooter = ({ rate, startContent, endContent, onStartPress, onEndPress, startProps, endProps }: Props) => {
    return (
        <div className="fixed bottom-0 left-0 h-20 w-full bg-pale shadow-[0_-4px_6px_1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)]">
            {rate !== undefined && <Progress size="sm" color="primary" aria-label="Loading..." value={rate} />}
            <div className="mx-auto flex h-full max-w-screen-md flex-row items-center justify-between">
                <div>
                    {(onStartPress || startContent) && (
                        <Button
                            className={classNames(rate !== undefined && 'mb-1')}
                            color="secondary"
                            radius="sm"
                            variant="solid"
                            onPress={onStartPress}
                            {...startProps}
                        >
                            {startContent ? startContent : 'Back'}
                        </Button>
                    )}
                </div>
                <>
                    <Button
                        className={classNames(rate !== undefined && 'mb-1')}
                        color="primary"
                        radius="sm"
                        variant="solid"
                        onPress={onEndPress}
                        {...endProps}
                    >
                        {endContent}
                    </Button>
                </>
            </div>
        </div>
    );
};

export default ProgressFooter;
