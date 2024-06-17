import { uploadFileService } from '@/services/file.service';
import { fileSizeToString } from '@/utils/file';
import { isAxiosError } from 'axios';
import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { TbFile, TbFileUpload, TbLoader, TbX } from 'react-icons/tb';
import { Button } from '../ui/button';

type UploadProps = {
    fileUrl?: string;
    onAttach?: ((fileUrl: string) => Promise<void>) | ((fileUrl: string) => void);
    className?: string;
    showingImage?: boolean;
    directUpload?: boolean;
    onDelete?: () => void;
    accept?: string;
};

const Upload = ({ fileUrl, showingImage, directUpload, onAttach, className, onDelete, accept }: UploadProps) => {
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
            } else {
                setFile(null);
            }
        })();
    }, [fileUrl]);

    const handleFileChange = (file: File) => {
        if (file.size > 50 * 1024 * 1024) {
            setError('File size should not exceed 50MB');
            setFile(null);
        } else {
            setError('');
            if (directUpload) {
                handleSubmit(file);
            } else {
                setFile(file);
            }
            if (ref.current) ref.current.value = '';
        }
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[0];
        handleFileChange(selectedFile);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFileChange(file);
        }
    };

    const handleSubmit = async (outerFile?: File) => {
        const innerFile = outerFile || file;
        if (innerFile) {
            try {
                setLoading(true);
                const uploadData = (await uploadFileService(innerFile)).data;
                if (onAttach) {
                    await onAttach(uploadData.file.url);
                }

                if (!directUpload) {
                    setFile(null);
                }
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
        <div className={className}>
            <input
                accept={accept}
                onChange={handleChange}
                type="file"
                ref={ref}
                className="pointer-events-none hidden"
            />

            <div
                {...getRootProps()}
                className={classNames(
                    'flex h-32 flex-col items-center justify-center gap-1 rounded-xl border border-dashed',
                    isDragActive ? 'border-primary' : 'border-black',
                )}
            >
                {directUpload && loading ? (
                    <div>
                        <TbLoader className="animate-spin text-2xl" />
                    </div>
                ) : (
                    <>
                        <input {...getInputProps()} />
                        <TbFileUpload className="text-5xl" />
                        <div>
                            {isDragActive ? (
                                'Drop the files here'
                            ) : (
                                <>
                                    <button className="mr-1 font-medium underline" onClick={() => ref.current?.click()}>
                                        Click to upload
                                    </button>
                                    <span>or drag and drop</span>
                                </>
                            )}
                        </div>
                        <p className="text-xs">Maximum size 50 MB.</p>
                    </>
                )}
            </div>

            {error && <p className="mt-2 text-red-500">{error}</p>}

            {file &&
                (showingImage ? (
                    <div className="relative w-full">
                        <img
                            className="mt-4 aspect-video w-full rounded-xl object-cover"
                            src={URL.createObjectURL(file)}
                        />
                        <Button
                            onClick={() => {
                                setFile(null);
                                onDelete && onDelete();
                            }}
                            variant="outline"
                            className="absolute right-2 top-2 opacity-80"
                            size="icon"
                            type="button"
                        >
                            <TbX className="text-lg" />
                        </Button>
                    </div>
                ) : (
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
                ))}

            {onAttach && !directUpload && (
                <Button
                    disabled={loading}
                    onClick={() => handleSubmit()}
                    variant="black"
                    className="mt-4 w-full flex-1"
                >
                    {loading && <TbLoader className="mr-2 animate-spin text-base" />} Attach files
                </Button>
            )}
        </div>
    );
};

export default Upload;
