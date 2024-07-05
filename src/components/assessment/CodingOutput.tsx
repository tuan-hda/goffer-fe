import useCodingStore from '@/stores/codingStore';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { decodeBase64 } from 'stream-chat';

const CodingOutput = () => {
    const result = useCodingStore((state) => state.result);
    const [io, setIO] = useState({
        stdin: '',
        stdout: '',
    });

    useEffect(() => {
        if (result) {
            try {
                setIO({
                    stdin: decodeBase64(result.stdin || ''),
                    stdout: decodeBase64(result.stdout),
                });
            } catch (error) {
                toast.error('Failed to decode base64');
            }
        }
    }, [result]);

    if (!result)
        return (
            <div className="flex h-full flex-1 items-center justify-center px-6 pb-2">
                <p>You need to run code first.</p>
            </div>
        );

    return (
        <div className="px-6 py-1">
            <div className="flex items-center gap-4">
                {/* Status */}
                {result.status.id === 3 && (
                    <p className="font-mono text-lg font-bold text-green-600">{result.status.description}</p>
                )}
                {![1, 2, 3].includes(result.status.id) && (
                    <p className="font-mono text-lg font-bold text-red-600">{result.status.description}</p>
                )}

                {/* Time */}
                <p className="text-[13px] text-white/50">
                    Runtime {result.time}s • Memory {result.memory}KB • on{' '}
                    {moment(result.created_at).format('hh:mm - MMM D YYYY')}
                </p>
            </div>
            <div>
                {/* Stdin */}
                <div className="mt-4">
                    <p className="text-white/50">stdin</p>
                    <div className="mt-1 h-20 w-full rounded-lg bg-[#0A0A09] p-4 text-gray-300">{io.stdin}</div>
                </div>
                {/* Stdout */}
                <div className="mt-4">
                    <p className="text-white/50">stdout</p>
                    <div className="mt-1 h-20 w-full rounded-lg bg-[#0A0A09] p-4 text-gray-300">{io.stdout}</div>
                </div>
                {/* Expected output */}
                <div className="mt-4">
                    <p className="text-white/50">Expected output</p>
                    <div className="mt-1 h-20 w-full rounded-lg bg-[#0A0A09] p-4 text-gray-300">{io.stdout}</div>
                </div>
                <div className="h-6" />
            </div>
        </div>
    );
};

export default CodingOutput;
