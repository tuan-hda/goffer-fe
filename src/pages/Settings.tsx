import { TbSettings } from 'react-icons/tb';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';

const Settings = () => {
    return (
        <div className="h-screen w-full bg-pale p-5 text-text">
            <h1 className="mt-[6px] flex items-center gap-1 text-sm">
                <Breadcrumbs>
                    <BreadcrumbItem>
                        <TbSettings className="text-lg" /> Settings
                    </BreadcrumbItem>
                </Breadcrumbs>
            </h1>
        </div>
    );
};

export default Settings;
