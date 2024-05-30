import { Input } from '../ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';

const SearchFilter = () => {
    return (
        <div className="flex items-center gap-4">
            <Input placeholder="Search report" className="max-w-[240px]" />
            <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Report status</SelectLabel>
                        <SelectItem value="all">All statuses</SelectItem>
                        <SelectItem value="opened">Opened</SelectItem>
                        <SelectItem value="working">Working</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select OS" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Operating system</SelectLabel>
                        <SelectItem value="all">All OS</SelectItem>
                        <SelectItem value="windows">Windows</SelectItem>
                        <SelectItem value="linux">Linux</SelectItem>
                        <SelectItem value="macos">MacOS</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default SearchFilter;
