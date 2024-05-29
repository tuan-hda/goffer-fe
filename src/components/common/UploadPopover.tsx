import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import React from 'react';
import Upload from './Upload';
import { PiSparkleFill } from 'react-icons/pi';

type UploadPopoverProps = {
    trigger: React.ReactNode;
    fileUrl?: string;
    onAttach?: (fileUrl: string) => Promise<void>;
};

const UploadPopover = ({ trigger, fileUrl, onAttach }: UploadPopoverProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>{trigger}</PopoverTrigger>
            <PopoverContent className="w-[400px] text-sm text-text">
                <div className="mb-3 flex items-center justify-between">
                    <p className="text-xl font-medium">Upload and attach files</p>
                    <PiSparkleFill className="text-xl" />
                </div>
                <Upload fileUrl={fileUrl} onAttach={onAttach} />
            </PopoverContent>
        </Popover>
    );
};

export default UploadPopover;
