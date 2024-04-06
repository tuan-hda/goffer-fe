import { Overview, Sourcing } from '@/components/jobDetail';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { OrgLayout } from '@/layouts';
import { Tab, Tabs } from '@nextui-org/react';
import { useState } from 'react';
import { TbCheck } from 'react-icons/tb';

const JobDetail = () => {
    const [finished, setFinished] = useState(true);

    return (
        <OrgLayout>
            <div className="mt-5 flex gap-8">
                {!finished && (
                    <Card className="h-fit max-w-[240px] border bg-white/70 text-sm shadow-none">
                        <CardHeader>
                            <CardTitle>Finish Job Setup</CardTitle>
                            <CardDescription>
                                Before you can publish your job, you need to finish all steps
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-1">
                            <div className="flex items-center gap-4">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                                    <TbCheck />
                                </div>
                                <p>Basic information</p>
                            </div>
                            <div className="ml-[10px] h-6 border-l" />
                            <div className="flex items-center gap-4">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                                    2
                                </div>
                                <p>Application questions</p>
                            </div>
                            <div className="ml-[10px] h-6 border-l" />
                            <div className="flex items-center gap-4">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full border text-xs text-text">
                                    3
                                </div>
                                <p>Custom feedback</p>
                            </div>
                            <div className="ml-[10px] h-6 border-l" />
                            <div className="flex items-center gap-4">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full border text-xs text-text">
                                    4
                                </div>
                                <p>Finalize</p>
                            </div>
                        </CardContent>
                    </Card>
                )}
                <div className="w-full">
                    <div className="text-3xl">
                        <h1>Senior Software Engineer</h1>
                    </div>
                    <div className="-ml-[6px] w-full">
                        <Tabs aria-label="Options" className="-ml-2" variant="underlined">
                            <Tab key="overview" title="Overview">
                                <Overview />
                            </Tab>
                            <Tab key="sourcing" title="Sourcing">
                                <Sourcing />
                            </Tab>
                            <Tab key="insights" title="Insights"></Tab>
                            <Tab key="analytics" title="Analytics"></Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </OrgLayout>
    );
};

export default JobDetail;
