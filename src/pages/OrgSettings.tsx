import { TbCricket, TbSettings } from 'react-icons/tb';
import { Breadcrumbs, BreadcrumbItem, Tab, Tabs } from '@nextui-org/react';
import { General } from 'src/components/orgSettings';
import useGetOrganization from 'src/hooks/useGetOganization';
import { useParams } from 'react-router-dom';
import useListOrganizations from 'src/hooks/useListOrganizations';

const OrgSettings = () => {
    const { domain } = useParams();
    const { data: listOrgs } = useListOrganizations();
    const org = listOrgs?.results.find((o) => o.domain === domain);
    const { data } = useGetOrganization(org?.id);

    console.log(data);

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
                        key="Account"
                        title={
                            <span className="flex items-center gap-2">
                                <TbCricket className="text-lg" /> General
                            </span>
                        }
                    >
                        <General />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default OrgSettings;
