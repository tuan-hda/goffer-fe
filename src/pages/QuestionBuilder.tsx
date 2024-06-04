import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { MdOutlineBuildCircle } from 'react-icons/md';
import { PiBank } from 'react-icons/pi';
import { useNavigate, useParams } from 'react-router-dom';
import { Coding, MCQ } from '../components/assessment/builder';

const typeMap = {
    mcq: {
        title: 'MCQ',
        comp: MCQ,
    },
    coding: {
        title: 'Coding',
        comp: Coding,
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
                    <MdOutlineBuildCircle className="text-lg" /> Builder
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
