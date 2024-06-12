import { Image } from '@nextui-org/react';
import { TableCell, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

type InsightCandidateProps = {
    candidate: any;
};

const InsightCandidate = ({ candidate }: InsightCandidateProps) => {
    return (
        <TableRow>
            <TableCell className="hidden cursor-pointer sm:table-cell">
                <Image
                    alt={`${candidate.name}'s photo`}
                    className="aspect-square rounded-2xl object-cover"
                    height="40"
                    src={candidate.imageUrl}
                    width="40"
                />
            </TableCell>
            <TableCell className="cursor-pointer font-medium">
                <Link to={`applicant/${candidate.id}`}>
                    <div>
                        <p className="font-light">{candidate.name}</p>
                        <p>{candidate.email}</p>
                    </div>
                </Link>
            </TableCell>
            <TableCell>{candidate.appliedOn}</TableCell>
            <TableCell>{candidate.appliedOn}</TableCell>

            <TableCell className="hidden md:table-cell">
                <Badge variant="outline">{candidate.match}%</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">{candidate.rating}</TableCell>

            <TableCell>
                <Badge>87%</Badge>
            </TableCell>

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
                        <DropdownMenuItem>Move to</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
};

export default InsightCandidate;
