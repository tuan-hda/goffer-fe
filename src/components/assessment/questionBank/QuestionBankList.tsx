import useListOrgQuestions from '@/hooks/useListOrgQuestions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import QuestionBankListCoding from './QuestionBankListCoding';
import QuestionBankListMCQ from './QuestionBankListMCQ';

const QuestionBankList = () => {
    const { data: mcq } = useListOrgQuestions({
        type: 'mcq',
        populate: 'author',
    });
    const { data: coding } = useListOrgQuestions({
        type: 'coding',
        populate: 'author',
    });
    const { data: behavioral } = useListOrgQuestions({
        type: 'behavioral',
        populate: 'author',
    });

    return (
        <Tabs defaultValue="MCQ" className="mt-5">
            <TabsList className="mb-2">
                <TabsTrigger value="MCQ">
                    <span>MCQ ({mcq?.totalResults || 0})</span>
                </TabsTrigger>
                <TabsTrigger value="coding">
                    <span>Coding question ({coding?.totalResults || 0})</span>
                </TabsTrigger>
                <TabsTrigger value="behavioral">
                    <span>Behavioral question ({behavioral?.totalResults || 0})</span>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="MCQ">
                <QuestionBankListMCQ />
            </TabsContent>
            <TabsContent value="coding">
                <QuestionBankListCoding />
            </TabsContent>
            <TabsContent value="behavioral">
                <div className="grid grid-cols-3 gap-5">
                    {/* <QuestionBankItem type="behavioral" />
                    <QuestionBankItem type="behavioral" />
                    <QuestionBankItem type="behavioral" />
                    <QuestionBankItem type="behavioral" />
                    <QuestionBankItem type="behavioral" />
                    <QuestionBankItem type="behavioral" />
                    <QuestionBankItem type="behavioral" /> */}
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default QuestionBankList;
