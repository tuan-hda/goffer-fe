'use client';

import { Button, Chip, Divider, Input } from '@nextui-org/react';
import { TbArrowMoveDown, TbHeart, TbHeartFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import JobContent from './JobContent';

const process = ['sourced', 'applied', 'manager screen', 'on-site', 'hired'];

const JobDetail = () => {
    const navigate = useNavigate();
    const [saved, setSaved] = useState(false);

    const onApply = () => {
        navigate('/job/029');
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
                        {process.map((item, index) => (
                            <div>
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
                        <Input isDisabled value={'http://localhost:5173/job/029'} />
                        <p className=" mt-2 cursor-pointer font-semibold text-success hover:underline">Copy link</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;
