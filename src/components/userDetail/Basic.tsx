import { User } from '@/types/user.type';
import { Badge } from '../ui/badge';
import { Link } from 'react-router-dom';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { TbArrowDown } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import { fileSizeToString } from '@/utils/file';
import moment from 'moment';

interface Props {
    data: User;
}

const Basic = ({ data }: Props) => {
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        (async () => {
            if (data.resume) {
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
        <div>
            {data.oneLiner && (
                <>
                    <p className="my-4 text-3xl font-semibold">{data.oneLiner}</p>
                    <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />
                </>
            )}
            {data.skills && data.skills.length > 0 && (
                <>
                    <p className="mb-5 mt-8 self-start text-xs font-light text-gray-500">SKILLS</p>
                    <div className="flex flex-wrap items-start gap-4">
                        {data.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="rounded-xl px-3 py-2 text-sm font-normal">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </>
            )}
            {data.tools && data.tools.length > 0 && (
                <>
                    <p className="mb-5 mt-8 self-start text-xs font-light text-gray-500">TOOLS</p>
                    <div className="flex flex-wrap items-start gap-4">
                        {data.tools.map((tool, index) => (
                            <Badge key={index} variant="outline" className="rounded-xl px-3 py-2 text-sm font-normal">
                                {tool}
                            </Badge>
                        ))}
                    </div>
                </>
            )}
            {data.resume && (
                <>
                    <p className="mb-5 mt-8 self-start text-xs font-light text-gray-500">RESUME</p>
                    <Link to={data.resume} target="_blank" className="mt-1 w-full">
                        <div className="flex w-full items-center gap-4 rounded-xl bg-[#F4F4F4] p-4">
                            <div className="flex items-center justify-center rounded-xl bg-white p-2">
                                <BsFileEarmarkPdf className="text-xl text-red-500" />
                            </div>
                            <div className="min-w-0 flex-1 text-left">
                                <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-medium text-black">
                                    CV - {data.name}.pdf
                                </p>
                                <p className="font-light text-gray-400">{file?.size && fileSizeToString(file.size)}</p>
                            </div>
                            <div className="ml-auto flex items-center gap-1">
                                Download <TbArrowDown />
                            </div>
                        </div>
                    </Link>
                </>
            )}
            {data.education && data.education.length > 0 && (
                <>
                    <p className="mb-5 mt-8 self-start text-xs font-light text-gray-500">EDUCATIONS</p>
                    {data.education.map((education, index) => (
                        <div key={index}>
                            <p className="font-medium text-black">
                                {education.degree && `${education.degree} at `} {education.school}
                            </p>
                            <div className="flex gap-2">
                                {education.major && (
                                    <>
                                        <p>{education.major}</p>
                                        <span>•</span>
                                    </>
                                )}
                                {(education.startDate || education.endDate) && (
                                    <p className="text-sm">
                                        {education.startDate && moment(education.startDate).format('MM/YYYY')}
                                        {education.endDate && ' - ' + moment(education.endDate).format('MM/YYYY')}
                                    </p>
                                )}
                            </div>
                            <p className="text-gray-500">{education.description}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Basic;
