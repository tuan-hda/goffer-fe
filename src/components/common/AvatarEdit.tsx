import { Avatar, Button } from '@nextui-org/react';
import { isAxiosError } from 'axios';
import classNames from 'classnames';
import { useRef } from 'react';
import { toast } from 'sonner';
import { TbCamera } from 'react-icons/tb';
import { uploadFileService } from '@/services/file.service';

type AvatarEditProps = {
    avatar?: string;
    setAvatar: (_: string) => void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
    uploadClassName?: string;
    disabled?: boolean;
};

const AvatarEdit = ({
    avatar,
    setAvatar,
    loading,
    setLoading,
    className,
    uploadClassName,
    disabled,
}: AvatarEditProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const upload = async (file: File) => {
        try {
            const response = await uploadFileService(file, 'avatar');
            return response.data;
        } catch (error) {
            console.log('Error uploading file:', error);
            if (isAxiosError(error)) {
                toast.error(error.response?.data.message || 'Error uploading file. Please try again.');
                return;
            }
            toast.error('Error uploading file. Please try again.');
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setLoading(true);
            const image = (await upload(file))?.file;
            if (image) {
                setAvatar(image.secure_url);
                ref.current!.files = null;
            }
            setLoading(false);
        }
    };

    return (
        <>
            {!avatar || loading ? (
                <Button
                    isLoading={loading}
                    onClick={() => ref.current?.click()}
                    className={classNames('w-[200px] border', uploadClassName)}
                    variant="faded"
                    disabled={disabled}
                >
                    <TbCamera className="text-base" /> Upload
                </Button>
            ) : (
                <button
                    onClick={() => ref.current?.click()}
                    type="button"
                    className={classNames('group relative mx-auto block h-[100px] w-[100px] rounded-full', className)}
                    disabled={disabled}
                >
                    <Avatar src={avatar} className="h-full w-full" />
                    {!disabled && (
                        <div className="absolute left-0 top-0 flex h-full w-full rounded-full bg-gray-500/50 opacity-0 transition group-hover:opacity-100">
                            <span className="m-auto text-sm text-white">Change</span>
                        </div>
                    )}
                </button>
            )}
            <input onChange={handleFileChange} type="file" accept=".png,.jpeg,.jpg" className="hidden" ref={ref} />
        </>
    );
};

export default AvatarEdit;
