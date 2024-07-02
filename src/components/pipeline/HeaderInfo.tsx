import { formatUTCDate } from '@/utils/time';
import { Avatar } from '@nextui-org/react';
import { TbLoaderQuarter, TbPlanet } from 'react-icons/tb';
import { useParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { useState } from 'react';
import { JobResponse } from '@/types/job.type';

interface Props {
    job: JobResponse;
}

const HeaderInfo = ({ job }: Props) => {
    const [chatLoading, setChatLoading] = useState(false);
    const getInTouch = async () => {};

    return (
        <div className="flex flex-row gap-8">
            <Avatar src={job.org?.logo} className="h-20 w-20 rounded-3xl object-cover" />
            <div className="space-y-4">
                <h1 className="mr-auto font-serif-2 text-4xl font-bold text-black">{job.title}</h1>
                <p className="mt-7 flex items-center">
                    Created by
                    <span className="mx-2 flex text-black">
                        <Avatar src={job.owner?.avatar} className="h-5 w-5" />
                        <span className="-mr-1 ml-1">{job.owner?.name}</span>
                    </span>
                    {formatUTCDate(job.createdAt!)}
                </p>
            </div>
            <Button
                onClick={getInTouch}
                variant="black"
                className="ml-auto w-full max-w-fit gap-2 rounded-2xl text-base"
                size="lg"
            >
                {chatLoading ? (
                    <TbLoaderQuarter className="animate-spin text-base" size={20} />
                ) : (
                    <TbPlanet className="text-base" size={20} />
                )}
                Get in touch
            </Button>
        </div>
    );
};

export default HeaderInfo;
