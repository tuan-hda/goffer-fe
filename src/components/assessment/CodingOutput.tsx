import useCodingStore from '@/stores/codingStore';
import moment from 'moment';
import { Fragment, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { decodeBase64 } from 'stream-chat';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import classNames from 'classnames';
import { TbCircleFilled } from 'react-icons/tb';

const CodingOutput = () => {
    const results = useCodingStore((state) => state.results);
    const [tab, setTab] = useState('0');
    const [io, setIO] = useState([
        {
            stdin: '',
            stdout: '',
            expected_output: '',
        },
    ]);

    useEffect(() => {
        if (results) {
            try {
                setIO(
                    results.map((result) => ({
                        stdin: result.stdin ? decodeBase64(result.stdin) : '',
                        stdout: result.stdout ? decodeBase64(result.stdout) : '',
                        expected_output: result.expected_output ? decodeBase64(result.expected_output) : '',
                    })),
                );
                setTab('0');
            } catch (error) {
                console.log(error);
                toast.error('Failed to decode base64');
            }
        }
    }, [results]);

    if (!results)
        return (
            <div className="flex h-full flex-1 items-center justify-center px-6 pb-2">
                <p>You need to run code first.</p>
            </div>
        );

    const getColor = (index: number) => {
        if (results[index].status.id === 3) return 'text-green-600';
        if ([1, 2].includes(results[index].status.id)) return 'text-yellow-600';
        return 'text-red-600';
    };

    return (
        <div className="px-6 py-1">
            <Tabs value={tab} onValueChange={setTab} defaultValue="1">
                <TabsList className="mt-2 gap-1 rounded-xl bg-[#111]">
                    {results.map((_, index) => (
                        <TabsTrigger
                            key={index}
                            value={`${index}`}
                            className={'rounded-lg data-[state=active]:bg-[#ddd]'}
                        >
                            <TbCircleFilled className={classNames('mr-2 h-2 w-2', getColor(index))} /> Test {index + 1}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {results.map((result, index) => (
                    <TabsContent value={`${index}`} key={index}>
                        <div className="mt-4 flex items-center gap-4">
                            {/* Status */}
                            {result.status.id === 3 && (
                                <p className={classNames('font-mono text-lg font-bold', getColor(index))}>
                                    {result.status.description}
                                </p>
                            )}
                            {![1, 2, 3].includes(result.status.id) && (
                                <p className={classNames('font-mono text-lg font-bold', getColor(index))}>
                                    {result.status.description}
                                </p>
                            )}

                            {/* Time */}
                            <p className="text-[13px] text-white/50">
                                Runtime {Number(result.time || 0) * 1000}ms • Memory {result.memory}KB • on{' '}
                                {moment(result.created_at).format('hh:mm - MMM D YYYY')}
                            </p>
                        </div>
                        <div>
                            {/* Stdin */}
                            <div className="mt-4">
                                <p className="text-white/50">stdin</p>
                                <div className="mt-1 min-h-20 w-full whitespace-pre-wrap rounded-lg bg-[#0A0A09] p-4 text-gray-300">
                                    {io.at(index)?.stdin}
                                </div>
                            </div>
                            {/* Stdout */}
                            <div className="mt-4">
                                <p className="text-white/50">stdout</p>
                                <div className="mt-1 min-h-20 w-full whitespace-pre-wrap rounded-lg bg-[#0A0A09] p-4 text-gray-300">
                                    {io.at(index)?.stdout}
                                </div>
                            </div>
                            {/* Expected output */}
                            {result.expected_output && (
                                <div className="mt-4">
                                    <p className="text-white/50">Expected output</p>
                                    <div className="mt-1 min-h-20 w-full whitespace-pre-wrap rounded-lg bg-[#0A0A09] p-4 text-gray-300">
                                        {io.at(index)?.expected_output}
                                    </div>
                                </div>
                            )}
                            <div className="h-6" />
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default CodingOutput;
