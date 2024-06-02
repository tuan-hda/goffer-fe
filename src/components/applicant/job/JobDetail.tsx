'use client';

import { Button, Chip, Divider, Input } from '@nextui-org/react';
import { TbArrowMoveDown, TbHeart, TbHeartFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import JobContent from './JobContent';
import { toast } from "sonner"
;
import useJobStore from '@/stores/jobStore';

const JobDetail = () => {
    const { detail } = useJobStore();

    const navigate = useNavigate();
    const [saved, setSaved] = useState(false);
    const jobLink = window.location.origin + '/job/' + detail?.id;

    const onApply = () => {
        navigate('/job/' + detail?.id);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(jobLink).then(() => {
            toast.success('Job link copied to clipboard');
        });
    };

    return (
        <div className="flex h-screen overflow-y-scroll">
            <div className="p-4 pb-24">
                <JobContent />
            </div>
            <div className="sticky top-0 flex h-screen min-w-96">
                <Divider orientation="vertical" />
                <div className="m-16 w-full space-y-4">
                    {/* Apply button */}
                    <Button
                        className="w-full font-semibold text-white"
                        color="success"
                        size="md"
                        variant="solid"
                        radius="full"
                        onPress={onApply}
                    >
                        Apply Now
                    </Button>

                    {/* Save button */}
                    <Button
                        className="w-full font-semibold text-success"
                        color="success"
                        startContent={saved ? <TbHeartFilled size={20} /> : <TbHeart size={20} />}
                        variant="bordered"
                        size="md"
                        radius="full"
                        onPress={() => setSaved(!saved)}
                    >
                        {saved ? 'Saved' : 'Save Job'}
                    </Button>

                    {/* Pipeline */}
                    <div className="flex flex-col">
                        <p className="mb-2 mt-10 font-serif text-lg font-semibold text-default-700">Hiring Progress</p>
                        {detail?.pipeline.map((item, index) => (
                            <div key={index}>
                                {index > 0 && <TbArrowMoveDown className="my-1 ml-[6px] text-success" />}
                                <Chip variant="dot" color="success" key={item}>
                                    {item}
                                </Chip>
                            </div>
                        ))}
                    </div>

                    {/* Job link */}
                    <div>
                        <p className="mb-2 mt-10 font-serif text-lg font-semibold text-default-700">Job link</p>
                        <Input readOnly classNames={{ input: 'font-semibold' }} value={jobLink} />
                        <p
                            className=" mt-2 cursor-pointer font-semibold text-success hover:underline"
                            onClick={copyToClipboard}
                        >
                            Copy link
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;
