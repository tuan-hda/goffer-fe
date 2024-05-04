import { TbFile, TbFileUpload, TbLoader, TbX } from 'react-icons/tb';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { PiSparkleFill } from 'react-icons/pi';
import { Button } from '../ui/button';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { uploadFileService } from '@/services/file.service';
import { isAxiosError } from 'axios';
import { useDropzone } from 'react-dropzone';
import { fileSizeToString } from '@/utils/file';
import classNames from 'classnames';

type UploadPopoverProps = {
    trigger: React.ReactNode;
    fileUrl?: string;
    onAttach?: (fileUrl: string) => Promise<void>;
};

const UploadPopover = ({ trigger, fileUrl, onAttach }: UploadPopoverProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        (async () => {
            if (fileUrl) {
                try {
                    const response = await fetch(fileUrl);
                    const blob = await response.blob();
                    setFile(new File([blob], fileUrl.split('/').pop() || ''));
                } catch (error) {
                    console.log('Fetch file error:', error);
                }
            }
        })();
    }, [fileUrl]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[0];
        if (selectedFile.size > 50 * 1024 * 1024) {
            setError('File size should not exceed 50MB');
            setFile(null);
        } else {
            setError('');
            setFile(selectedFile);
        }
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const selectedFile = files[0];
            // Check if the file size is greater than 50MB
            if (selectedFile.size > 50 * 1024 * 1024) {
                setError('File size should not exceed 50MB');
                setFile(null);
            } else {
                setError('');
                setFile(selectedFile);
                if (ref.current) ref.current.value = '';
            }
        }
    };

    const handleSubmit = async () => {
        if (file) {
            try {
                setLoading(true);
                const uploadData = (await uploadFileService(file)).data;
                if (onAttach) {
                    await onAttach(uploadData.file.url);
                }

                setFile(null);
            } catch (error) {
                if (isAxiosError(error)) {
                    return setError(error.response?.data.message || 'An error occurred while uploading the file');
                }
                setError('An error occurred while uploading the file');
                console.log('Upload file error:', error);
            } finally {
                setLoading(false);
            }
        } else {
            if (onAttach) {
                await onAttach('');
            }
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>{trigger}</PopoverTrigger>
            <PopoverContent className="w-[400px] text-sm text-text">
                <input onChange={handleFileChange} type="file" ref={ref} className="hidden" />
                <div className="mb-5 flex items-center justify-between">
                    <p className="text-xl font-medium">Upload and attach files</p>
                    <PiSparkleFill className="text-xl" />
                </div>
                <div
                    {...getRootProps()}
                    className={classNames(
                        'flex flex-col items-center gap-1 rounded-xl border border-dashed p-4',
                        isDragActive ? 'border-primary' : 'border-black',
                    )}
                >
                    <input {...getInputProps()} />
                    <TbFileUpload className="text-5xl" />
                    <div>
                        {isDragActive ? (
                            'Drop the files here'
                        ) : (
                            <>
                                <button className="font-medium underline" onClick={() => ref.current?.click()}>
                                    Click to upload
                                </button>{' '}
                                or drag and drop
                            </>
                        )}
                    </div>
                    <p className="text-xs">Maximum size 50 MB.</p>
                </div>

                {error && <p className="mt-2 text-red-500">{error}</p>}

                {file && (
                    <div className="relative mt-4 flex items-start gap-4 rounded-xl border p-4">
                        <div className="rounded-lg border p-1">
                            <TbFile className="text-xl" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="break-words font-medium leading-[16px]">{file.name}</p>
                            <p className="mt-1 text-xs font-light">{fileSizeToString(file.size)}</p>
                        </div>
                        <div className="min-w-4 flex-shrink-0" />
                        <Button
                            onClick={() => setFile(null)}
                            className="absolute right-1 top-2 text-black"
                            variant="link"
                        >
                            <TbX className="text-base" />
                        </Button>
                    </div>
                )}

                <div className="-mx-4 mt-6 border-t" />

                <Button disabled={loading} onClick={handleSubmit} variant="black" className="mt-4 w-full flex-1">
                    {loading && <TbLoader className="mr-2 animate-spin text-base" />} Attach files
                </Button>
            </PopoverContent>
        </Popover>
    );
};

export default UploadPopover;
