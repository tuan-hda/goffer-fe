import { Button } from '@nextui-org/react';
import React from 'react';

const ProgressFooter = () => {
    return (
        <div className="absolute bottom-0 left-0 flex h-16 w-screen flex-row items-center bg-pale/50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Button color="primary" radius="sm" variant="solid">
                Apply to this job
            </Button>
        </div>
    );
};

export default ProgressFooter;
