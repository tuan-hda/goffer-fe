import { Card, CardContent, CardHeader } from '../ui/card';
import { TbBorderOuter, TbChevronDown, TbCode, TbInputCheck } from 'react-icons/tb';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';

import { useEffect, useRef, useState } from 'react';
import { languageOptions } from '@/configs/languageOptions';
import MirrorEditor from './MirrorEditor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import classNames from 'classnames';
import useCodingStore from '@/stores/codingStore';
import { shallow } from 'zustand/shallow';
import CodingOutput from './CodingOutput';

const CodingPanel = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(200);

    const [code, setCode, config, setConfig, setInput, currentTab, setCurrentTab] = useCodingStore(
        (state) => [
            state.code,
            state.setCode,
            state.config,
            state.setConfig,
            state.setInput,
            state.currentTab,
            state.setCurrentTab,
        ],
        shallow,
    );

    const [collapsed, setCollapsed] = useState(false);

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
    }, [collapsed]);

    const handleLanguageChange = (lan: string) => {
        setConfig({
            lang: languageOptions.find((l) => l.value === lan) || languageOptions[0],
        });
    };

    const toggleCollapse = () => {
        setHeight(200);
        setCollapsed((prev) => !prev);
    };

    return (
        <div className="flex flex-1 flex-col">
            {/* Coding */}
            <Card className="mb-2 mr-2 flex flex-[3] flex-col border-[#606060] bg-[#262626] transition">
                <CardHeader className="flex !h-9 flex-row items-center  justify-between rounded-t-xl bg-[#333] px-4 py-0 font-medium text-white">
                    <div className="flex items-center gap-2">
                        <TbCode /> Code
                    </div>
                    <Select value={config.lang.value} onValueChange={handleLanguageChange}>
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
                        <MirrorEditor setOuterValue={setCode} lang={config.lang} height={height} />
                    </div>
                </CardContent>
            </Card>
            {/* Input output */}
            <Card
                className={classNames(
                    'mb-2 mr-2 flex h-0 flex-col border-[#606060] bg-[#262626] p-0 transition',
                    !collapsed && 'flex-[2]',
                )}
            >
                <Tabs
                    value={currentTab}
                    onValueChange={(value) => setCurrentTab(value as 'input' | 'output')}
                    defaultValue="input"
                    className="relative flex h-0 flex-1 flex-col"
                >
                    {/* Input output header */}
                    <div
                        className={classNames(
                            'flex rounded-t-xl bg-[#333]',
                            !collapsed ? 'rounded-b-none' : 'rounded-b-xl',
                        )}
                    >
                        <TabsList className="flex-1 justify-start bg-[#333]">
                            <TabsTrigger
                                value="input"
                                className="gap-2 data-[state=active]:!bg-transparent data-[state=active]:!text-white data-[state=active]:!shadow-none"
                            >
                                <TbInputCheck className="text-base" />
                                Test input
                            </TabsTrigger>
                            <TabsTrigger
                                value="output"
                                className="gap-2 data-[state=active]:!bg-transparent data-[state=active]:!text-white data-[state=active]:!shadow-none"
                            >
                                <TbBorderOuter className="text-base" />
                                Test output
                            </TabsTrigger>
                        </TabsList>

                        <button
                            onClick={toggleCollapse}
                            className="ml-auto mr-2 mt-1 flex h-7 w-7 items-center justify-center rounded-xl transition hover:bg-white/10"
                        >
                            <TbChevronDown
                                className={classNames('transition', collapsed ? 'rotate-180' : 'rotate-0')}
                            />
                        </button>
                    </div>

                    <div
                        className={classNames(
                            'h-0 flex-1 overflow-y-auto transition',
                            // collapsed ? 'pointer-events-none h-0 opacity-0' : 'pointer-events-auto opacity-100',
                        )}
                    >
                        <TabsContent value="input" className="p-0">
                            <div className="-mt-2 flex-1">
                                <MirrorEditor
                                    setOuterValue={setInput}
                                    height={((height + 100) / 3) * 2 - 80}
                                    lang="plain"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="output" className="h-[90%] p-0">
                            <CodingOutput />
                        </TabsContent>
                    </div>
                </Tabs>
            </Card>
        </div>
    );
};

export default CodingPanel;
