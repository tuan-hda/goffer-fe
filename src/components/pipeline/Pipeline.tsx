import useApplyJob from '@/hooks/useApplyJob';
import { useParams } from 'react-router-dom';
import HeaderInfo from './HeaderInfo';
import { Snippet, Tab, Tabs } from '@nextui-org/react';
import { TbChartArcs, TbMessageChatbot, TbPaperclip, TbTimelineEvent } from 'react-icons/tb';
import { JobDetail } from './detail';
import Resume from './Resume';

const Pipeline = () => {
    const { id } = useParams();
    const { data } = useApplyJob(id || '');

    return !data ? (
        <Snippet />
    ) : (
        <div className="min-h-screen w-full bg-pale px-6 py-5 text-text">
            <HeaderInfo job={data.job} />
            <div className="mt-10 h-full min-w-1 flex-1">
                <Tabs variant="underlined" size="lg">
                    <Tab
                        key="projects"
                        title={
                            <span className="flex items-center gap-2">
                                <TbTimelineEvent className="text-lg" /> Pipeline
                            </span>
                        }
                    ></Tab>
                    <Tab
                        key="profile"
                        title={
                            <span className="flex items-center gap-2">
                                <TbChartArcs className="text-lg" /> Details
                            </span>
                        }
                    >
                        <JobDetail jobId={data.job.id} />
                    </Tab>
                    <Tab
                        key="experience"
                        title={
                            <span className="flex items-center gap-2">
                                <TbPaperclip className="text-lg" /> Resume
                            </span>
                        }
                    >
                        <Resume jobId={data.job.id} />
                    </Tab>
                    <Tab
                        key="recommendations"
                        title={
                            <span className="flex items-center gap-2">
                                <TbMessageChatbot className="text-lg" /> Interviews
                            </span>
                        }
                    ></Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default Pipeline;
