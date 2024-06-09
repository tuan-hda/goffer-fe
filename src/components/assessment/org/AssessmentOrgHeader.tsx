import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useListOrgAssessment from '@/hooks/useListOrgAssessment';
import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { TbSearch, TbX } from 'react-icons/tb';
import { Link, useSearchParams } from 'react-router-dom';

const AssessmentOrgHeader = () => {
    const { data } = useListOrgAssessment({ populate: 'owner' });
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState('');

    const setSearch = useMemo(() => {
        return _.debounce((value: string) => {
            searchParams.set('search', value);
            setSearchParams(searchParams);
        }, 500);
    }, [searchParams]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setSearch(e.target.value);
    };

    useEffect(() => {
        setValue(searchParams.get('search') || '');
    }, []);

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl">Assessment ({data?.results.length || 0})</h1>
                <Button asChild>
                    <Link to="builder">Create assessment</Link>
                </Button>
            </div>
            <div className="mt-3 flex gap-4">
                <div className="relative w-[360px]">
                    <Input
                        value={value}
                        onChange={handleChange}
                        className="w-full pl-8"
                        placeholder="Search assessment..."
                    />
                    <TbSearch className="absolute left-3 top-[10px]" />
                </div>
                <Select
                    value={searchParams.get('type') || 'mcq'}
                    onValueChange={(value) => {
                        searchParams.set('type', value);
                        setSearchParams(searchParams);
                    }}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="mcq">MCQ assessment</SelectItem>
                        <SelectItem value="coding">Coding assessment</SelectItem>
                    </SelectContent>
                </Select>

                <Button
                    onClick={() => {
                        setSearchParams({});
                        setValue('');
                    }}
                    variant="outline"
                >
                    <TbX className="mr-2" /> Clear filter
                </Button>
            </div>
        </div>
    );
};

export default AssessmentOrgHeader;
