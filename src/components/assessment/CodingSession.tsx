import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader } from '../ui/card';
import { TbFileDescription } from 'react-icons/tb';
import Header from './Header';
import CodingPanel from './CodingPanel';
import { PlainPlate } from '../common';
import useCurrPublicAssessment from '@/hooks/useCurrPublicAssessment';
import { useSearchParams } from 'react-router-dom';
import { NotFound } from '@/pages';
import { useEffect, useMemo, useRef } from 'react';
import useCodingStore from '@/stores/codingStore';
import { shallow } from 'zustand/shallow';
import { languageOptions } from '@/configs/languageOptions';
import useCurrTakingAssessment from '@/hooks/useCurrTakingAssessment';

const CodingSession = () => {
    const { data: assessment } = useCurrPublicAssessment();
    const { data: taking } = useCurrTakingAssessment();
    const [searchParams] = useSearchParams();

    const currentQuestion = useMemo(() => {
        return Array.from(assessment?.questions.values() || []).at(Number(searchParams.get('q') || 0));
    }, [assessment, searchParams]);

    const [setInput, setSubmissions] = useCodingStore((state) => [state.setInput, state.setSubmissions], shallow);

    const getFirstInput = (inputString: string, numberOfLines: number) => {
        const lines = inputString.split('\n');
        return lines.slice(0, numberOfLines).join('\n');
    };

    useEffect(() => {
        if (!currentQuestion) return;
        const firstTestCase = getFirstInput(
            currentQuestion.exampleInput || '',
            currentQuestion.numberOfTestCaseLines || 0,
        );
        setInput(firstTestCase);
    }, [currentQuestion]);

    useEffect(() => {
        const questions = Array.from(assessment?.questions.values() || []);
        const data = questions.reduce((acc, curr) => {
            const hasAnswer = taking?.answers.find((a) => a.question.id === curr.id);
            if (hasAnswer) {
                acc[curr.id] = {
                    code: hasAnswer.content,
                    lang: languageOptions.find((l) => l.id === hasAnswer.lang) || languageOptions[0],
                };
            }
            return acc;
        }, {} as any);
        setSubmissions(data);
    }, [taking]);

    if (!currentQuestion) return <NotFound />;

    return (
        <div className="flex h-screen flex-col overflow-hidden bg-[#20221E] text-sm text-[#eee]">
            <Header />
            <Sidebar />
            <div className="ml-16 flex min-h-0 flex-1 gap-2">
                <Card className="mb-2 min-w-0 flex-1 border-[#606060] bg-[#262626]">
                    <CardHeader className="rounded-t-xl bg-[#333] px-4 pb-2 pt-2 font-medium text-white">
                        <div className="flex items-center gap-2">
                            <TbFileDescription /> {currentQuestion.content || 'Description'}
                        </div>
                    </CardHeader>
                    <CardContent className="h-[calc(100vh-100px)] overflow-y-auto py-4 text-black invert">
                        {currentQuestion.description && (
                            <PlainPlate data={JSON.parse((currentQuestion.description as string) || '{}')} />
                        )}
                    </CardContent>
                </Card>
                <CodingPanel />
            </div>
        </div>
    );
};

export default CodingSession;
