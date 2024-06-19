import { Button } from '@/components/ui/button';
import useCurrPublicAssessment from '@/hooks/useCurrPublicAssessment';
import { createTakeAssessmentSessionService } from '@/services/takeAssessment.service';
import catchAsync from '@/utils/catchAsync';
import { Image } from '@nextui-org/react';
import { useState } from 'react';
import { TbLoader, TbShare, TbTriangleFilled } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const PublicAssessmentHeader = () => {
    const { data } = useCurrPublicAssessment();

    const { assessmentId } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const startAssessment = () =>
        catchAsync(
            async () => {
                setLoading(true);
                await createTakeAssessmentSessionService(assessmentId!);
            },
            () => {
                setLoading(false);
            },
        );

    const copyLink = async () => {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard');
    };

    if (!data) return null;

    return (
        <div>
            <div className="flex items-center gap-2">
                <div className="flex h-fit w-fit items-center gap-4 overflow-hidden">
                    <Image src={data?.org?.logo} className="h-16 w-16 rounded-3xl" />
                    <div>
                        <p className="font-semibold">{data.org?.name}</p>
                        <p>{data.org?.field}</p>
                    </div>
                </div>
                <Button variant="black" className="ml-auto gap-2" onClick={startAssessment}>
                    <TbTriangleFilled className="rotate-90 text-base" /> Start
                </Button>
                <Button disabled={loading} onClick={copyLink} size="icon" variant="outline">
                    {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                    <TbShare className="text-lg" />
                </Button>
            </div>

            <p className="mt-4 font-serif text-3xl font-bold">{data.title}</p>
        </div>
    );
};

export default PublicAssessmentHeader;
