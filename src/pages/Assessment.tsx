import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TbBaguette, TbCalendar, TbClock, TbCode, TbPaperBag } from 'react-icons/tb';

const Assessment = () => {
    return (
        <div className="flex min-h-screen flex-col text-sm">
            <div className="mx-auto flex min-h-screen max-w-[680px] flex-col items-center p-10">
                <div>
                    <h1 className="text-center font-serif text-3xl font-bold">
                        Assessment #1 <br />
                        Computer Science foundation
                    </h1>
                    <p className="mt-6 text-justify text-text">
                        This foundation course in Computer Science introduces fundamental concepts such as algorithms,
                        data structures, software engineering, and programming languages. It also covers basic computer
                        architecture, operating systems, and networks. Designed for beginners, the course aims to build
                        a strong base in computational thinking, problem-solving, and application development, preparing
                        students for advanced studies in the field."
                    </p>
                    <Card className="mt-6 border-0 py-6 shadow-medium">
                        <CardContent className="grid grid-cols-4 gap-x-4 gap-y-7 pb-0">
                            <div className="flex flex-col items-center gap-3">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div>
                                                <TbPaperBag className="text-xl" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Type</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <p>MCQ assessment</p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div>
                                                <TbClock className="text-xl" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Time limit</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <p>150 minutes</p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div>
                                                <TbBaguette className="text-xl" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Number of questions</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <p>20 questions</p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div>
                                                <TbCalendar className="text-xl" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Deadline</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <p>15-05-2024</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Assessment;
