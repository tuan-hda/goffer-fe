import { Avatar, Button } from '@nextui-org/react';
import { isAxiosError } from 'axios';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { TbCamera, TbChevronLeft } from 'react-icons/tb';
import { uploadFileService } from 'src/services/file.service';
import { StartedInfo } from 'src/types/start.type';

type ThirdStepProps = {
    onContinue: () => void;
    onBack: () => void;
    info: StartedInfo;
    setInfo: React.Dispatch<React.SetStateAction<StartedInfo>>;
};

const ThirdStep = ({ onContinue, onBack, info, setInfo }: ThirdStepProps) => {
    const [loading, setLoading] = useState(false);
    const avatar = info.avatar;
    const setAvatar = (avatar: string) => {
        setInfo((prev) => ({ ...prev, avatar }));
    };
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
                setAvatar(image.url);
                ref.current!.value = '';
            }
            setLoading(false);
        }
    };

    return (
        <div>
            <p className="text-sm font-light text-black/40">Step 3/5</p>
            <h1 className="mt-4 font-serif text-4xl">Set your avatar</h1>
            <form /*onSubmit={handleSubmit}*/>
                {!avatar || loading ? (
                    <Button
                        isLoading={loading}
                        onClick={() => ref.current?.click()}
                        className="mt-5 w-[200px]"
                        variant="flat"
                    >
                        <TbCamera className="text-base" /> Upload
                    </Button>
                ) : (
                    <button
                        onClick={() => ref.current?.click()}
                        type="button"
                        className="group relative mx-auto mt-5 block h-32 w-32 rounded-full"
                    >
                        <Avatar src={avatar} className="h-full w-full" />
                        <div className="absolute left-0 top-0 flex h-full w-full rounded-full bg-gray-500/50 opacity-0 transition group-hover:opacity-100">
                            <span className="m-auto text-sm text-white">Change image</span>
                        </div>
                    </button>
                )}
                <input onChange={handleFileChange} type="file" accept=".png,.jpeg,.jpg" className="hidden" ref={ref} />
                <div className="mt-6 flex items-center gap-3">
                    <Button onClick={onBack} isIconOnly radius="full" variant="flat">
                        <TbChevronLeft className="text-lg" />
                    </Button>
                    <Button
                        type="submit"
                        isDisabled={!avatar || loading}
                        onClick={onContinue}
                        size="md"
                        color="primary"
                    >
                        Continue
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ThirdStep;
