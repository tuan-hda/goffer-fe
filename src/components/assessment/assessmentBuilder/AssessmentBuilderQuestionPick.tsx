import { Label } from '@/components/ui/label';
import AssessmentBuilderQuestionList from './AssessmentBuilderQuestionList';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import QuestionCreateDropdown from '../questionBank/QuestionCreateDropdown';
import useNewAssessmentStore from '@/stores/newAssessmentStore';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import { shallow } from 'zustand/shallow';

const AssessmentBuilderQuestionPick = () => {
    const [assessment, setAssessment] = useNewAssessmentStore(
        (state) => [state.assessment, state.setAssessment],
        shallow,
    );
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
        <div className="mt-8">
            <Label className="mb-2 block text-xl font-normal">Pick questions ({assessment.questions.size})</Label>
            <div className="flex items-center gap-2">
                <Input value={value} onChange={handleChange} placeholder="Search question bank..." className="w-fit" />
                <span>or</span>
                <QuestionCreateDropdown>
                    <Button variant="black">Create new question</Button>
                </QuestionCreateDropdown>
                <Button
                    variant="outline"
                    className="ml-auto"
                    onClick={() => setAssessment((state) => ({ ...state, questions: new Map() }))}
                >
                    Deselect all
                </Button>
            </div>
            <div className="h-4" />
            <AssessmentBuilderQuestionList />
        </div>
    );
};

export default AssessmentBuilderQuestionPick;
