import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Badge } from '../ui/badge';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { TbArrowDown, TbPencil } from 'react-icons/tb';
import { Editable, UploadPopover } from '../common';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { User } from '@/types/user.type';
import skills from '@/data/skills';
import tools from '@/data/tools';

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
            <Editable
                mode="new"
                limit={400}
                name="bio"
                setValue={(value) => setProfile({ ...profile, bio: value })}
                value={profile.bio}
            />

            <p className="mt-6 font-medium text-black">Skills</p>
            <Editable
                partialDelete={profile.skills && profile.skills.length === 3}
                type="multi-selector"
                values={profile.skills}
                setValues={(values) => setProfile({ ...profile, skills: values.map((value) => value.value) })}
                placeholder="Select your skills..."
                limit={3}
                options={skills}
            >
                <div className="flex flex-wrap gap-2">
                    {profile.skills?.map((skill, index) => (
                        <Badge key={index} variant="outline" className="rounded-xl px-3 py-2 text-sm font-normal">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </Editable>

            <p className="mt-6 font-medium text-black">Tools</p>
            <Editable
                partialDelete={profile.tools && profile.tools.length === 7}
                type="multi-selector"
                values={profile.tools || []}
                setValues={(values) => setProfile({ ...profile, tools: values.map((value) => value.value) })}
                placeholder="Select your tools..."
                mode="new"
                name="tools"
                limit={7}
                options={tools}
            >
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
                    <UploadPopover
                        trigger={
                            <Button
                                size="icon"
                                variant="ghost"
                                className="opacity-0 transition group-hover:opacity-100"
                            >
                                <TbPencil className="text-lg" />
                            </Button>
                        }
                    />
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

            <p className="mt-6 font-medium text-black">Education</p>
            <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel nisl bibendum leo mattis ultrices
                sed non nulla. Proin justo orci, hendrerit non ex nec, suscipit venenatis urna.
            </p>
        </div>
    );
};

export default Basic;
