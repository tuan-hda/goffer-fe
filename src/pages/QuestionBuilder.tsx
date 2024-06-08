import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { PiBank } from 'react-icons/pi';
import { useNavigate, useParams } from 'react-router-dom';
import { Coding, MCQ } from '../components/assessment/questionBuilder';
import { TbFlower } from 'react-icons/tb';
import QuestionCreateDropdown from '@/components/assessment/questionBank/QuestionCreateDropdown';
import Behavioral from '@/components/assessment/questionBuilder/Behavioral';
import useGetQuestion from '@/hooks/useGetQuestion';

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
    const { domain, type, id } = useParams();
    const { data } = useGetQuestion(id);

    const builder = data ? typeMap[data.type as keyof typeof typeMap] : typeMap[type as keyof typeof typeMap];
    const Component = builder?.comp || (() => {});

    const getTitle = () => {
        if (data) {
            return data.content;
        }
        return builder?.title;
    };

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
                <BreadcrumbItem>{getTitle()}</BreadcrumbItem>
            </Breadcrumbs>
            <div className="pt-5">
                <Component />
            </div>
        </div>
    );
};

export default QuestionBuilder;
