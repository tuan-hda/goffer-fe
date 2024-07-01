import { Applicant, ConnectedWorkspace } from '@/components/applicantDetail';
import ApplicantPerformance from '@/components/applicantDetail/ApplicantPerformance';
import { Button } from '@/components/ui/button';
import useCurrApplication from '@/hooks/useCurrApplication';
import useRefetchInsights from '@/hooks/useRefetchInsights';
import { updateApplyService } from '@/services/apply.service';
import catchAsync from '@/utils/catchAsync';
import { TbLoader } from 'react-icons/tb';
import { toast } from 'sonner';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import pipeline from '@/data/pipeline';

const ApplicantDetail = () => {
    const { data, isLoading, refetch } = useCurrApplication();
    const { refetch: refetchInsights } = useRefetchInsights();

    if (isLoading)
        return (
            <div className="flex min-h-[500px] w-full items-center justify-center">
                <TbLoader className="animate-spin text-xl" />
            </div>
        );

    if (!data) return null;

    const moveTo = (phase: string) => () =>
        catchAsync(
            async () => {
                await updateApplyService(data.id, {
                    phase,
                });
                await Promise.all([refetch()]);
                toast.success('Moved successfully!');
            },
            () => {},
        );

    const reject = moveTo('rejected');

    return (
        <div className="flex flex-1 gap-8 text-sm text-text">
            <div className="flex-1">
                <Applicant data={data} refetch={refetch} />
                <div className="mt-6">
                    <ApplicantPerformance />
                    <div className="mt-6 flex items-center gap-4">
                        <Button
                            onClick={reject}
                            disabled={data.phase === 'rejected'}
                            variant="outline"
                            className="w-full"
                            size="lg"
                        >
                            {data.phase === 'rejected' ? 'Rejected' : 'Reject'}
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="black" className="w-full" size="lg">
                                    Move to
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Move to</DropdownMenuLabel>
                                {pipeline.map((p) => (
                                    <DropdownMenuItem
                                        onClick={moveTo(p.value)}
                                        key={p.value}
                                        disabled={data.phase === p.value}
                                    >
                                        {p.title}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <ConnectedWorkspace />
        </div>
    );
};

export default ApplicantDetail;
