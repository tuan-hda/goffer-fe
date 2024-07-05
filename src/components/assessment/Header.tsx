import { TbLoader, TbTestPipe, TbTriangleFilled, TbUpload } from 'react-icons/tb';
import { Button } from '../ui/button';
import catchAsync from '@/utils/catchAsync';
import { useState } from 'react';
import { getBatchSubmissionsService, submitBatchService, submitService } from '@/services/coding.service';
import useCodingStore from '@/stores/codingStore';
import { shallow } from 'zustand/shallow';
import { encodeBase64 } from 'stream-chat';
import { SubmissionResponse } from '@/types/coding.type';
import useCurrPublicAssessment from '@/hooks/useCurrPublicAssessment';
import useCurrentTakingCodingQuestion from '@/hooks/useCurrentTakingCodingQuestion';

const Header = () => {
    const { data: assessment } = useCurrPublicAssessment();
    const { data: currentQuestion } = useCurrentTakingCodingQuestion();

    const [loading, setLoading] = useState(false);
    const [runAllLoading, setRunAllLoading] = useState(false);
    const [code, config, input, setCurrentTab, setResults] = useCodingStore(
        (state) => [state.code, state.config, state.input, state.setCurrentTab, state.setResults],
        shallow,
    );

    if (!currentQuestion) return null;

    const runCode = () =>
        catchAsync(
            async () => {
                setLoading(true);
                const body: Partial<SubmissionResponse> = {};
                body.language_id = config.lang.id;
                body.source_code = encodeBase64(code);
                body.stdin = encodeBase64(input);

                const response = await submitService(body);
                setCurrentTab('output');
                setResults([response]);
            },
            () => {
                setLoading(false);
            },
        );

    const runAllTestCases = () =>
        catchAsync(
            async () => {
                setRunAllLoading(true);
                const stdins = currentQuestion.exampleInput?.split('\n') || [];
                const expected_outputs = currentQuestion.exampleOutput?.split('\n') || [];

                const body: Partial<SubmissionResponse> = {};
                body.language_id = config.lang.id;
                body.source_code = encodeBase64(code);

                const submissions: Partial<SubmissionResponse>[] = stdins.map((item, index) => ({
                    ...body,
                    stdin: encodeBase64(item),
                    expected_output: encodeBase64(expected_outputs[index]),
                }));

                // console.log('submissions', submissions);
                const response = await submitBatchService(submissions);
                const tokens = response.map((item) => item.token);
                const results = await new Promise((resolve, reject) => {
                    let timeout: NodeJS.Timeout | null = null;
                    timeout = setTimeout(async () => {
                        try {
                            const res = await getBatchSubmissionsService(tokens);
                            if (!('submissions' in res)) {
                                return;
                            }
                            for (const submission of res.submissions) {
                                if (!('stdout' in submission)) {
                                    return;
                                }
                            }
                            resolve(res.submissions);
                            if (timeout) {
                                clearTimeout(timeout);
                            }
                        } catch (error) {
                            reject(error);
                            if (timeout) {
                                clearTimeout(timeout);
                            }
                        }
                    }, 5000);
                });
                setCurrentTab('output');
                setResults(results as SubmissionResponse[]);
            },
            () => {
                setRunAllLoading(false);
            },
        );

    return (
        <div className="ml-14 flex h-12 items-center gap-2 px-2">
            <h1 className="max-w-[400px] flex-1 text-xl text-white">{assessment?.title}</h1>
            <div className="ml-auto flex items-center gap-2 rounded-xl pl-5">
                <Button onClick={runCode} disabled={loading || runAllLoading} className="gap-2" variant="black">
                    {loading ? (
                        <TbLoader className="animate-spin text-xl" />
                    ) : (
                        <TbTriangleFilled className="rotate-90" />
                    )}
                    Run
                </Button>
                <Button disabled={loading || runAllLoading} onClick={runAllTestCases} className="gap-2" variant="black">
                    {runAllLoading ? (
                        <TbLoader className="animate-spin text-xl" />
                    ) : (
                        <TbTestPipe className="rotate-90" />
                    )}
                    Run all test cases
                </Button>
                <Button className="gap-2 text-black" variant="outline">
                    <TbUpload className="text-[15px]" />
                    Submit
                </Button>
            </div>
            {/* <div className="ml-auto flex max-w-[400px] flex-1 justify-end"></div> */}
        </div>
    );
};

export default Header;
