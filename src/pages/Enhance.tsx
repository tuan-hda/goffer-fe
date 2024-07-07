import EnhanceDetail from '@/components/enhance/EnhanceDetail';
import { analytics } from '@/configs/firebase';

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';
import { MdOutlineAutoGraph } from 'react-icons/md';

const Enhance = () => {
    useEffect(() => {
        logEvent(analytics, 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname,
        })
    },[])

    return (
        <div className="relative flex h-screen flex-col px-6 pt-4 text-sm">
            <Breadcrumbs className="mb-4">
                <BreadcrumbItem>
                    <MdOutlineAutoGraph className="text-lg" />{' '}
                    <span className="ml-1 text-base font-medium">Review and enhance your resume</span>
                </BreadcrumbItem>
            </Breadcrumbs>
            <EnhanceDetail />
        </div>
    );
};

export default Enhance;
