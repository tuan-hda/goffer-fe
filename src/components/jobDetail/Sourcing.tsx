import useSourcing from '@/hooks/useSourcing';
import EditExperience from '../newJob/EditExperience';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import Candidate from './Candidate';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { User } from '@/types/user.type';

const Sourcing = () => {
    const { id } = useParams();
    const { data, isFetching, fetchNextPage, hasNextPage } = useSourcing(id);

    const potentials: User[] = useMemo(() => {
        if (!data) return [];

        return data.pages.reduce((acc: User[], page) => {
            return [...acc, ...page.results];
        }, []);
    }, [data]);

    if (!data) return null;

    return (
        <div className="w-full items-start gap-6 text-sm">
            <div className="flex gap-6">
                <div className="flex-1 items-center">
                    <h2 className="mb-3 text-xl">{potentials.length} potentials</h2>
                    <div className="space-y-4">
                        {potentials.map((profile) => (
                            <Candidate
                                {...profile}
                                key={profile.id}
                                match={90}
                                tools={profile.tools || []}
                                skills={profile.skills || []}
                                experiences={profile.experiences || []}
                            />
                        ))}

                        <div className="flex w-full flex-col">
                            {isFetching && <p className="text-center">Loading...</p>}
                            {!isFetching && hasNextPage && (
                                <Button variant="outline" className="mx-auto" onClick={() => fetchNextPage()}>
                                    Load more
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <p className="mb-3 text-xl">Filtering</p>

                    <Card className="bg-white/100 shadow-none">
                        <CardHeader>
                            <CardDescription className="text-gray-500">
                                Use filters to narrow down the list of candidates
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="search">Search</Label>
                                <Input id="search" placeholder="Enter search..." />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <p>Experience</p>
                                <EditExperience />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="skills">Skills</Label>
                                <Input id="skills" placeholder="Enter skills..." />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="tools">Tools</Label>
                                <Input id="tools" placeholder="Enter tools..." />
                            </div>
                        </CardContent>
                        <CardFooter className="gap-4">
                            <Button variant="outline">Apply filter</Button>
                            <Button variant="ghost">Clear filter</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Sourcing;
