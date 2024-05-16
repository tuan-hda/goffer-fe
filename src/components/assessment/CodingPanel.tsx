import { Card, CardContent, CardHeader } from '../ui/card';
import { TbCode } from 'react-icons/tb';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';

import { useEffect, useRef, useState } from 'react';
import { languageOptions } from '@/configs/languageOptions';
import MirrorEditor from './MirrorEditor';

const CodingPanel = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [lang, setLang] = useState<(typeof languageOptions)[0]>(languageOptions[0]);
    const [height, setHeight] = useState(200);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setHeight(ref.current.getBoundingClientRect().height);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLanguageChange = (lan: string) => {
        setLang(languageOptions.find((lang) => lang.value === lan) || languageOptions[0]);
    };

    return (
        <div className="flex flex-1 flex-col">
            <Card className="mb-2 mr-2 flex flex-[3] flex-col border-[#606060] bg-[#262626]">
                <CardHeader className="flex !h-9 flex-row items-center  justify-between rounded-t-xl bg-[#333] px-4 py-0 font-medium text-white">
                    <div className="flex items-center gap-2">
                        <TbCode /> Code
                    </div>
                    <Select value={lang.value} onValueChange={handleLanguageChange}>
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
                <CardContent className="flex flex-1 flex-col p-0 px-0">
                    <div ref={ref} className="flex-1">
                        <MirrorEditor lang={lang} height={height} />
                    </div>
                </CardContent>
            </Card>
            <Card className="mb-2 mr-2 flex-[2] border-[#606060] bg-[#262626]"></Card>
        </div>
    );
};

export default CodingPanel;
