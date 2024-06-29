import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const InsightsHeader = () => {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('match');
    const [filter, setFilter] = useState({
        match: 'all',
        rating: 'all',
        assess: 'all',
    });

    const [, setSearchParams] = useSearchParams();

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        setSearch(urlSearchParams.get('q') || '');
        setSortBy(urlSearchParams.get('sortBy') || 'match');
        setFilter({
            match: urlSearchParams.get('match') || 'all',
            rating: urlSearchParams.get('rating') || 'all',
            assess: urlSearchParams.get('assess') || 'all',
        });
    }, []);

    const apply = () => {
        const query: Record<string, string> = {
            tab: 'insights',
        };
        if (search) query.q = search;
        if (sortBy) query.sortBy = sortBy;
        if (filter.match !== 'all') query.match = filter.match;
        if (filter.rating !== 'all') query.rating = filter.rating;
        if (filter.assess !== 'all') query.assess = filter.assess;
        setSearchParams(query);
    };

    const clear = () => {
        setSearch('');
        setSortBy('match');
        setFilter({
            match: 'all',
            rating: 'all',
            assess: 'all',
        });
        setSearchParams({
            tab: 'insights',
        });
    };

    return (
        <CardHeader className="flex flex-col">
            <div className="flex flex-row gap-4">
                <div>
                    <CardTitle className="text-base">Candidate</CardTitle>
                    <CardDescription>Manage your candidates.</CardDescription>
                </div>
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search candidate..."
                    className="ml-auto max-w-md"
                />
                <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sort by</SelectLabel>
                            <SelectItem value="match">Sort by match</SelectItem>
                            <SelectItem value="rating">Sort by rating</SelectItem>
                            <SelectItem value="assess">Sort by assess avg.</SelectItem>
                            <SelectItem value="applied_on">Sort by applied on</SelectItem>
                            <SelectItem value="updated_on">Sort by updated on</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button onClick={apply} variant="black">
                    Apply filter
                </Button>
            </div>
            <div className="flex flex-row justify-end gap-4">
                <Select
                    value={filter.match}
                    onValueChange={(value) => setFilter((prev) => ({ ...prev, match: value }))}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Match percent" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Match percent</SelectLabel>
                            <SelectItem value="all">Match: All</SelectItem>
                            <SelectItem value="0-50">Match: 0-50%</SelectItem>
                            <SelectItem value="50-80">Match: 50-80%</SelectItem>
                            <SelectItem value="80-100">Match: 80-100%</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select
                    value={filter.rating}
                    onValueChange={(value) => setFilter((prev) => ({ ...prev, rating: value }))}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Rating" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Rating</SelectLabel>
                            <SelectItem value="all">Rating: All</SelectItem>
                            <SelectItem value="0-5">Rating: 0-5</SelectItem>
                            <SelectItem value="5-8">Rating: 5-8</SelectItem>
                            <SelectItem value="8-10">Rating: 8-10</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select
                    value={filter.assess}
                    onValueChange={(value) => setFilter((prev) => ({ ...prev, assess: value }))}
                >
                    <SelectTrigger className="w-[220px]">
                        <SelectValue placeholder="Assessment avg." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Rating</SelectLabel>
                            <SelectItem value="all">Assessment avg.: All</SelectItem>
                            <SelectItem value="0-50">Assessment avg.: 0-50%</SelectItem>
                            <SelectItem value="50-80">Assessment avg.: 50-80</SelectItem>
                            <SelectItem value="80-100">Assessment avg.: 80-100%</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button variant="ghost" onClick={clear}>
                    Clear filter
                </Button>
            </div>
        </CardHeader>
    );
};

export default InsightsHeader;
