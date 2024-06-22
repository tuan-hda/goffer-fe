import { Tab, Tabs } from '@nextui-org/react';
import { TbBaguette, TbChevronDown, TbCirclePlus, TbPaperclip, TbPrompt, TbShare, TbSparkles } from 'react-icons/tb';
import Basic from './Basic';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Editable } from '../common';
import Experiences from './Experiences';
import useUpdateProfile from '@/hooks/useUpdateProfile';
import { User } from '@/types/user.type';
import Recommendations from './Recommendations';
import { Link } from 'react-router-dom';
import ProjectList from './ProjectList';
import { useEffect, useState } from 'react';
import GenerateProfileWithAI from './GenerateProfileWithAI';
import useListRecommendations from '@/hooks/useListRecommendations';

const RightPanel = () => {
    const { profile, setProfile, cancelUpdate, updateProfile, loading } = useUpdateProfile();
    const [selectedKey, setSelectedKey] = useState<string | number | null | undefined>();

    const { data: recommendations, refetch } = useListRecommendations(profile?.id, true);

    useEffect(() => {
        const search = new URLSearchParams(window.location.search);
        const tab = search.get('tab');
        if (tab && ['profile', 'experience', 'projects', 'recommendations'].includes(tab)) {
            setSelectedKey(tab);
        }
    }, []);

    if (!profile) return null;

    return (
        <div className="min-w-0 flex-1 text-sm">
            <div className="flex items-center">
                <h1 className="mr-auto font-serif text-4xl font-black text-black">{profile.name}</h1>
                <GenerateProfileWithAI />
                <Button variant="outline" size="icon" className="ml-2">
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
                <Tabs
                    selectedKey={selectedKey}
                    onSelectionChange={(value) => {
                        setSelectedKey(value);
                    }}
                    variant="underlined"
                    className="-mx-2 mt-10"
                >
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
                    <Tab
                        key="projects"
                        title={
                            <span className="flex items-center gap-2">
                                <TbPrompt className="text-lg" /> Projects
                            </span>
                        }
                    >
                        <div className="h-2"></div>
                        <ProjectList />
                        <div className="h-7"></div>
                        <Button className="h-10 w-full gap-3" variant="outline" asChild>
                            <Link to="/project/new">
                                <TbCirclePlus className="text-base" />
                                Add project
                            </Link>
                        </Button>
                    </Tab>
                    <Tab
                        key="recommendations"
                        title={
                            <span className="flex items-center gap-2">
                                <TbSparkles className="text-lg" /> Recommendations
                            </span>
                        }
                    >
                        <Recommendations refetch={refetch} recommendations={recommendations?.results || []} />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default RightPanel;
