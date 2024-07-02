import InsightsBar from './InsightsBar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import InsightCandidate from './InsightCandidate';
import useListApplications from '@/hooks/useListApplications';
import { Pagination } from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import InsightsHeader from './InsightsHeader';
import RejectAll from './RejectAll';

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
    const { id } = useParams();

    const { data } = useListApplications({
        populate: 'owner',
        job: id,
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
                        <InsightsHeader />
                        <div className="mt-5 border-t" />
                        <RejectAll jobId={id!} />
                        <div className="mb-5 border-t" />
                        {list?.length === 0 ? (
                            <div className="flex flex-col items-center gap-4 p-6 text-sm">
                                <img src="/states/empty1.avif" className="w-64" />
                                <p className="text-center">No candidates found.</p>
                            </div>
                        ) : (
                            <>
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
