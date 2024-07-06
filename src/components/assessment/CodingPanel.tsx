import { Card, CardContent, CardHeader } from '../ui/card';
import { TbBorderOuter, TbChevronDown, TbCode, TbInputCheck } from 'react-icons/tb';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { languageOptions } from '@/configs/languageOptions';
import MirrorEditor from './MirrorEditor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import classNames from 'classnames';
import useCodingStore from '@/stores/codingStore';
import { shallow } from 'zustand/shallow';
import CodingOutput from './CodingOutput';
import useCurrentTakingCodingQuestion from '@/hooks/useCurrentTakingCodingQuestion';
import useCurrPublicAssessment from '@/hooks/useCurrPublicAssessment';

const CodingPanel = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(200);

    const [input, submissions, setSubmissions, setInput, currentTab, setCurrentTab] = useCodingStore(
        (state) => [
            state.input,
            state.submissions,
            state.setSubmissions,
            state.setInput,
            state.currentTab,
            state.setCurrentTab,
        ],
        shallow,
    );
    const { data: currentAssessment } = useCurrPublicAssessment();
    const { data: currentQuestion } = useCurrentTakingCodingQuestion();

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
        if (!currentQuestion) return;
        setSubmissions((prev) => {
            return {
                ...prev,
                [currentQuestion.id]: {
                    ...prev[currentQuestion.id],
                    lang: languageOptions.find((l) => l.value === lan),
                },
            };
        });
    };

    const setCode = (code: string) => {
        if (!currentQuestion) return;
        setSubmissions((prev) => {
            return {
                ...prev,
                [currentQuestion.id]: {
                    ...prev[currentQuestion.id],
                    code,
                },
            };
        });
    };

    if (!currentQuestion) return null;

    return (
        <div className="flex flex-1 flex-col">
            {/* Coding */}
            <Card className="mb-2 mr-2 flex flex-[3] flex-col border-[#606060] bg-[#262626] transition">
                <CardHeader className="flex !h-9 flex-row items-center  justify-between rounded-t-xl bg-[#333] px-4 py-0 font-medium text-white">
                    <div className="flex items-center gap-2">
                        <TbCode /> Code
                    </div>
                    <Select value={submissions[currentQuestion.id]?.lang?.value} onValueChange={handleLanguageChange}>
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
                        <MirrorEditor
                            key={currentQuestion.id}
                            outerValue={submissions[currentQuestion.id]?.code}
                            setOuterValue={setCode}
                            lang={submissions[currentQuestion.id]?.lang || languageOptions[0]}
                            height={height}
                        />
                    </div>
                </CardContent>
            </Card>
            {/* Input output */}
            <Card
                className={classNames(
                    'mb-2 mr-2 flex h-0 flex-[2] flex-col border-[#606060] bg-[#262626] p-0 transition',
                )}
            >
                <Tabs
                    value={currentTab}
                    onValueChange={(value) => setCurrentTab(value as 'input' | 'output')}
                    defaultValue="input"
                    className="relative flex h-0 flex-1 flex-col"
                >
                    {/* Input output header */}
                    <div className={classNames('flex rounded-t-xl bg-[#333]')}>
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
                    </div>

                    <div
                        className={classNames(
                            'h-0 flex-1 overflow-y-auto transition',
                            // collapsed ? 'pointer-events-none h-0 opacity-0' : 'pointer-events-auto opacity-100',
                        )}
                    >
                        {/* Input */}
                        <TabsContent value="input" className="p-0">
                            <div className="-mt-2 flex-1">
                                <MirrorEditor
                                    setOuterValue={setInput}
                                    outerValue={input}
                                    height={((height + 100) / 3) * 2 - 80}
                                    lang="plain"
                                    isCode={false}
                                />
                            </div>
                        </TabsContent>

                        {/* Output */}
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
