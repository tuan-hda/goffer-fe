import { Button } from '@/components/ui/button';
import { Avatar } from '@nextui-org/react';
import { TbCopy, TbDetails, TbDots, TbReport, TbTrash } from 'react-icons/tb';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DialogTrigger } from '@/components/ui/dialog';
import { Assessment } from '@/types/assessment.type';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AssessmentOrgItemDelete from './AssessmentOrgItemDelete';
import { Checkbox } from '@/components/ui/checkbox';
import moment from 'moment';
import { Badge } from '@/components/ui/badge';

type AssessmentOrgItemProps = {
    assessment: Assessment;
    mode?: 'pick' | 'normal';
    picked?: boolean;
    onPick?: (assessment: Assessment) => void;
    pickContent?: React.ReactNode;
};

const AssessmentOrgItem = ({
    assessment,
    mode = 'normal',
    picked = false,
    onPick,
    pickContent,
}: AssessmentOrgItemProps) => {
    const { domain } = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
        if (mode === 'pick') {
            onPick && onPick(assessment);
            return;
        }
        navigate(assessment.id);
    };

    return (
        <div onClick={handleClick} className="group relative cursor-pointer">
            {mode === 'pick' && (
                <div className="absolute right-2 top-2 flex items-center justify-center rounded-lg bg-white/50 p-1">
                    {pickContent ?? <Checkbox checked={picked} className="h-5 w-5 rounded-lg" />}
                </div>
            )}
            <div className="aspect-video overflow-hidden rounded-2xl shadow-small">
                {assessment.image ? (
                    <img src={assessment.image} alt={assessment.title} className="h-full w-full object-cover" />
                ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-2xl">
                        <p className="font-mono text-2xl">Assessment</p>
                    </div>
                )}
            </div>
            <div className="mt-3 flex items-center gap-3">
                <Avatar src={assessment.owner.avatar || 'default-avatar-url.jpg'} />
                <div className="min-w-0 flex-1">
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap">{assessment.title}</p>
                    <p className="text-xs font-light text-gray-400">Edited {moment(assessment.updatedAt).fromNow()}</p>
                </div>
            </div>
            {!assessment.job && <Badge className="mt-2 font-normal">Global</Badge>}
            <div
                onClick={(e) => e.stopPropagation()}
                className="pointer-events-none absolute -bottom-2 right-0 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100"
            >
                <AssessmentOrgItemDelete id={assessment.id}>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="link" className="text-black">
                                <TbDots className="text-xl" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Options</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link to={`/app/organization/${domain}/assessment/${assessment.id}`}>
                                    <TbDetails className="mr-2" /> View detail
                                </Link>
                            </DropdownMenuItem>{' '}
                            <DropdownMenuItem asChild>
                                <Link to={`/app/organization/${domain}/assessment/${assessment.id}/results`}>
                                    <TbReport className="mr-2" /> View results
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <TbCopy className="mr-2" /> Duplicate
                            </DropdownMenuItem>
                            <DialogTrigger asChild>
                                <DropdownMenuItem>
                                    <TbTrash className="mr-2" />
                                    Delete
                                </DropdownMenuItem>
                            </DialogTrigger>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </AssessmentOrgItemDelete>
            </div>
        </div>
    );
};

export default AssessmentOrgItem;
