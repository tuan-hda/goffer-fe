import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Tab, Tabs } from '@nextui-org/react';
import { TbBaguette, TbCertificate, TbChevronDown, TbPaperclip, TbSparkles } from 'react-icons/tb';
import Basic from './Basic';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';

const RightPanel = () => {
    const { data: profile } = useSelfProfileQuery();
    if (!profile) return null;

    return (
        <div className="flex-1 text-sm">
            <div className="flex items-center justify-between">
                <h1 className="font-serif text-4xl font-black text-black">{profile.name}</h1>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            Unavailable <TbChevronDown className="ml-2" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Unavailable</DropdownMenuItem>
                        <DropdownMenuItem>Open to job</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="mt-4 flex items-center text-base font-semibold">
                Senior Software Engineer <TbSparkles className="ml-2 text-lg" />
            </div>
            <div className="-mx-2">
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
                    ></Tab>
                    <Tab
                        key="certification"
                        title={
                            <span className="flex items-center gap-2">
                                <TbCertificate className="text-lg" /> Certifications
                            </span>
                        }
                    ></Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default RightPanel;
