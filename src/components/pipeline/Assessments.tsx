import { Assessment } from '@/types/assessment.type';
import { Button, Card, Image } from '@nextui-org/react';
import moment from 'moment';
import React from 'react';
import { TbArrowRight, TbClock } from 'react-icons/tb';
interface Props {
    assessments?: Assessment[];
}
const Assessments = ({ assessments }: Props) => {
    return (
        <div className="my-8">
            <h2 className="mb-4 font-serif-2 text-2xl font-semibold text-text">Important Assessment Information</h2>
            <p className="font-serif-2 text-text">
                Please complete all assessments within the given deadline. Your application will only be considered
                after you have successfully finished all tests.
            </p>
            <p className="mt-2 font-serif-2 text-sm text-gray-500">
                This is to ensure we have a comprehensive understanding of your skills and qualifications.
            </p>
            <div className="mt-8 flex flex-row gap-x-8">
                <div className="w-full">
                    {assessments?.map((item) => (
                        <Card isPressable className="flex w-full flex-row rounded-large border p-4 shadow-sm">
                            <Image
                                src={item.image}
                                classNames={{
                                    wrapper: 'h-[80px] aspect-video',
                                }}
                            />
                            <div className="ml-8 w-full">
                                <p className="text-start font-semibold text-text">{item.title}</p>
                                <div className="mt-4 flex w-full items-center text-gray-500">
                                    <TbClock />
                                    <p className="ml-1">{moment(item.due).format('ll')}</p>
                                    <TbArrowRight size={24} className="ml-auto mr-4 w-20 rounded-large border" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="relative flex h-[240px] w-1/2 items-center justify-between justify-self-end overflow-hidden rounded-large py-4 font-serif text-3xl font-medium shadow-small">
                    <div className="absolute -bottom-4 -right-10 h-full">
                        <Image
                            classNames={{
                                wrapper: 'h-[400px] w-[400px]',
                            }}
                            src="/flower.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assessments;
