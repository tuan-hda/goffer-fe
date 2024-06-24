import useSourcing from '@/hooks/useSourcing';
import EditExperience from '../newJob/EditExperience';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import Candidate from './Candidate';
import { useParams, useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { User } from '@/types/user.type';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { experienceList } from '@/data/experiences';
import skills from '@/data/skills';
import MultipleSelector, { Option } from '../ui/mutli-selector';
import tools from '@/data/tools';

const Sourcing = () => {
    const { id } = useParams();
    const { data, isFetching, fetchNextPage, hasNextPage } = useSourcing(id);

    const [value, setValue] = useState('');
    const [experience, setExperience] = useState('');
    const [selectedSkills, setSelectedSkills] = useState<Option[]>([]);
    const [selectedTools, setSelectedTools] = useState<Option[]>([]);

    const [, setSearchParams] = useSearchParams();

    const potentials: User[] = useMemo(() => {
        if (!data) return [];

        return data.pages.reduce((acc: User[], page) => {
            return [...acc, ...page.results];
        }, []);
    }, [data]);

    const applyFilter = () => {
        const query: Record<string, string> = {};
        if (value) query.searchQuery = value;
        if (experience) query.experience = experience;
        if (selectedSkills.length) query.skills = selectedSkills.map((skill) => skill.value).join(',');
        if (selectedTools.length) query.tools = selectedTools.map((tool) => tool.value).join(',');
        setSearchParams(query);
    };

    const clearFilter = () => {
        setValue('');
        setExperience('');
        setSelectedSkills([]);
        setSelectedTools([]);
        setSearchParams({});
    };

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
                    </div>
                    <div className="mt-8 flex w-full flex-col">
                        {isFetching && <p className="text-center">Loading...</p>}
                        {!isFetching && hasNextPage && (
                            <Button variant="outline" className="mx-auto" onClick={() => fetchNextPage()}>
                                Load more
                            </Button>
                        )}
                        {!isFetching && !hasNextPage && <p className="text-center">No more candidates.</p>}
                    </div>
                </div>

                <div className="w-[400px]">
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
                                <Input
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    id="search"
                                    placeholder="Enter search..."
                                />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <p>Experience</p>
                                <Select value={experience} onValueChange={setExperience}>
                                    <SelectTrigger className="flex-1">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {experienceList.map((exp) => (
                                            <SelectItem key={exp.label} value={exp.value}>
                                                {exp.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>{' '}
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="skills">Skills</Label>
                                <MultipleSelector
                                    value={selectedSkills}
                                    onChange={setSelectedSkills}
                                    placeholder="Skills"
                                    className="min-h-10 bg-white/90"
                                    maxSelected={5}
                                    options={skills}
                                />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="tools">Tools</Label>
                                <MultipleSelector
                                    value={selectedTools}
                                    onChange={setSelectedTools}
                                    placeholder="Tools"
                                    className="min-h-10 bg-white/90"
                                    maxSelected={5}
                                    options={tools}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="gap-4">
                            <Button variant="black" onClick={applyFilter}>
                                Apply filter
                            </Button>
                            <Button variant="ghost" onClick={clearFilter}>
                                Clear filter
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Sourcing;
