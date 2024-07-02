import useApplyJob from '@/hooks/useApplyJob';
import { fileSizeToString } from '@/utils/file';
import { Avatar } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { TbArrowDown } from 'react-icons/tb';
import { Link } from 'react-router-dom';

interface Props {
    jobId?: string;
}

const Resume = ({ jobId }: Props) => {
    const { data } = useApplyJob(jobId || '');
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        (async () => {
            if (data?.resume) {
                try {
                    const response = await fetch(data.resume);
                    const blob = await response.blob();
                    setFile(new File([blob], data.resume.split('/').pop() || ''));
                } catch (error) {
                    console.log('Fetch file error:', error);
                }
            }
        })();
    }, [data]);

    return (
        <div className="mt-8 flex flex-row">
            <div className="flex h-fit flex-row">
                <Avatar src={data?.profilePicture} className="h-[320px] w-[320px] rounded-3xl object-cover" />

                <div className="mx-12 border-l-2 border-dashed border-gray-100" />
            </div>

            <div className="flex-1">
                <p className="mb-5 font-serif-2 text-3xl font-medium text-black">{data?.name}</p>
                <div className="flex flex-row gap-4">
                    <div className="flex-1">
                        <>
                            <p className="mb-5 mt-8 self-start text-xs font-light text-gray-500">ROLE</p>
                            <p className="font-medium text-black">{data?.role}</p>
                        </>
                        <>
                            <p className="mb-5 mt-8 self-start text-xs font-light text-gray-500">EMAIL</p>
                            <p className="font-medium text-black">{data?.email}</p>
                        </>
                        <>
                            <p className="mb-5 mt-8 self-start text-xs font-light text-gray-500">PHONE NUMBER</p>
                            <p className="font-medium text-black">{data?.phoneNumber}</p>
                        </>
                    </div>
                    <div className="flex-1">
                        {data?.location && (
                            <>
                                <p className="mb-5 mt-8 self-start text-xs font-light text-gray-500">LOCATION</p>
                                <p className="font-medium text-black">{data?.location}</p>
                            </>
                        )}
                        {data?.linkedIn && (
                            <>
                                <p className="mb-5 mt-8 self-start text-xs font-light text-gray-500">LINKEDIN</p>
                                <p className="font-medium text-black">{data?.linkedIn}</p>
                            </>
                        )}
                        {data?.personalWebsite && (
                            <>
                                <p className="mb-5 mt-8 self-start text-xs font-light text-gray-500">
                                    PERSONAL WEBSITE
                                </p>
                                <p className="font-medium text-black">{data?.personalWebsite}</p>
                            </>
                        )}
                    </div>
                </div>
                <>
                    <p className="mb-5 mt-12 self-start text-xs font-light text-gray-500">RESUME</p>
                    <Link to={data?.resume!} target="_blank" className="mt-1 w-full">
                        <div className="flex w-full items-center gap-4 rounded-xl bg-[#F4F4F4] p-4">
                            <div className="flex items-center justify-center rounded-xl bg-white p-2">
                                <BsFileEarmarkPdf className="text-xl text-red-500" />
                            </div>
                            <div className="min-w-0 flex-1 text-left">
                                <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-medium text-black">
                                    CV - {data?.name}.pdf
                                </p>
                                <p className="font-light text-gray-400">{file?.size && fileSizeToString(file.size)}</p>
                            </div>
                            <div className="ml-auto flex items-center gap-1">
                                Download <TbArrowDown />
                            </div>
                        </div>
                    </Link>
                </>
            </div>
        </div>
    );
};

export default Resume;
