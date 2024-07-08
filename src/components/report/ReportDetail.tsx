import { Image } from '@nextui-org/react';
import moment from 'moment';
import Information from './Information';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import Status from './Status';
import { Report } from '@/types/report.type';
import catchAsync from '@/utils/catchAsync';
import { updateReportService } from '@/services/reports.service';

type ReportDetailProps = {
    data?: Report;
    refetch: () => void;
};

const ReportDetail = ({ data, refetch }: ReportDetailProps) => {
    const updateStatus = (status: 'pending' | 'in_progress' | 'resolved') =>
        catchAsync(async () => {
            if (data) {
                await updateReportService(data?.id, { status });
                refetch();
            }
        });

    return (
        <div className="flex h-full flex-col overflow-y-auto px-7 pb-10 pt-5">
            {!data ? (
                <p className="m-auto">Select a report on the left to view detail.</p>
            ) : (
                <>
                    <div className="flex items-center justify-between gap-6">
                        <p className="min-w-0 flex-1 text-base font-medium">{data.title}</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="gap-1">
                                    <span>Status:</span> <Status status={data.status} />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Change status</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => updateStatus('pending')}>
                                    <Status status="pending" />
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => updateStatus('in_progress')}
                                    className="text-yellow-600 hover:text-yellow-600"
                                >
                                    <Status status="in_progress" />
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => updateStatus('resolved')}>
                                    <Status status="resolved" />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <p className="mt-2">{data.description}</p>
                    <div className="mt-5">
                        <Image
                            classNames={{
                                wrapper:
                                    'h-full max-h-[400px] border !max-w-full overflow-hidden !w-full object-contain',
                                img: 'h-full max-h-[400px] w-full object-contain',
                            }}
                            src={data.image}
                        />
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-6 text-black">
                        <div className="space-y-2">
                            <p className="text-base font-medium">Context</p>
                            <Information title="Related Path" content={data.relatedPath} />
                        </div>
                        <div className="space-y-2">
                            <p className="text-base font-medium">Environment</p>
                            <Information title="Operating System" content={data.environment.os} />
                            <Information title="Browser" content={data.environment.browserName} />
                            <Information title="Browser Version" content={data.environment.browserVersion} />
                            <Information title="Canvas size" content={data.environment.canvasSize} />
                        </div>
                    </div>
                    <div className="my-5 border-t"></div>
                    <div className="mt-6 grid grid-cols-2 gap-6 text-black">
                        <div className="space-y-2">
                            <p className="text-base font-medium">PIC</p>
                            <Information title="Reporter" content={data.owner.email} />
                            {data.resolvedBy && <Information title="Resolved by" content={data.resolvedBy?.email} />}
                        </div>
                        <div className="space-y-2">
                            <p className="text-base font-medium">Timestamp</p>
                            <Information
                                title="Created At"
                                content={moment(data.createdAt).format('DD-MM-YYYY hh:mm')}
                            />
                            <Information
                                title="Updated At"
                                content={moment(data.updatedAt).format('DD-MM-YYYY hh:mm')}
                            />
                            {data.resolvedAt && (
                                <Information
                                    title="Resolved At"
                                    content={moment(data.resolvedAt).format('DD-MM-YYYY hh:mm')}
                                />
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ReportDetail;
