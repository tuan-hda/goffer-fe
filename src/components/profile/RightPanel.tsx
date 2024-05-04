import { Tab, Tabs } from '@nextui-org/react';
import { TbBaguette, TbChevronDown, TbPaperclip, TbShare } from 'react-icons/tb';
import Basic from './Basic';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Editable } from '../common';
import Experiences from './Experiences';
import useUpdateProfile from '@/hooks/useUpdateProfile';
import { User } from '@/types/user.type';

const RightPanel = () => {
    const { profile, setProfile, cancelUpdate, updateProfile, loading } = useUpdateProfile();
    if (!profile) return null;

    return (
        <div className="min-w-0 flex-1 text-sm">
            <div className="flex items-center">
                <h1 className="font-serif text-4xl font-black text-black">{profile.name}</h1>
                <Button variant="outline" size="icon" className="ml-auto">
                    <TbShare className="text-lg" />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="ml-2">
                        <Button variant="outline" className="bg-[#F5F6F9]">
                            Unavailable <TbChevronDown className="ml-2" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Unavailable</DropdownMenuItem>
                        <DropdownMenuItem>Open to job</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Editable
                saving={loading}
                value={profile.oneLiner}
                setValue={(v) =>
                    setProfile(
                        (prev) =>
                            ({
                                ...prev,
                                oneLiner: v,
                            }) as User,
                    )
                }
                onSave={() => updateProfile({ oneLiner: profile.oneLiner })}
                onCancel={cancelUpdate('oneLiner')}
                mode={profile.oneLiner ? 'active' : 'new'}
                name="brief intro"
                className="mt-2 font-semibold"
            />
            <div className="-mx-2 w-full">
                <Tabs variant="underlined" className="-mx-2 mt-10">
                    <Tab
                        key="profile"
                        title={
                            <span className="flex items-center gap-2">
                                <TbPaperclip className="text-lg" /> Profile
                            </span>
                        }
                    >
                        <Basic />
                    </Tab>
                    <Tab
                        key="experience"
                        title={
                            <span className="flex items-center gap-2">
                                <TbBaguette className="text-lg" /> Experiences
                            </span>
                        }
                    >
                        <Experiences />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default RightPanel;
