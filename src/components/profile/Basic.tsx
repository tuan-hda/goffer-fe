import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Badge } from '../ui/badge';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { TbArrowDown, TbExternalLink, TbLink, TbPencil } from 'react-icons/tb';
import { Editable } from '../common';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { User } from '@/types/user.type';

const Basic = () => {
    const { data } = useSelfProfileQuery();

    const [profile, setProfile] = useState<User>();

    useEffect(() => {
        setProfile(data);
    }, [data]);

    if (!profile) return null;

    return (
        <div>
            <p className="font-medium text-black">Bio</p>
            <Editable limit={400} setValue={(value) => setProfile({ ...profile, bio: value })} value={profile.bio} />

            <p className="mt-6 font-medium text-black">Skills</p>
            <Editable type="custom">
                <div>
                    {profile.skills?.map((skill, index) => (
                        <Badge key={index} variant="outline" className="rounded-xl px-3 py-2 text-sm font-normal">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </Editable>

            <p className="mt-6 font-medium text-black">Tools</p>
            <Editable type="custom" mode="new" name="tools">
                <div className="mt-3">
                    {profile.tools?.map((skill, index) => (
                        <Badge key={index} variant="outline" className="rounded-xl px-3 py-2 text-sm font-normal">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </Editable>

            <div className="group">
                <div className="mt-6 flex items-center justify-between">
                    <p className="font-medium text-black">Resume</p>
                    <Button size="icon" variant="ghost" className="opacity-0 transition group-hover:opacity-100">
                        <TbPencil className="text-lg" />
                    </Button>
                </div>
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
            </div>

            <div className="group">
                <div className="mt-6 flex items-center justify-between">
                    <p className="font-medium text-black">Portfolio</p>
                    <Button size="icon" variant="ghost" className="opacity-0 transition group-hover:opacity-100">
                        <TbPencil className="text-lg" />
                    </Button>
                </div>

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
            </div>

            <p className="mt-6 font-medium text-black">Education</p>
            <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel nisl bibendum leo mattis ultrices
                sed non nulla. Proin justo orci, hendrerit non ex nec, suscipit venenatis urna.
            </p>
        </div>
    );
};

export default Basic;
