import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import useCurrPublicAssessment from '@/hooks/useCurrPublicAssessment';
import { Avatar, Image } from '@nextui-org/react';
import { TbBaguette, TbCalendar, TbClock, TbLoader, TbPaperBag } from 'react-icons/tb';
import NotFound from './NotFound';
import PublicAssessmentHeader from '@/components/assessment/publicAssessment/PublicAssessmentHeader';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import PublicAssessmentAdditionalInfo from '@/components/assessment/publicAssessment/PublicAssessmentAdditionalInfo';
import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/configs/firebase';

const Assessment = () => {
    const { data, isLoading } = useCurrPublicAssessment();
    const { data: self } = useSelfProfileQuery();

    useEffect(() => {
        logEvent(analytics, 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname,
        })
    },[])

    if (isLoading) {
        return (
            <div className="flex h-screen w-full">
                <TbLoader className="m-auto animate-spin text-2xl" />
            </div>
        );
    }

    if (!data) {
        return <NotFound />;
    }

    return (
        <div className="relative flex min-h-screen flex-col text-sm">
            <Image src="/logo.svg" alt="logo" className="fixed left-6 top-6 z-[1] h-16 w-16 rounded-full !opacity-50" />

            <div className="mx-auto flex min-h-screen w-full max-w-screen-md flex-col p-10">
                <PublicAssessmentHeader />
                <div className="mb-7 mt-7 border-t-2 border-dashed border-gray-100" />
                <div className="flex items-center gap-4">
                    You are logged in as
                    <Avatar src={self?.avatar} size="lg" />
                    <div>
                        <p className="font-medium">{self?.name}</p>
                        <p className="text-text/70">{self?.email}</p>
                    </div>
                </div>
                <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />

                <PublicAssessmentAdditionalInfo />

                <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />

                <div>
                    <p className="text-justify text-text">{data?.description}</p>
                </div>

                <div className="bg-image-doodles -mb-10 mt-10 flex-1 opacity-50"></div>
            </div>
        </div>
    );
};

export default Assessment;
