import useListOrgQuestions from '@/hooks/useListOrgQuestions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import QuestionBankListCoding from './QuestionBankListCoding';
import QuestionBankListMCQ from './QuestionBankListMCQ';
import QuestionBankListBehavioral from './QuestionBankListBehavioral';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const QuestionBankList = () => {
    const {
        list: mcq,
        refetch: mcqRefetch,
        totalResults: mcqTotalResults,
    } = useListOrgQuestions({
        type: 'mcq',
        populate: 'author',
    });
    const {
        list: coding,
        refetch: codingRefetch,
        totalResults: codingTotalResults,
    } = useListOrgQuestions({
        type: 'coding',
        populate: 'author',
    });
    const {
        list: behavioral,
        refetch: behavioralRefetch,
        totalResults: behavioralTotalResults,
    } = useListOrgQuestions({
        type: 'behavioral',
        populate: 'author',
    });

    const [searchParams, setSearchParams] = useSearchParams();
    const type = searchParams.get('type') || 'mcq';

    useEffect(() => {
        mcqRefetch();
        codingRefetch();
        behavioralRefetch();
    }, [searchParams]);

    return (
        <Tabs
            value={type}
            onValueChange={(value) => {
                searchParams.set('type', value);
                setSearchParams(searchParams);
            }}
            defaultValue="mcq"
            className="mt-5"
        >
            <TabsList className="mb-2">
                <TabsTrigger value="mcq">
                    <span>MCQ ({mcqTotalResults || 0})</span>
                </TabsTrigger>
                <TabsTrigger value="coding">
                    <span>Coding question ({codingTotalResults || 0})</span>
                </TabsTrigger>
                <TabsTrigger value="behavioral">
                    <span>Behavioral question ({behavioralTotalResults || 0})</span>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="mcq">
                <QuestionBankListMCQ />
            </TabsContent>
            <TabsContent value="coding">
                <QuestionBankListCoding />
            </TabsContent>
            <TabsContent value="behavioral">
                <QuestionBankListBehavioral />
            </TabsContent>
        </Tabs>
    );
};

export default QuestionBankList;
