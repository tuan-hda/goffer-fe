import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { PiBank } from 'react-icons/pi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Coding, MCQ } from '../components/assessment/builder';
import { TbFlower } from 'react-icons/tb';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="flex items-center gap-1">
                                <TbFlower className="text-lg" /> Builder
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Choose question type</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link to={`/app/organization/${domain}/bank/builder/mcq`}>MCQ</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link to={`/app/organization/${domain}/bank/builder/coding`}>Coding</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
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
