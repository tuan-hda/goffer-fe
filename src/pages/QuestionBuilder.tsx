import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { PiBank } from 'react-icons/pi';
import { useNavigate, useParams } from 'react-router-dom';
import { Coding, MCQ } from '../components/assessment/questionBuilder';
import { TbFlower } from 'react-icons/tb';
import QuestionCreateDropdown from '@/components/assessment/questionBank/QuestionCreateDropdown';
import Behavioral from '@/components/assessment/questionBuilder/Behavioral';

const typeMap = {
    mcq: {
        title: 'MCQ',
        comp: MCQ,
    },
    coding: {
        title: 'Coding',
        comp: Coding,
    },
    behavioral: {
        title: 'Behavioral',
        comp: Behavioral,
    },
};

const QuestionBuilder = () => {
    const navigate = useNavigate();
    const { domain, type } = useParams();

    const builder = typeMap[type as keyof typeof typeMap];
    const Component = builder?.comp || (() => {});

    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem onClick={() => navigate(`/app/organization/${domain}/bank`)}>
                    <PiBank className="text-lg" /> Question bank
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <QuestionCreateDropdown>
                        <div className="flex items-center gap-1">
                            <TbFlower className="text-lg" /> Builder
                        </div>
                    </QuestionCreateDropdown>
                </BreadcrumbItem>
                <BreadcrumbItem>{builder?.title}</BreadcrumbItem>
            </Breadcrumbs>
            <div className="pt-5">
                <Component />
            </div>
        </div>
    );
};

export default QuestionBuilder;
