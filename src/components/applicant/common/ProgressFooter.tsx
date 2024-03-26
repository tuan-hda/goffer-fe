import { Button, Progress } from '@nextui-org/react';

const ProgressFooter = () => {
    return (
        <div className="fixed bottom-0 left-0 h-20 w-full bg-pale shadow-inner">
            <Progress size="sm" color="primary" aria-label="Loading..." value={70} />
            <div className="mx-auto flex h-full max-w-screen-md flex-row items-center justify-end">
                <Button className="mb-1" color="primary" radius="sm" variant="solid">
                    Apply to this job
                </Button>
            </div>
        </div>
    );
};

export default ProgressFooter;
