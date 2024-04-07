'use client';

import { Button, Chip, Divider } from '@nextui-org/react';
import { TbArrowMoveDown, TbBuilding, TbHeart, TbHeartFilled, TbMapPin } from 'react-icons/tb';
import { GiDuration } from 'react-icons/gi';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const benefits = [
    'Competitive pay',
    'Learning Stipend',
    'Desk setup',
    'Unlimited PTO',
    'Paid Parental Leave',
    '401K match',
    'Gym Stipend',
    'MacBook Pro + Accessories',
];
const process = ['sourced', 'applied', 'manager screen', 'on-site', 'hired'];

export const AboutCompany = () => {
    return (
        <>
            <p className="mb-2 mt-10 font-serif text-lg font-semibold text-default-700">About company</p>

            <div className="flex flex-col">
                <Chip startContent={<TbMapPin />} variant="light" className=" text-sm font-medium text-default-500">
                    <span className="font-semibold text-default-600">{'Goffer Building' + ', '}</span>
                    Ho Chi Minh City, Vietnam
                </Chip>
                <Chip startContent={<GiDuration />} variant="light" className="text-sm font-medium text-default-500">
                    Posted 3 weeks ago
                </Chip>
                <Chip startContent={<TbBuilding />} variant="light" className="text-sm font-medium text-default-500">
                    1-10 employees
                </Chip>
            </div>
            <p className="mt-2 text-sm font-medium text-text">
                Teller builds APIs that enable developers to safely and reliably connect their apps with their users'
                financial accounts. We have a reputation for quality product and engineering excellence, and despite
                being relatively early stage we have some of the best fintechs in the world like Ramp, Brex, Pipe, and
                Capchase depending on our product. Teller is backed by leading Silicon Valley investors such as Founders
                Fund, SciFi, Craft, and Lightspeed Venture Partners.
            </p>
        </>
    );
};

export const JobBenefit = () => {
    return (
        <>
            <p className="mb-2 mt-10 font-serif text-lg font-semibold text-default-700">Benefits</p>
            <div className="flex flex-row flex-wrap gap-2">
                {benefits.map((benefit, index) => (
                    <Badge className="border-beige" variant="outline" key={index}>
                        {benefit}
                    </Badge>
                ))}
            </div>
        </>
    );
};

export const AboutJob = () => {
    return (
        <>
            <p className="mb-2 mt-10 font-serif text-lg  font-semibold text-default-700">About the job</p>

            <p className="text-sm font-medium text-text">
                You will be the first or one of the first sales professionals at Teller, meaning that there is little to
                no process, playbook, or motion already defined for you. It's your job to create it. If you are someone
                that's used to selling from behind a well-known logo and being a cog in a well oiled go-to-market
                machine do not apply for this job, you will not be successful here (although feel free to come back in
                12-18 months). However, if you want to roll your sleeves up, work your backside off, work directly with
                the CEO, and be promoted and progressed as far as your antitude and ability allows then this might be
                the place for
            </p>
        </>
    );
};

export const JobContent = () => {
    return (
        <div>
            {/* Title */}
            <p className="font-serif text-lg font-medium text-default-500 underline">Goffer</p>
            <p className="font-serif text-4xl font-black text-text">Senior Frontend Developer (React)</p>
            <p>
                <span className="font-serif text-sm font-medium text-default-500">Tu Phan</span>
                <span className="mx-2 font-serif text-sm font-medium text-default-500">•</span>
                <span className="font-serif text-sm font-medium text-default-500">Full time</span>
            </p>

            <JobBenefit />

            <AboutCompany />

            <AboutJob />

            <JobBenefit />

            <AboutCompany />

            <AboutJob />
        </div>
    );
};

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
                </div>
            </div>
        </div>
    );
};

export default JobDetail;
