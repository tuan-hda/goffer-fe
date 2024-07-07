import { Card } from '@/components/ui/card';
import useGetTakingAssessment from '@/hooks/useGetTakingAssessment';
import { Assessment } from '@/types/assessment.type';
import { TakeAssessment } from '@/types/takingAssessment.type';
import classNames from 'classnames';
import moment from 'moment';
import React from 'react';
import { TbArrowRight, TbCheck, TbClock } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

type AssessmentItemProps = {
    item: Assessment;
};

const AssessmentItem = ({ item }: AssessmentItemProps) => {
    const { data } = useGetTakingAssessment(item.id);

    const navigate = useNavigate();
    return (
        <Card
            onClick={data ? () => {} : () => navigate(`/assessment/${item.id}`)}
            className={classNames('flex w-full flex-row rounded-large border p-4 shadow-sm', !data && 'cursor-pointer')}
        >
            {item.image ? (
                <img src={item.image} className="aspect-video w-40 object-cover" />
            ) : (
                <p className="flex aspect-video w-40 items-center justify-center truncate rounded-xl p-4 shadow-small">
                    {item.title}
                </p>
            )}
            <div className="ml-8 flex-1">
                <p className="text-start font-semibold text-text">{item.title}</p>
                <div className="mt-4 flex w-full items-center text-gray-500">
                    <TbClock />
                    <p className="ml-1">{moment(item.due).format('ll')}</p>
                    {data ? (
                        <TbCheck size={24} className="ml-auto mr-4 w-20 rounded-large border" />
                    ) : (
                        <TbArrowRight size={24} className="ml-auto mr-4 w-20 rounded-large border" />
                    )}
                </div>
            </div>
        </Card>
    );
};

export default AssessmentItem;
