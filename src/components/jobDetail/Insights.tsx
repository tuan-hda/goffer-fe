import InsightsBar from './InsightsBar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import InsightCandidate from './InsightCandidate';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useListApplications from '@/hooks/useListApplications';
import { Pagination } from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// type Candidate = {
//     imageUrl: string;
//     name: string;
//     appliedOn: string;
//     email: string;
//     progress: string;
//     rating: number; // Assuming rating is numerical
//     match: number; // Assuming match is numerical
// };

const Insights = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = useMemo(() => {
        return parseInt(searchParams.get('page') || '1');
    }, [searchParams]);

    const { data } = useListApplications({
        populate: 'owner',
        page: currentPage,
    });
    const list = data?.results || [];
    const totalResults = data?.totalResults || 0;
    const totalPages = data?.totalPages || 0;
    const start = (currentPage - 1) * 10 + 1;
    const end = Math.min(currentPage * 10, totalResults);

    const handleChange = (page: number) => {
        setSearchParams({ page: page.toString() });
    };

    return (
        <div className="w-full overflow-x-auto text-sm">
            <div className="min-w-[1100px]">
                <InsightsBar />

                <div className="mt-6 text-sm">
                    <Card className="bg-white/100 shadow-none">
                        {list?.length === 0 ? (
                            <div className="p-6 text-sm">No candidate yet.</div>
                        ) : (
                            <>
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
                                            {list?.map((candidate, index) => (
                                                <InsightCandidate key={index} candidate={candidate} />
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                                <CardFooter className="flex-col">
                                    <Pagination
                                        page={currentPage}
                                        onChange={handleChange}
                                        showControls
                                        color="default"
                                        total={totalPages}
                                    />
                                    <div className="mt-4 w-full text-xs text-muted-foreground">
                                        Showing{' '}
                                        <strong>
                                            {start} - {end}
                                        </strong>{' '}
                                        of <strong>{totalResults}</strong> candidates
                                    </div>
                                </CardFooter>
                            </>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Insights;
