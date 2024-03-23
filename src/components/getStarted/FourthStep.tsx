import { Button, Input } from '@nextui-org/react';
import { isAxiosError } from 'axios';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { TbChevronLeft, TbFileUpload, TbUpload, TbX } from 'react-icons/tb';
import { uploadFileService } from 'src/services/file.service';
import { StartedInfo } from 'src/types/start.type';

type FourthStepProps = {
    onContinue: () => void;
    onBack: () => void;
    info: StartedInfo;
    setInfo: React.Dispatch<React.SetStateAction<StartedInfo>>;
};

const FourthStep = ({ onContinue, onBack, info, setInfo }: FourthStepProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const refDoc = info.refDoc;
    const setRefDoc = (refDoc: string) => setInfo((prev) => ({ ...prev, refDoc }));
    const [type, setType] = useState<'default' | 'linkedin' | 'file'>('file');
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('Academic Transcript.pdf');

    const [isValid, setIsValid] = useState(false);

    const upload = async (file: File) => {
        try {
            const response = await uploadFileService(file);
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRefDoc(e.target.value);
        if (e.target.value) {
            setType('linkedin');
            setIsValid(/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[^/]+\/?$/.test(e.target.value));
        } else {
            setType('default');
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const name = file?.name;
        if (file) {
            setLoading(true);
            const cvFile = (await upload(file))?.file;
            if (cvFile) {
                setRefDoc(cvFile.url);
                setName(name || '');
                setType('file');
                ref.current!.files = null;
            }
            setLoading(false);
        }
    };

    const handleDelete = () => {
        setRefDoc('');
        setName('');
        setType('default');
    };

    return (
        <div>
            <p className="text-sm font-light text-black/40">Step 4/4</p>
            <h1 className="mt-4 font-serif text-4xl">Get better insight</h1>
            <p className="mt-2 text-sm text-text">Drop your CV or LinkedIn to help us understand you</p>
            <form className="mt-5" /*onSubmit={handleSubmit}*/>
                {['linkedin', 'default'].includes(type) && (
                    <Input
                        onChange={handleChange}
                        placeholder="Your LinkedIn profile url"
                        className="w-[300px]"
                        classNames={{
                            inputWrapper: 'h-10',
                        }}
                    />
                )}
                {type === 'default' && <p className="my-3 w-[300px] border-t border-t-gray-100"></p>}
                {type === 'default' && (
                    <>
                        <Button
                            isLoading={loading}
                            onClick={() => ref.current?.click()}
                            className="w-[140px] border"
                            variant="faded"
                        >
                            <TbUpload className="text-base" /> Upload CV
                        </Button>
                        <input
                            onChange={handleFileChange}
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            ref={ref}
                        />
                        <p className="mt-1 text-sm text-text/60">Accept .pdf, .doc, .docx</p>
                    </>
                )}
                {type === 'file' && name && (
                    <div className="group relative flex w-fit max-w-full items-center gap-2 rounded-lg border p-4 text-sm">
                        <TbFileUpload className="text-base" />
                        {name}
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="absolute -right-1 -top-2 hidden rounded-full border bg-white p-0.5 group-hover:block"
                        >
                            <TbX />
                        </button>
                    </div>
                )}

                <div className="mt-6 flex items-center gap-3">
                    <Button onClick={onBack} isIconOnly radius="full" variant="flat">
                        <TbChevronLeft className="text-lg" />
                    </Button>
                    <Button onClick={onBack} variant="flat">
                        Skip
                    </Button>
                    <Button
                        type="submit"
                        isDisabled={!refDoc || loading || (!isValid && !name) || type === 'default'}
                        onClick={onContinue}
                        size="md"
                        color="primary"
                    >
                        Finish
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FourthStep;
