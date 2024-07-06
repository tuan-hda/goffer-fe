import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { Avatar, Image } from '@nextui-org/react';
import classNames from 'classnames';
import { TbHourglassHigh } from 'react-icons/tb';
import useCurrPublicAssessment from '@/hooks/useCurrPublicAssessment';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCurrTakingAssessment from '@/hooks/useCurrTakingAssessment';
import moment from 'moment';
import { toast } from 'sonner';

const Sidebar = () => {
    const { data: user } = useSelfProfileQuery();
    const { data: assessment } = useCurrPublicAssessment();
    const { data: taking } = useCurrTakingAssessment();
    const [searchParams, setSearchParams] = useSearchParams();
    const [countDown, setCountDown] = useState(0);

    const currentIndex = Number(searchParams.get('q') || 0);

    useEffect(() => {
        const endingAt = taking?.endingAt || new Date();
        const left = moment(endingAt).diff(moment(), 'seconds');
        console.log('left', left);
        setCountDown(Math.max(left, 0));

        const interval = setInterval(() => {
            setCountDown((prev) => {
                if (prev <= 0) {
                    clearInterval(interval);
                    toast.success('Time is up');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [taking]);

    return (
        <div className="fixed left-0 top-10 flex h-[calc(100vh-48px)] w-12 flex-col justify-between gap-0">
            <div className="z-[10] m-2 flex w-full flex-col items-center overflow-hidden rounded-xl bg-[#000] pt-2">
                <div>
                    <Image
                        classNames={{
                            wrapper: 'aspect-square h-8 w-8 mb-2',
                        }}
                        src="/logo.svg"
                    />
                </div>
                <div className="w-full">
                    {Array(assessment?.questions.size || 0)
                        .fill(0)
                        .map((_, i) => (
                            <button
                                onClick={() =>
                                    setSearchParams({
                                        q: String(i),
                                    })
                                }
                                key={i}
                                className={classNames(
                                    'flex aspect-square w-full items-center justify-center font-mono',
                                    currentIndex !== i ? 'bg-[#000] text-white' : 'bg-white text-[#333]',
                                )}
                            >
                                {i + 1}
                            </button>
                        ))}
                </div>
                <Avatar
                    classNames={{
                        img: 'rounded-none w-full h-full p-0 m-0',
                        base: 'rounded-none w-full h-full p-0 m-0',
                    }}
                    src={user?.avatar}
                />
            </div>
            <div className="ml-2 flex w-full justify-end">
                <div className="flex w-full flex-col items-center gap-0 rounded-xl bg-black p-3 text-center">
                    <TbHourglassHigh className="text-lg" />
                    <p className="mt-2 font-mono text-lg font-semibold text-white">
                        {Math.floor((countDown || 0) / 60)}
                    </p>
                    <p className="font-mono text-lg font-semibold text-white">{Math.floor((countDown || 0) % 60)}</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
