import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Badge } from '../ui/badge';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { TbArrowDown, TbExternalLink, TbLink } from 'react-icons/tb';

const Basic = () => {
    const { data: profile } = useSelfProfileQuery();

    if (!profile) return null;

    return (
        <div>
            <p className="font-medium text-black">Bio</p>
            <p className="mt-3">
                Passionate frontend developer with a knack for creating engaging user experiences. Skilled in a wide
                range of modern web technologies and tools, with a strong foundation in design principles and best
                practices. Committed to lifelong learning and staying at the cutting edge of technology.
            </p>

            <p className="mt-6 font-medium text-black">Skills</p>
            <div className="mt-3">
                {profile.skills?.map((skill, index) => (
                    <Badge
                        key={index}
                        variant="outline"
                        className="rounded-xl border-none bg-[#F4F4F4] px-3 py-2 text-sm font-normal"
                    >
                        {skill}
                    </Badge>
                ))}
            </div>

            <p className="mt-6 font-medium text-black">Tools</p>
            <div className="mt-3">
                {profile.tools?.map((skill, index) => (
                    <Badge
                        key={index}
                        variant="outline"
                        className="rounded-xl border-none bg-[#F4F4F4] px-3 py-2 text-sm font-normal"
                    >
                        {skill}
                    </Badge>
                ))}
            </div>

            <p className="mt-6 font-medium text-black">Resume</p>
            <button className="mt-3 w-full">
                <div className="flex items-center gap-3 rounded-xl bg-[#F4F4F4] p-4">
                    <div className="flex items-center justify-center rounded-xl bg-white p-2">
                        <BsFileEarmarkPdf className="text-xl text-red-500" />
                    </div>
                    <div className="text-left">
                        <p className="font-medium text-black">Hoang Dinh Anh Tuan.pdf</p>
                        <p className="font-light text-gray-400">280Kb</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                        Download <TbArrowDown />
                    </div>
                </div>
            </button>

            <p className="mt-6 font-medium text-black">Portfolio</p>
            <button className="mt-3 w-full">
                <div className="flex items-center gap-3 rounded-xl bg-[#F4F4F4] p-4">
                    <div className="flex items-center justify-center rounded-xl bg-white p-2">
                        <TbLink className="text-xl" />
                    </div>
                    <p className="font-medium text-black underline">Hoang Dinh Anh Tuan.pdf</p>
                    <div className="ml-auto flex items-center gap-1">
                        <TbExternalLink className="text-lg" />
                    </div>
                </div>
            </button>

            <p className="mt-6 font-medium text-black">Education</p>
            <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel nisl bibendum leo mattis ultrices
                sed non nulla. Proin justo orci, hendrerit non ex nec, suscipit venenatis urna.
            </p>
        </div>
    );
};

export default Basic;
