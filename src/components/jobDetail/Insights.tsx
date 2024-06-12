import InsightsBar from './InsightsBar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import InsightCandidate from './InsightCandidate';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
            'http://res.cloudinary.com/doxsstgkc/image/upload/v1716520511/goffer/tikvideo_app_7289049866494364974_11_jpeg_1716520507717.jpg',
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
            'http://res.cloudinary.com/doxsstgkc/image/upload/v1716520511/goffer/tikvideo_app_7289049866494364974_11_jpeg_1716520507717.jpg',
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
            'http://res.cloudinary.com/doxsstgkc/image/upload/v1716520511/goffer/tikvideo_app_7289049866494364974_11_jpeg_1716520507717.jpg',
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
            'http://res.cloudinary.com/doxsstgkc/image/upload/v1716520511/goffer/tikvideo_app_7289049866494364974_11_jpeg_1716520507717.jpg',
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
            'http://res.cloudinary.com/doxsstgkc/image/upload/v1716520511/goffer/tikvideo_app_7289049866494364974_11_jpeg_1716520507717.jpg',
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
            'http://res.cloudinary.com/doxsstgkc/image/upload/v1716520511/goffer/tikvideo_app_7289049866494364974_11_jpeg_1716520507717.jpg',
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

    return (
        <div className="w-full overflow-x-auto text-sm">
            <div className="min-w-[1100px]">
                <InsightsBar />
                <div className="mt-6 text-sm">
                    <Card className="bg-white/100 shadow-none">
                        <CardHeader className="flex flex-row gap-4">
                            <div>
                                <CardTitle className="text-base">Candidate</CardTitle>
                                <CardDescription>Manage your candidates.</CardDescription>
                            </div>
                            <Input placeholder="Filter candidate..." className="ml-auto max-w-xs" />
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="match">Match</SelectItem>
                                    <SelectItem value="rating">Rating</SelectItem>
                                    <SelectItem value="assess">Assess avg.</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="ghost">Clear filter</Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="hidden w-[50px] sm:table-cell">
                                            <span className="sr-only">Image</span>
                                        </TableHead>
                                        <TableHead>Info</TableHead>
                                        <TableHead>Applied on</TableHead>
                                        <TableHead>Updated on</TableHead>
                                        <TableHead>Match</TableHead>
                                        <TableHead>Rating</TableHead>
                                        <TableHead>Assess avg.</TableHead>
                                        <TableHead>
                                            <span className="sr-only">Actions</span>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>

                                {/* Map */}
                                <TableBody>
                                    {candidates.map((candidate, index) => (
                                        <InsightCandidate key={index} candidate={candidate} />
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
        </div>
    );
};

export default Insights;
