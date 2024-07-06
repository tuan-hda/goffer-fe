import useApplyJob from '@/hooks/useApplyJob';
import { useParams } from 'react-router-dom';
import HeaderInfo from './HeaderInfo';
import { Snippet, Tab, Tabs } from '@nextui-org/react';
import { TbChartArcs, TbMessageChatbot, TbPaperclip, TbTimelineEvent, TbWritingSign } from 'react-icons/tb';
import { JobDetail } from './detail';
import Resume from './Resume';
import { Interviews } from './interviews';
import { PhaseDetail } from './phase';
import Assessments from './Assessments';
import { Key, useState } from 'react';

const Pipeline = () => {
    const { id } = useParams();
    const { data } = useApplyJob(id || '');
    const [selected, setSelected] = useState<string | number>('pipeline');

    return !data ? (
        <Snippet />
    ) : (
        <div className="min-h-screen w-full bg-pale px-6 py-5 text-text">
            <HeaderInfo job={data.job} />
            <div className="mt-10 h-full min-w-1 flex-1">
                <Tabs selectedKey={selected} onSelectionChange={setSelected} variant="underlined" size="lg">
                    <Tab
                        key="pipeline"
                        title={
                            <span className="flex items-center gap-2">
                                <TbTimelineEvent className="text-lg" /> Pipeline
                            </span>
                        }
                    >
                        <PhaseDetail onSelected={setSelected} applicationId={data.id} />
                    </Tab>
                    <Tab
                        key="details"
                        title={
                            <span className="flex items-center gap-2">
                                <TbChartArcs className="text-lg" /> Details
                            </span>
                        }
                    >
                        <JobDetail jobId={data.job.id} />
                    </Tab>
                    <Tab
                        key="resume"
                        title={
                            <span className="flex items-center gap-2">
                                <TbPaperclip className="text-lg" /> Resume
                            </span>
                        }
                    >
                        <Resume jobId={data.job.id} />
                    </Tab>
                    {data.answers.length > 0 && (
                        <Tab
                            key="interviews"
                            title={
                                <span className="flex items-center gap-2">
                                    <TbMessageChatbot className="text-lg" /> Interviews
                                </span>
                            }
                        >
                            <Interviews questions={data.job.questions} answers={data.answers} />
                        </Tab>
                    )}
                    {data.job.assessments.length > 0 && (
                        <Tab
                            key="assessments"
                            title={
                                <span className="flex items-center gap-2">
                                    <TbWritingSign className="text-lg" /> Assessments
                                </span>
                            }
                        >
                            <Assessments assessments={data.job.assessments} />
                        </Tab>
                    )}
                </Tabs>
            </div>
        </div>
    );
};

export default Pipeline;
