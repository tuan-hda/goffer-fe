import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import useCurrPublicAssessment from '@/hooks/useCurrPublicAssessment';
import moment from 'moment';
import { TbBaguette, TbCalendar, TbClock, TbLoader, TbPaperBag } from 'react-icons/tb';

const PublicAssessmentAdditionalInfo = () => {
    const { data } = useCurrPublicAssessment();

    if (!data) return null;

    return (
        <div className="flex h-fit w-full items-center gap-4 overflow-hidden">
            <div className="grid w-full grid-cols-4 gap-x-4 gap-y-7 pb-0">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex flex-col items-center gap-3">
                                <TbPaperBag className="text-xl" />
                                <p>{data.type === 'mcq' ? 'MCQ' : 'Coding'} assessment</p>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Type</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex flex-col items-center gap-3">
                                <TbClock className="text-xl" />
                                <p>{data.duration} minutes</p>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Time limit</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="flex flex-col items-center gap-3">
                                <TbBaguette className="text-xl" />
                                <p>{data.questions?.size} questions</p>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Number of questions</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                {data.due && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex flex-col items-center gap-3">
                                    <TbCalendar className="text-xl" />
                                    <p>{moment(data.due).format('hh:mm DD/MM/YY')}</p>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Deadline</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
            </div>
        </div>
    );
};

export default PublicAssessmentAdditionalInfo;
