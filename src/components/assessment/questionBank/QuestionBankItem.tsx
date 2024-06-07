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

type QuestionBankItemProps = {
    type?: QUESTION_TYPE;
    mode?: 'pick' | 'normal';
    data: Question;
};

const typeMap = {
    mcq: QuestionBankItemMCQ,
    coding: QuestionBankItemCoding,
    behavioral: QuestionBankItemBehavioral,
};

const QuestionBankItem = ({ type, mode = 'normal', data }: QuestionBankItemProps) => {
    const Component = typeMap[type || 'mcq'];
    const [selected, setSelected] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (mode === 'pick') {
            e.stopPropagation();
            setSelected(!selected);
        }
    };

    return (
        <div
            onClick={handleClick}
            className="relative flex cursor-pointer flex-col rounded-2xl border p-5 text-text transition hover:shadow-medium"
        >
            {mode === 'pick' && <Checkbox checked={selected} className="absolute right-2 top-2 h-5 w-5 rounded-lg" />}
            <Component data={data} />
            <div className="-mx-5 my-4 border-t"></div>
            <div className="-my-1 flex">
                <Badge>Easy</Badge>
                <Badge className="ml-2" variant="secondary">
                    Engineering
                </Badge>
                <DropdownMenu>
                    <DropdownMenuTrigger className="ml-auto">
                        <TbDots className="text-base" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Question</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <TbPencil className="mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <TbTrash className="mr-2" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default QuestionBankItem;
