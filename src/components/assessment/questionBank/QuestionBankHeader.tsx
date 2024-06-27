import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { TbSearch, TbX } from 'react-icons/tb';
import QuestionCreateDropdown from './QuestionCreateDropdown';
import useListOrgQuestions from '@/hooks/useListOrgQuestions';
import useQuestionDifficultyCount from '@/hooks/useQuestionDifficultyCount';
import { useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import _ from 'lodash';

const QuestionBankHeader = () => {
    const { data } = useListOrgQuestions();
    const { data: difficultyCount } = useQuestionDifficultyCount();
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState('');

    const list = useMemo(() => {
        return data?.pages.flatMap((page) => page.results);
    }, [data]);

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

    const difficulty = searchParams.get('difficulty');

    if (!data) {
        return null;
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl">{data.pages.at(0)?.totalResults || 0} questions</h1>
                    <p>
                        {difficultyCount?.['1'] || 0} easy, {difficultyCount?.['2'] || 0} medium,{' '}
                        {difficultyCount?.['3'] || 0} hard
                    </p>
                </div>
                <QuestionCreateDropdown>
                    <Button>Add question</Button>
                </QuestionCreateDropdown>
            </div>

            <div className="mt-6 flex gap-4">
                <div className="relative w-[360px]">
                    <Input
                        value={value}
                        onChange={handleChange}
                        className="w-full pl-8"
                        placeholder="Search question..."
                    />
                    <TbSearch className="absolute left-3 top-[10px]" />
                </div>
                <Select
                    value={String(difficulty || '')}
                    onValueChange={(value) => {
                        searchParams.set('difficulty', value);
                        setSearchParams(searchParams);
                    }}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">Easy</SelectItem>
                        <SelectItem value="2">Medium</SelectItem>
                        <SelectItem value="3">Hard</SelectItem>
                    </SelectContent>
                </Select>

                <Button
                    variant="outline"
                    onClick={() => {
                        setSearchParams({});
                        setValue('');
                    }}
                >
                    <TbX className="mr-2" /> Clear filter
                </Button>
            </div>
        </div>
    );
};

export default QuestionBankHeader;
