import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Image } from '@nextui-org/react';
import { TbBaguette, TbBookmarks, TbCalendar, TbClock, TbPaperBag, TbShare, TbTriangleFilled } from 'react-icons/tb';

const Assessment = () => {
    return (
        <div className="relative flex min-h-screen flex-col text-sm">
            <Image src="/logo.svg" alt="logo" className="fixed left-6 top-6 z-[1] h-16 w-16 rounded-full !opacity-50" />

            <div className="mx-auto flex min-h-screen w-full max-w-screen-md flex-col p-10">
                <div className="flex items-center gap-2">
                    <div className="flex h-fit w-fit items-center gap-4 overflow-hidden">
                        <Image
                            src={
                                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png'
                            }
                            className="h-16 w-16 rounded-3xl"
                        />
                        <div>
                            <p className="font-semibold">Spotify</p>
                            <p>Entertainment</p>
                        </div>
                    </div>
                    <Button variant="black" className="ml-auto gap-2">
                        <TbTriangleFilled className="rotate-90 text-base" /> Start
                    </Button>
                    <Button size="icon" variant="outline">
                        <TbBookmarks className="text-lg" />
                    </Button>
                    <Button size="icon" variant="outline">
                        <TbShare className="text-lg" />
                    </Button>
                </div>

                <p className="mt-4 font-serif text-3xl font-bold">Assessment #1 - Computer science foundation</p>

                <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />

                <div className="flex h-fit w-full items-center gap-4 overflow-hidden">
                    <div className="grid w-full grid-cols-4 gap-x-4 gap-y-7 pb-0">
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
                    </div>
                </div>

                <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />

                <div>
                    <p className="text-justify text-text">
                        This foundation course in Computer Science introduces fundamental concepts such as algorithms,
                        data structures, software engineering, and programming languages. It also covers basic computer
                        architecture, operating systems, and networks. Designed for beginners, the course aims to build
                        a strong base in computational thinking, problem-solving, and application development, preparing
                        students for advanced studies in the field.
                    </p>
                </div>

                <div className="bg-image-doodles -mb-10 mt-10 flex-1 opacity-50"></div>
            </div>
        </div>
    );
};

export default Assessment;
