import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import fields from '@/data/fields';

import { useEffect, useState } from 'react';
import { TbSearch, TbSparkles } from 'react-icons/tb';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CompaniesFilter = () => {
    const [value, setValue] = useState('');
    const [field, setField] = useState('');
    const [, setSearchParams] = useSearchParams();

    const filter = () => {
        const query: Record<string, string> = {};
        if (value) {
            query.searchQuery = value;
        }
        if (field) {
            query.field = field;
        }

        setSearchParams(query);
    };

    useEffect(() => {
        const params = Object.fromEntries(new URLSearchParams(window.location.search).entries());
        setValue(params.searchQuery || '');
    }, []);

    const clear = () => {
        setValue('');
        setField('');
        setSearchParams({});
    };

    return (
        <div className="sticky top-10 mt-2 w-[300px] self-start text-sm">
            <div className="flex justify-between">
                <p className="text-lg font-medium">Filters</p>
            </div>

            <div className="relative mt-10 flex min-w-0 flex-1 items-center">
                <TbSearch className="absolute left-4 text-base text-gray-400" />
                <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search..."
                    className="h-10 flex-1 rounded-xl bg-white pl-12 pr-36"
                />
            </div>
            <Label className="mb-2 mt-6 block">Field</Label>
            <Select value={field} onValueChange={setField}>
                <SelectTrigger>
                    <SelectValue placeholder="Field" />
                </SelectTrigger>
                <SelectContent>
                    {fields.map((f, index) => (
                        <SelectItem key={index} value={f.name}>
                            {f.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <div className="mt-8 flex items-center justify-between gap-4">
                <Button onClick={clear} variant="outline" className="flex-1">
                    Clear
                </Button>
                <Button onClick={filter} className="flex-1" variant="black">
                    Apply filters
                </Button>
            </div>
        </div>
    );
};

export default CompaniesFilter;
