import { Badge } from '../ui/badge';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { TbArrowDown, TbPencil } from 'react-icons/tb';
import { Editable, UploadPopover } from '../common';
import { Button } from '../ui/button';
import skills from '@/data/skills';
import tools from '@/data/tools';
import EducationForm from './EducationForm';
import useUpdateProfile from '@/hooks/useUpdateProfile';

const Basic = () => {
    const { profile, setProfile, loading, cancelUpdate, updateProfile } = useUpdateProfile();

    if (!profile) return null;

    return (
        <div>
            <p className="font-medium text-black">Bio</p>
            <Editable
                saving={loading}
                mode={profile.bio ? 'active' : 'new'}
                limit={400}
                name="bio"
                placeholder="Tell us about yourself..."
                setValue={(value) => setProfile({ ...profile, bio: value })}
                value={profile.bio}
                onCancel={cancelUpdate('bio')}
                onSave={() => updateProfile({ bio: profile.bio })}
            />

            <p className="mt-6 font-medium text-black">Skills</p>
            <Editable
                partialDelete={profile.skills && profile.skills.length === 3}
                type="multi-selector"
                mode={!profile.skills || profile.skills.length === 0 ? 'new' : 'active'}
                values={profile.skills}
                setValues={(values) => setProfile({ ...profile, skills: values.map((value) => value.value) })}
                saving={loading}
                onCancel={cancelUpdate('skills')}
                onSave={() => updateProfile({ skills: profile.skills })}
                placeholder="Select your skills..."
                limit={3}
                options={skills}
            >
                <div className="flex flex-wrap gap-4">
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
                mode={!profile.tools || profile.tools.length === 0 ? 'new' : 'active'}
                name="tools"
                saving={loading}
                onCancel={cancelUpdate('tools')}
                onSave={() => updateProfile({ tools: profile.tools })}
                limit={7}
                options={tools}
            >
                <div className="flex flex-wrap gap-4">
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
                <button className="mt-1 w-full">
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
            <Editable
                mode="new"
                deletable
                type="custom"
                name="education"
                placeholder="Enter your education..."
                setValue={(value) => setProfile({ ...profile, bio: value })}
                value={profile.bio}
                custom={<EducationForm />}
            ></Editable>
        </div>
    );
};

export default Basic;
