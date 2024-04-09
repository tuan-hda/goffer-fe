import InsightsBar from './InsightsBar';
import { MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Image } from '@nextui-org/react';
import { Progress } from '../ui/progress';
import { Input } from '../ui/input';
import { TbMatchstick, TbProgress, TbStar } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';

// type Candidate = {
//     imageUrl: string;
//     name: string;
//     appliedOn: string;
//     email: string;
//     progress: string;
//     rating: number; // Assuming rating is numerical
//     match: number; // Assuming match is numerical
// };

const mockCandidates = [
    {
        id: '660d5ce5d5b60d0295d8eb6c',
        imageUrl:
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/434854114_717890963889367_1448504705424139842_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHC0zi9wXR7C8eYNEcnlvHxtEcDeuQU32O0RwN65BTfY52pMiJj1eUrUjNdxk32Neeo2YutK3KNdlD5MIzCG0vX&_nc_ohc=i39x4Gp91jsAb4Ou5J5&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAJKg59QS5EhKfDwQDeM6VEppyYlxQhhb4qQwPR2lOSYA&oe=661817D4',
        name: 'Hoang Dinh Anh Tuan',
        appliedOn: '2023-04-05',
        email: 'jane.doe@example.com',
        progress: 'Interview',
        rating: 4,
        match: 99,
    },
    {
        id: '660d5ce5d5b60d0295d8eb6c',
        imageUrl:
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/434854114_717890963889367_1448504705424139842_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHC0zi9wXR7C8eYNEcnlvHxtEcDeuQU32O0RwN65BTfY52pMiJj1eUrUjNdxk32Neeo2YutK3KNdlD5MIzCG0vX&_nc_ohc=i39x4Gp91jsAb4Ou5J5&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAJKg59QS5EhKfDwQDeM6VEppyYlxQhhb4qQwPR2lOSYA&oe=661817D4',
        name: 'Hoang Dinh Anh Tuan',
        appliedOn: '2023-04-05',
        email: 'jane.doe@example.com',
        progress: 'Interview',
        rating: 4,
        match: 99,
    },
    {
        id: '660d5ce5d5b60d0295d8eb6c',
        imageUrl:
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/434854114_717890963889367_1448504705424139842_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHC0zi9wXR7C8eYNEcnlvHxtEcDeuQU32O0RwN65BTfY52pMiJj1eUrUjNdxk32Neeo2YutK3KNdlD5MIzCG0vX&_nc_ohc=i39x4Gp91jsAb4Ou5J5&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAJKg59QS5EhKfDwQDeM6VEppyYlxQhhb4qQwPR2lOSYA&oe=661817D4',
        name: 'Hoang Dinh Anh Tuan',
        appliedOn: '2023-04-05',
        email: 'jane.doe@example.com',
        progress: 'Interview',
        rating: 4,
        match: 99,
    },
    {
        id: '660d5ce5d5b60d0295d8eb6c',
        imageUrl:
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/434854114_717890963889367_1448504705424139842_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHC0zi9wXR7C8eYNEcnlvHxtEcDeuQU32O0RwN65BTfY52pMiJj1eUrUjNdxk32Neeo2YutK3KNdlD5MIzCG0vX&_nc_ohc=i39x4Gp91jsAb4Ou5J5&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAJKg59QS5EhKfDwQDeM6VEppyYlxQhhb4qQwPR2lOSYA&oe=661817D4',
        name: 'Hoang Dinh Anh Tuan',
        appliedOn: '2023-04-05',
        email: 'jane.doe@example.com',
        progress: 'Interview',
        rating: 4,
        match: 99,
    },
    {
        id: '660d5ce5d5b60d0295d8eb6c',
        imageUrl:
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/434854114_717890963889367_1448504705424139842_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHC0zi9wXR7C8eYNEcnlvHxtEcDeuQU32O0RwN65BTfY52pMiJj1eUrUjNdxk32Neeo2YutK3KNdlD5MIzCG0vX&_nc_ohc=i39x4Gp91jsAb4Ou5J5&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAJKg59QS5EhKfDwQDeM6VEppyYlxQhhb4qQwPR2lOSYA&oe=661817D4',
        name: 'Hoang Dinh Anh Tuan',
        appliedOn: '2023-04-05',
        email: 'jane.doe@example.com',
        progress: 'Interview',
        rating: 4,
        match: 99,
    },
    {
        id: '660d5ce5d5b60d0295d8eb6c',
        imageUrl:
            'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/434854114_717890963889367_1448504705424139842_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHC0zi9wXR7C8eYNEcnlvHxtEcDeuQU32O0RwN65BTfY52pMiJj1eUrUjNdxk32Neeo2YutK3KNdlD5MIzCG0vX&_nc_ohc=i39x4Gp91jsAb4Ou5J5&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAJKg59QS5EhKfDwQDeM6VEppyYlxQhhb4qQwPR2lOSYA&oe=661817D4',
        name: 'Hoang Dinh Anh Tuan',
        appliedOn: '2023-04-05',
        email: 'jane.doe@example.com',
        progress: 'Interview',
        rating: 4,
        match: 99,
    },
];

const Insights = () => {
    const candidates = mockCandidates;
    const navigate = useNavigate();
    const { domain, id: jobId } = useParams();

    const handleViewDetail = (id: string) => () => {
        navigate(`/app/organization/${domain}/job/${jobId}/applicant/${id}`);
    };

    return (
        <div className="w-full text-sm">
            <InsightsBar />
            <div className="mt-10 text-sm">
                <Card className="bg-white/100 shadow-none">
                    <CardHeader className="flex flex-row gap-4">
                        <div>
                            <CardTitle className="text-base">Candidate</CardTitle>
                            <CardDescription>Manage your candidates.</CardDescription>
                        </div>
                        <Input placeholder="Filter candidate..." className="ml-auto max-w-xs" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" variant="outline">
                                    <TbMatchstick className="h-4 w-4" />
                                    <span className="ml-2">Match</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by match</DropdownMenuLabel>
                                <DropdownMenuItem>{'> '}80%</DropdownMenuItem>
                                <DropdownMenuItem>60-80%</DropdownMenuItem>
                                <DropdownMenuItem>{'< '}60%</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" variant="outline">
                                    <TbStar className="h-4 w-4" />
                                    <span className="ml-2">Rating</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by rating</DropdownMenuLabel>
                                <DropdownMenuItem>0-1</DropdownMenuItem>
                                <DropdownMenuItem>1-2</DropdownMenuItem>
                                <DropdownMenuItem>2-3</DropdownMenuItem>
                                <DropdownMenuItem>3-4</DropdownMenuItem>
                                <DropdownMenuItem>4-5</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" variant="outline">
                                    <TbProgress className="h-4 w-4" />
                                    <span className="ml-2">Progress</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by progress</DropdownMenuLabel>
                                <DropdownMenuItem>Applied</DropdownMenuItem>
                                <DropdownMenuItem>Shortlisted</DropdownMenuItem>
                                <DropdownMenuItem>Phone call</DropdownMenuItem>
                                <DropdownMenuItem>On-site</DropdownMenuItem>
                                <DropdownMenuItem>Offer</DropdownMenuItem>
                                <DropdownMenuItem>Hire</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="ghost">Clear filter</Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="hidden w-[100px] sm:table-cell">
                                        <span className="sr-only">Image</span>
                                    </TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Applied on</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead className="hidden md:table-cell">Match</TableHead>
                                    <TableHead className="hidden md:table-cell">Rating</TableHead>
                                    <TableHead className="hidden md:table-cell">Progress</TableHead>
                                    <TableHead>
                                        <span className="sr-only">Actions</span>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {candidates.map((candidate, index) => (
                                    <TableRow key={index}>
                                        <TableCell
                                            onClick={handleViewDetail(candidate.id)}
                                            className="hidden cursor-pointer sm:table-cell"
                                        >
                                            <Image
                                                alt={`${candidate.name}'s photo`}
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src={candidate.imageUrl}
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell
                                            onClick={handleViewDetail(candidate.id)}
                                            className="cursor-pointer font-medium"
                                        >
                                            {candidate.name}
                                        </TableCell>
                                        <TableCell>{candidate.appliedOn}</TableCell>
                                        <TableCell>{candidate.email}</TableCell>

                                        <TableCell className="hidden md:table-cell">
                                            <Badge variant="outline">{candidate.match}%</Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            <Badge>{candidate.rating}</Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            <p className="mb-2">Applied</p>
                                            <Progress color="primary" value={16} className="h-1" />
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Toggle menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>View detail</DropdownMenuItem>
                                                    <DropdownMenuItem>Move to</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                    <CardFooter>
                        <div className="text-xs text-muted-foreground">
                            Showing <strong>1-10</strong> of <strong>32</strong> candidates
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Insights;
