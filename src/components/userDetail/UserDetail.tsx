import UserPanel from './UserPanel';
import useUserInfo from '@/hooks/useUserInfo';
import { Tab, Tabs } from '@nextui-org/react';
import { TbBaguette, TbCirclePlus, TbPaperclip, TbPrompt, TbSparkles } from 'react-icons/tb';
import Basic from './Basic';
import Experiences from './Experiences';
import ProjectList from '../profile/ProjectList';
import Recommendations from '../profile/Recommendations';

interface Props {
    id: string;
}

const UserDetail = ({ id }: Props) => {
    const { data: user } = useUserInfo(id);
    if (!user) return;

    return (
        <div className="flex h-full text-sm">
            <div className="mr-4 h-full flex-1">
                <Tabs variant="underlined" className="">
                    <Tab
                        key="profile"
                        title={
                            <span className="flex items-center gap-2">
                                <TbPaperclip className="text-lg" /> Profile
                            </span>
                        }
                    >
                        <Basic data={user} />
                    </Tab>
                    {user.experiences && user.experiences.length > 0 && (
                        <Tab
                            key="experience"
                            title={
                                <span className="flex items-center gap-2">
                                    <TbBaguette className="text-lg" /> Experiences
                                </span>
                            }
                        >
                            <Experiences data={user} />
                        </Tab>
                    )}
                    <Tab
                        key="projects"
                        title={
                            <span className="flex items-center gap-2">
                                <TbPrompt className="text-lg" /> Projects
                            </span>
                        }
                    >
                        <div className="h-2"></div>
                        <div className="!max-w-2xl">
                            <ProjectList />
                        </div>
                        <div className="h-7"></div>
                    </Tab>
                    <Tab
                        key="recommendations"
                        title={
                            <span className="flex items-center gap-2">
                                <TbSparkles className="text-lg" /> Recommendations
                            </span>
                        }
                    >
                        <Recommendations />
                    </Tab>
                </Tabs>
            </div>
            <div className="right-0 top-0 flex h-[100vh-64px] w-[320px] flex-col overflow-y-scroll px-4">
                <UserPanel data={user} />
            </div>
        </div>
    );
};

export default UserDetail;
