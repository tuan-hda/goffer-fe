import { Badge } from '../../ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import { TbDots, TbPencil, TbTrash } from 'react-icons/tb';
import QuestionBankItemMCQ from './QuestionBankItemMCQ';
import { QUESTION_TYPE, Question } from '@/types/question.type';
import QuestionBankItemCoding from './QuestionBankItemCoding';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import QuestionBankItemBehavioral from './QuestionBankItemBehavioral';
import { sentenceCase } from '@/utils/string';
import { Link, useNavigate } from 'react-router-dom';
import { DialogTrigger } from '@/components/ui/dialog';
import QuestionBankDelete from './QuestionBankDelete';

type QuestionBankItemProps = {
    type: QUESTION_TYPE;
    mode?: 'pick' | 'normal';
    data: Question;
};

const typeMap = {
    mcq: QuestionBankItemMCQ,
    coding: QuestionBankItemCoding,
    behavioral: QuestionBankItemBehavioral,
};

const difficultyMap = {
    1: 'Easy',
    2: 'Medium',
    3: 'Hard',
};

const QuestionBankItem = ({ type, mode = 'normal', data }: QuestionBankItemProps) => {
    const Component = typeMap[type || 'mcq'];
    const [selected, setSelected] = useState(false);
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (mode === 'pick') {
            e.stopPropagation();
            setSelected(!selected);
        } else {
            navigate(data.id);
        }
    };

    return (
        <div
            onClick={handleClick}
            className="relative flex cursor-pointer flex-col rounded-2xl border p-5 text-text transition hover:shadow-medium"
        >
            {mode === 'pick' && <Checkbox checked={selected} className="absolute right-2 top-2 h-5 w-5 rounded-lg" />}
            <div className="h-[72px]">
                <Component data={data} />
            </div>
            <div className="-mx-5 my-4 border-t"></div>
            <div className="-my-1 flex" onClick={(e) => e.stopPropagation()}>
                <Badge>{difficultyMap[data.difficulty || 1]}</Badge>
                <Badge className="ml-2" variant="secondary">
                    {sentenceCase(data.category)}
                </Badge>
                <QuestionBankDelete id={data.id} type={type}>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="ml-auto p-1">
                            <TbDots className="text-base" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Question</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link to={data.id}>
                                    <TbPencil className="mr-2" /> Edit
                                </Link>
                            </DropdownMenuItem>
                            <DialogTrigger asChild>
                                <DropdownMenuItem>
                                    <TbTrash className="mr-2" /> Delete
                                </DropdownMenuItem>
                            </DialogTrigger>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </QuestionBankDelete>
            </div>
        </div>
    );
};

export default QuestionBankItem;
