import { TbAlignBoxLeftTop, TbCoinBitcoin, TbMaximize, TbSettings, TbUser } from 'react-icons/tb';
import { Breadcrumbs, BreadcrumbItem, Tab, Tabs } from '@nextui-org/react';
import { Account } from 'src/components/settings';

const Settings = () => {
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
                                <TbUser className="text-lg" /> Account
                            </span>
                        }
                    >
                        <Account />
                    </Tab>
                    <Tab
                        key="Work"
                        title={
                            <span className="flex items-center gap-2">
                                <TbAlignBoxLeftTop className="text-lg" /> Work
                            </span>
                        }
                    >
                        <div></div>
                    </Tab>
                    <Tab
                        key="Subscription"
                        title={
                            <span className="flex items-center gap-2">
                                <TbCoinBitcoin className="text-lg" /> Subscription
                            </span>
                        }
                    >
                        <div></div>
                    </Tab>
                    <Tab
                        key="Customization"
                        title={
                            <span className="flex items-center gap-2">
                                <TbMaximize className="text-lg" /> Customization
                            </span>
                        }
                    >
                        <div></div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default Settings;
