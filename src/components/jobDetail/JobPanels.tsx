import { Tab, Tabs } from '@nextui-org/react';
import { Analytics, Feedbacks, Insights, Overview, Sourcing } from '@/components/jobDetail';
import { useSearchParams } from 'react-router-dom';

const JobPanels = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedKey = searchParams.get('tab') || 'overview';

    const handleSelectionChange = (key: string | null | undefined | number) => {
        setSearchParams({ tab: String(key || 'overview') });
    };

    return (
        <div className="-mx-[6px] w-[calc(100%+12px)]">
            <Tabs
                selectedKey={selectedKey}
                onSelectionChange={handleSelectionChange}
                aria-label="Options"
                className="-ml-2 mt-2"
                variant="underlined"
            >
                <Tab key="overview" title="Overview">
                    <Overview />
                </Tab>
                <Tab key="sourcing" title="Sourcing">
                    <Sourcing />
                </Tab>
                <Tab key="insights" title="Insights">
                    <Insights />
                </Tab>
                <Tab key="analytics" title="Analytics">
                    <Analytics />
                </Tab>
                <Tab key="feedbacks" title="Feedbacks">
                    <Feedbacks />
                </Tab>
            </Tabs>
        </div>
    );
};

export default JobPanels;
