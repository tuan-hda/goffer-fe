import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OrgPanel from './OrgPanel';
import { Overview } from './overview';
import useCurrOrganization from '@/hooks/useCurrOrganization';
import { toggleSavedOrg } from '@/services/interaction.service';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Jobs from './Jobs';

const OrgDetail = () => {
    const { data: org, refetch } = useCurrOrganization();
    if (!org) return;

    const onShare = () => {
        window.navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard');
    };
    const onFollow = async () => {
        await toggleSavedOrg(org.id);
        await refetch();
    };

    return (
        <div className="flex w-full flex-row">
            <OrgPanel data={org} />
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
                            className="relative mx-2 h-full gap-1 rounded-none border-b-2 border-b-transparent bg-transparent px-0 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none "
                            value="jobs"
                        >
                            Jobs
                        </TabsTrigger>
                    </TabsList>
                    <div className="mr-2 flex gap-x-6">
                        <Button onClick={onShare} variant="ghost" className="rounded-full">
                            Share
                        </Button>
                        <Button
                            onClick={onFollow}
                            variant={org.saved ? 'black' : 'outline'}
                            className="w-24 rounded-full shadow-none"
                        >
                            {org.saved ? 'Following' : 'Follow'}
                        </Button>
                    </div>
                </div>
                <TabsContent value="overview">
                    <Overview org={org} />
                </TabsContent>
                <TabsContent value="jobs">
                    <Jobs org={org} />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default OrgDetail;
