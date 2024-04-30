import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Tab, Tabs } from '@nextui-org/react';
import { TbBaguette, TbCertificate, TbChevronDown, TbPaperclip, TbShare } from 'react-icons/tb';
import Basic from './Basic';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Editable } from '../common';

const RightPanel = () => {
    const { data: profile } = useSelfProfileQuery();
    if (!profile) return null;

    return (
        <div className="flex-1 text-sm">
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
            <Editable value="Senior Software Engineer" className="mt-2 font-semibold" />
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
