import React from 'react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';

type SearchFilterProps = {
    filter: {
        search: string;
        status: string;
        os: string;
    };
    setFilter: React.Dispatch<
        React.SetStateAction<{
            search: string;
            status: string;
            os: string;
        }>
    >;
};

const SearchFilter = ({ filter, setFilter }: SearchFilterProps) => {
    return (
        <div className="flex items-center gap-4">
            <Input
                value={filter.search}
                onChange={(e) =>
                    setFilter((prev) => ({
                        ...prev,
                        search: e.target.value,
                    }))
                }
                placeholder="Search report"
                className="max-w-[240px]"
            />
            <Select
                value={filter.status}
                onValueChange={(value) =>
                    setFilter((prev) => ({
                        ...prev,
                        status: value === 'all' ? '' : value,
                    }))
                }
                defaultValue="all"
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Report status</SelectLabel>
                        <SelectItem value="all">All statuses</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select
                value={filter.os}
                onValueChange={(value) =>
                    setFilter((prev) => ({
                        ...prev,
                        os: value === 'all' ? '' : value,
                    }))
                }
                defaultValue="all"
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select OS" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Operating system</SelectLabel>
                        <SelectItem value="all">All OS</SelectItem>
                        <SelectItem value="windows">Windows</SelectItem>
                        <SelectItem value="linux">Linux</SelectItem>
                        <SelectItem value="macOS">MacOS</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default SearchFilter;
