import UserPanel from './UserPanel';
import useUserInfo from '@/hooks/useUserInfo';
import { Tab, Tabs } from '@nextui-org/react';
import { TbBaguette, TbPaperclip, TbPrompt, TbSparkles } from 'react-icons/tb';
import Basic from './Basic';
import Experiences from './Experiences';
import ProjectList from '../profile/ProjectList';
import Recommendations from '../profile/Recommendations';
import useListProject from '@/hooks/useListProject';
import useListRecommendations from '@/hooks/useListRecommendations';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';

interface Props {
    id: string;
}

const UserDetail = ({ id }: Props) => {
    const { data: user } = useUserInfo(id);
    const { data: projects } = useListProject({
        owner: id,
    });
    const { data: self } = useSelfProfileQuery();
    const { data: recommendations } = useListRecommendations(id);
    if (!user) return;

    return (
        <div className="flex h-full text-sm">
            <div className="mr-4 h-full min-w-1 flex-1">
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
                            <ProjectList projects={projects?.results || []} />
                        </div>
                        <div className="h-7"></div>
                    </Tab>
                    {recommendations && recommendations.results.length > 0 && (
                        <Tab
                            key="recommendations"
                            title={
                                <span className="flex items-center gap-2">
                                    <TbSparkles className="text-lg" /> Recommendations
                                </span>
                            }
                        >
                            <Recommendations
                                recommendations={recommendations?.results || []}
                                userId={id}
                                showNewRecommendation={id !== self?.id}
                            />
                        </Tab>
                    )}
                </Tabs>
            </div>
            <div className="right-0 top-0 flex h-[100vh-64px] w-[320px] flex-shrink-0 flex-col overflow-y-scroll px-4">
                <UserPanel id={user.id} />
            </div>
        </div>
    );
};

export default UserDetail;
