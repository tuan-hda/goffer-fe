import { Avatar } from '@nextui-org/react';
import { Badge } from '../ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { TbDots, TbTrash } from 'react-icons/tb';

const QuestionBankItem = () => {
    return (
        <div className="flex cursor-pointer flex-col rounded-2xl border p-5 text-text transition hover:shadow-medium">
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="mt-4 flex items-center gap-2">
                <span className="text-[13px]">Created by</span>
                <Avatar
                    src="http://res.cloudinary.com/doxsstgkc/image/upload/v1714386131/goffer/ig8lpaodzrhtwzzkdaj3.jpg"
                    className="h-5 w-5"
                />
                <span>Hoang Dinh Anh Tuan</span>
                <span>10 days ago</span>
            </div>
            <div className="-mx-5 my-4 border-t"></div>
            <div className="-my-1 flex justify-between">
                <Badge>Easy</Badge>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <TbDots className="text-base" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Question</DropdownMenuLabel>
                        <DropdownMenuSeparator />
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
