import { Image } from '@nextui-org/react';
import { TableCell, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Apply } from '@/types/application.type';
import moment from 'moment';
import pipeline from '@/data/pipeline';

type InsightCandidateProps = {
    candidate: Apply;
};

const InsightCandidate = ({ candidate }: InsightCandidateProps) => {
    return (
        <TableRow>
            <TableCell className="hidden cursor-pointer sm:table-cell">
                <Image
                    alt={`${candidate.name}'s photo`}
                    className="aspect-square rounded-2xl object-cover"
                    height="40"
                    src={candidate.owner?.avatar}
                    width="40"
                />
            </TableCell>
            <TableCell className="cursor-pointer font-medium">
                <Link to={`applicant/${candidate.id}`} target="_blank">
                    <div>
                        <p className="font-light">{candidate.name}</p>
                        <p>{candidate.email}</p>
                    </div>
                </Link>
            </TableCell>
            <TableCell>{moment(candidate.createdAt).format('DD/MM/YY')}</TableCell>
            <TableCell>{moment(candidate.updatedAt).format('DD/MM/YY')}</TableCell>

            <TableCell className="hidden md:table-cell">
                {candidate.match ? <Badge variant="outline">{candidate.match || 0}%</Badge> : '-'}
            </TableCell>
            <TableCell className="hidden md:table-cell">{candidate.rating ?? '-'}</TableCell>

            <TableCell>{candidate.assessmentAvg ? <Badge>${candidate.assessmentAvg}%</Badge> : '-'}</TableCell>

            <TableCell onClick={(e) => e.stopPropagation()}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                            <Link to={`applicant/${candidate.id}`}>View detail</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Move to</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    {pipeline.map((stage) => (
                                        <DropdownMenuItem
                                            disabled={candidate.phase === stage.title.toLowerCase()}
                                            key={stage.title}
                                        >
                                            {stage.title}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
};

export default InsightCandidate;
