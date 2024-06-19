import { Card } from '@/components/ui/card';
import { Progress } from '../ui/progress';
import { Avatar } from '@nextui-org/react';
import { Button } from '../ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import { useNavigate, useParams } from 'react-router-dom';
import { TbHourglassHigh } from 'react-icons/tb';
import useCurrPublicAssessment from '@/hooks/useCurrPublicAssessment';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import useCurrTakingAssessment from '@/hooks/useCurrTakingAssessment';
import { remainTime } from '@/utils/time';
import { useEffect, useState } from 'react';
import moment from 'moment';
import classNames from 'classnames';

const SessionTracker = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [remain, setRemain] = useState(0);

    const { data: self } = useSelfProfileQuery();

    const { data: session } = useCurrTakingAssessment();
    const { data } = useCurrPublicAssessment();
    const questions = data?.questions;

    const handleSubmit = () => {
        navigate(`/assessment/${id}/success`);
    };

    useEffect(() => {
        if (session) {
            const interval = setInterval(() => {
                setRemain(remainTime(session?.endingAt));
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [session]);

    if (!questions) return null;

    return (
        <Card className="sticky top-10 h-fit max-w-[340px] flex-1 rounded-3xl !border-none bg-white p-8 text-sm shadow-medium">
            <p className="mb-5 text-lg font-semibold">Session Tracker</p>
            <div className="rounded-2xl bg-black p-7">
                <div className="flex items-center justify-center gap-3">
                    <TbHourglassHigh className="text-4xl text-white" />
                    <p className="font-mono text-4xl text-white">{moment.utc(remain).format('HH:mm:ss')}</p>
                </div>
                <Progress
                    value={(remain / ((data?.duration || 0) * 60 * 1000)) * 100}
                    className="mt-4 h-[4px]"
                    color="white"
                />
            </div>
            <div className="mt-8 grid grid-cols-5 gap-3">
                {Array.from(questions.values()).map((q, i) => (
                    <button
                        onClick={() =>
                            document.getElementById(`q-${i}`)?.scrollIntoView({
                                behavior: 'smooth',
                            })
                        }
                        key={i}
                        className={classNames(
                            'flex items-center justify-center rounded-xl border p-3',
                            session?.answers.find((a) => a.question === q.id) && 'bg-slate-200',
                        )}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
            <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />
            <div className="flex items-center gap-4">
                <Avatar src={self?.avatar} size="lg" />
                <div>
                    <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-medium">{self?.name}</p>
                    <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-medium text-text/70">
                        {self?.email}
                    </p>
                </div>
            </div>
            <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />
            <div className="flex w-full flex-col">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg" className="ml-auto text-base" variant="black">
                            Submit
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                Once you submit, you will not be able to edit your answers.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="flex justify-end">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button onClick={handleSubmit} variant="black">
                                Submit
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </Card>
    );
};

export default SessionTracker;
