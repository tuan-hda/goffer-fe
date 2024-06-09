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
import QuestionBankItemBehavioral from './QuestionBankItemBehavioral';
import { sentenceCase } from '@/utils/string';
import { Link, useNavigate } from 'react-router-dom';
import { DialogTrigger } from '@/components/ui/dialog';
import QuestionBankDelete from './QuestionBankDelete';
import { Avatar } from '@nextui-org/react';
import moment from 'moment';
import useNewAssessmentStore from '@/stores/newAssessmentStore';
import { shallow } from 'zustand/shallow';

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
    const navigate = useNavigate();
    const [assessment, setAssessment] = useNewAssessmentStore(
        (state) => [state.assessment, state.setAssessment],
        shallow,
    );

    const selected = assessment.questions.has(data.id);
    const setSelected = (value: boolean) => {
        const questions = new Map(assessment.questions);
        if (value) {
            questions.set(data.id, data);
        } else {
            questions.delete(data.id);
        }
        setAssessment({ ...assessment, questions });
    };

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
            <div className="flex flex-1 flex-col">
                <div className="flex-1">
                    <Component data={data} />
                </div>
                <div className="mt-2 flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="text-[13px]">Created by</span>
                    <Avatar src={data.author?.avatar} className="h-5 w-5" />
                    <span>{data.author?.name}</span>
                    <span>{moment(data.createdAt).fromNow()}</span>
                </div>
            </div>
            <div className="-mx-5 my-4 border-t"></div>
            <div className="-my-1 flex" onClick={(e) => e.stopPropagation()}>
                {data.type !== 'behavioral' && <Badge className="mr-2">{difficultyMap[data.difficulty || 1]}</Badge>}
                <Badge variant="secondary">{sentenceCase(data.category)}</Badge>
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
