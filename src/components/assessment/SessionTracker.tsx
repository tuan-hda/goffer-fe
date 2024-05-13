import { Card } from '@/components/ui/card';
import { Progress } from '../ui/progress';
import { Avatar } from '@nextui-org/react';
import { Button } from '../ui/button';

const SessionTracker = () => {
    return (
        <Card className="sticky top-10 h-fit max-w-[360px] flex-1 rounded-3xl !border-none bg-white p-8 text-sm shadow-medium">
            <p className="mb-5 text-lg font-semibold">Session Tracker</p>
            <div className="rounded-2xl bg-black p-7">
                <p className="font-mono text-5xl text-white">00:32:10</p>
                <Progress value={50} className="mt-5 h-[6px]" color="white" />
            </div>
            <div className="mt-8 grid grid-cols-5 gap-3">
                {Array(20)
                    .fill(0)
                    .map((_, i) => (
                        <button
                            onClick={() =>
                                document.getElementById(`q-${i}`)?.scrollIntoView({
                                    behavior: 'smooth',
                                })
                            }
                            key={i}
                            className="flex items-center justify-center rounded-xl border p-3"
                        >
                            {i + 1}
                        </button>
                    ))}
            </div>
            <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />
            <div className="flex items-center gap-4">
                <Avatar
                    src="https://res.cloudinary.com/doxsstgkc/image/upload/v1714493760/goffer/rklmzhk6m6abekce57ha.jpg"
                    size="lg"
                />
                <div>
                    <p className="font-medium">Tuan Hoang Dinh Anh</p>
                    <p className="text-text/70">hdatdragon2@gmail.com</p>
                </div>
            </div>
            <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />
            <div className="flex w-full flex-col">
                <Button size="lg" className="ml-auto text-base" variant="black">
                    Submit
                </Button>
            </div>
        </Card>
    );
};

export default SessionTracker;
