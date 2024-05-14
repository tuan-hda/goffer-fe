import { Card, CardContent, CardHeader } from '../ui/card';
import { TbBrandPython, TbCode, TbRestore } from 'react-icons/tb';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { SiCodefactor } from 'react-icons/si';
import { useEffect, useRef, useState } from 'react';
import { languageOptions } from '@/configs/languageOptions';
import MirrorEditor from './MirrorEditor';

const CodingPanel = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState('200px');

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setHeight(`${ref.current.getBoundingClientRect().height}px`);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [language, setLanguage] = useState('python3');

    const handleLanguageChange = (lan: string) => {
        setLanguage(lan);
    };

    return (
        <div className="flex flex-1 flex-col">
            <Card className="mb-2 mr-2 flex flex-[3] flex-col border-[#606060] bg-[#262626]">
                <CardHeader className="flex !h-9 flex-row items-center  justify-between rounded-t-xl bg-[#333] px-4 py-0 font-medium text-white">
                    <div className="flex items-center gap-2">
                        <TbCode /> Code
                    </div>
                    <Select value={language} onValueChange={handleLanguageChange}>
                        <SelectTrigger className="!mt-0 -mr-2 h-6 w-[200px] rounded-lg border-white/40 text-xs">
                            <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Language</SelectLabel>
                                {languageOptions.map((lan) => (
                                    <SelectItem key={lan.id} value={lan.value}>
                                        {lan.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col px-0">
                    <div className="flex h-8 w-full items-center gap-2 border-b border-white/10 px-4">
                        <TbBrandPython /> <span>main.py</span>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button className="ml-auto rounded-md p-[6px] hover:bg-white/10">
                                        <TbRestore />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div>Reset code to initial state</div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button className="-ml-1 rounded-md p-[6px] hover:bg-white/10">
                                        <SiCodefactor className="text-xs" />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div>Format code</div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div ref={ref} className="flex-1">
                        <MirrorEditor height={height} />
                    </div>
                </CardContent>
            </Card>
            <Card className="mb-2 mr-2 flex-[2] border-[#606060] bg-[#262626]"></Card>
        </div>
    );
};

export default CodingPanel;
