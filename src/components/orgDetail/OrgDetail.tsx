import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OrgPanel from './OrgPanel';
import { Button, Chip } from '@nextui-org/react';
import { Overview } from './overview';

const OrgDetail = () => {
    return (
        <div className="flex w-full flex-row">
            <OrgPanel />
            <Tabs defaultValue="overview" className="w-full">
                <div className="flex h-14 items-center justify-between gap-6 border-b px-8">
                    <TabsList className="h-full gap-2 rounded-none bg-transparent p-0">
                        <TabsTrigger
                            className="relative mx-2 h-full rounded-none border-b-2 border-b-transparent bg-transparent px-0 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none "
                            value="overview"
                        >
                            Overview
                        </TabsTrigger>
                        <TabsTrigger
                            className="relative mx-2 h-full rounded-none border-b-2 border-b-transparent bg-transparent px-0 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none "
                            value="people"
                        >
                            People
                        </TabsTrigger>
                        <TabsTrigger
                            className="relative mx-2 h-full rounded-none border-b-2 border-b-transparent bg-transparent px-0 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none "
                            value="funding"
                        >
                            Funding
                        </TabsTrigger>
                        <TabsTrigger
                            className="relative mx-2 h-full gap-1 rounded-none border-b-2 border-b-transparent bg-transparent px-0 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none "
                            value="jobs"
                        >
                            Jobs
                            <Chip size="sm" variant="faded">
                                9
                            </Chip>
                        </TabsTrigger>
                    </TabsList>
                    <div className="mr-2 flex gap-x-6">
                        <Button size="sm" variant="light" radius="full" className="text-sm font-semibold text-text">
                            Share
                        </Button>
                        <Button size="sm" variant="flat" radius="full" className="text-sm font-semibold text-text">
                            Follow
                        </Button>
                    </div>
                </div>
                <TabsContent value="overview">
                    <Overview />
                </TabsContent>
                <TabsContent value="people">people</TabsContent>
                <TabsContent value="funding">funding</TabsContent>
                <TabsContent value="jobs">jobs</TabsContent>
            </Tabs>
        </div>
    );
};

export default OrgDetail;
