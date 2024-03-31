import { TbCricket, TbDropletHeart, TbSettings } from 'react-icons/tb';
import { Breadcrumbs, BreadcrumbItem, Tab, Tabs } from '@nextui-org/react';
import { General, Other } from 'src/components/orgSettings';

const OrgSettings = () => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-pale p-5 text-text">
            <h1 className="mt-[6px] flex items-center gap-1 text-sm">
                <Breadcrumbs>
                    <BreadcrumbItem>
                        <TbSettings className="text-lg" /> Settings
                    </BreadcrumbItem>
                </Breadcrumbs>
            </h1>
            <div className="mx-auto mt-6 w-full max-w-[600px]">
                <Tabs variant="underlined">
                    <Tab
                        key="General"
                        title={
                            <span className="flex items-center gap-2">
                                <TbCricket className="text-lg" /> General
                            </span>
                        }
                    >
                        <General />
                    </Tab>

                    <Tab
                        key="Other"
                        title={
                            <span className="flex items-center gap-2">
                                <TbDropletHeart className="text-lg" /> Other
                            </span>
                        }
                    >
                        <Other />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default OrgSettings;
