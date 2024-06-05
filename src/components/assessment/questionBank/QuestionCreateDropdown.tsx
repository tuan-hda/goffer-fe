import { Link, useParams } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../ui/dropdown-menu';

type QuestionCreateDropdownProps = {
    children?: React.ReactNode;
};

const QuestionCreateDropdown = ({ children }: QuestionCreateDropdownProps) => {
    const { domain } = useParams();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Choose question type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link to={`/app/organization/${domain}/bank/builder/mcq`}>MCQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link to={`/app/organization/${domain}/bank/builder/coding`}>Coding</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link to={`/app/organization/${domain}/bank/builder/behavioral`}>Behavioral</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default QuestionCreateDropdown;
