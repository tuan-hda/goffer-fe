import { Tab, Tabs } from '@nextui-org/tabs';
import { Key } from '@react-types/shared';
import { useState } from 'react';
import AboutJob from './AboutJob';
import AboutCompany from './AboutCompany';
import { Divider } from '@nextui-org/divider';
import JobApplication from './JobApplication';

const appliedTabs = ['Job application', 'About the job', 'About the company'];

const AppliedDetail = () => {
    const [selected, setSelected] = useState<Key>(appliedTabs[0]);

    return (
        <div className="h-screen overflow-y-scroll py-16">
            <Tabs
                selectedKey={selected}
                onSelectionChange={setSelected}
                variant={'underlined'}
                aria-label="Tabs applied"
                classNames={{ base: 'px-16', tabList: 'pb-0' }}
            >
                {appliedTabs.map((item) => (
                    <Tab key={item} title={item} />
                ))}
            </Tabs>
            <Divider />
            <div className="px-16">
                {selected === appliedTabs[0] ? (
                    <JobApplication />
                ) : selected === appliedTabs[1] ? (
                    <AboutJob />
                ) : (
                    <AboutCompany />
                )}
            </div>
        </div>
    );
};

export default AppliedDetail;
