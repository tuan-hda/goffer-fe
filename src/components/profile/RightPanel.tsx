import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Tab, Tabs } from '@nextui-org/react';
import { TbBaguette, TbCertificate, TbNumber, TbPaperclip } from 'react-icons/tb';
import Basic from './Basic';

const RightPanel = () => {
    const { data: profile } = useSelfProfileQuery();
    if (!profile) return null;

    return (
        <div>
            <h1 className="font-serif text-4xl font-bold text-black">{profile.name}</h1>
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
                            <TbBaguette className="text-lg" /> Experience
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
    );
};

export default RightPanel;
