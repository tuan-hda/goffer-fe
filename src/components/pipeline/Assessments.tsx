import { Assessment } from '@/types/assessment.type';
import { Button, Card, Image } from '@nextui-org/react';
import moment from 'moment';
import React from 'react';
import { TbArrowRight, TbClock } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import AssessmentItem from './phase/AssessmentItem';
interface Props {
    assessments?: Assessment[];
}
const Assessments = ({ assessments }: Props) => {
    const navigate = useNavigate();

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
                <div className="w-2/3 space-y-6">{assessments?.map((item) => <AssessmentItem item={item} />)}</div>
                <div className="relative flex h-[240px] w-1/2 items-center justify-between justify-self-end overflow-hidden rounded-large py-4 font-serif text-3xl font-medium">
                    <div className="absolute -bottom-4 -right-10 h-full">
                        <div className="bg-image-doodles flex-1 rounded-xl opacity-50" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assessments;
