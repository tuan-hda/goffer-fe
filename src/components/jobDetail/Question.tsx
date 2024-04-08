import { TbDots, TbVideo } from 'react-icons/tb';
import { Badge } from '../ui/badge';
import { Card, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type QuestionProps = {
    editable?: boolean;
};

export default function Question({ editable = true }: QuestionProps) {
    return (
        <Card className="relative bg-white/50 shadow-none">
            {editable && <Checkbox className="absolute right-6 top-6" />}

            <CardHeader className="pb-3">
                <CardDescription>
                    <span className="flex items-center gap-3 text-balance text-sm leading-relaxed">
                        <Badge className="bg-pale-400 text-text/70 shadow-none">Behavioral</Badge>
                        {/* <TbMicrophone /> */}
                        <TbVideo />
                        <span>3 min</span>
                    </span>
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <div className="flex flex-1 flex-col">
                    <p>If you meet this condition in a secretary tab, then what will you do to resolve it?</p>
                    {editable && (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="ml-auto mt-2">
                                <TbDots className="text-base" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
