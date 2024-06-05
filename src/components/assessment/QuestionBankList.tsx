import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import QuestionBankItem from './QuestionBankItem';

const QuestionBankList = () => {
    return (
        <Tabs defaultValue="MCQ" className="mt-5">
            <TabsList className="mb-2">
                <TabsTrigger value="MCQ">
                    <span>MCQ (20)</span>
                </TabsTrigger>
                <TabsTrigger value="coding">
                    <span>Coding question (30)</span>
                </TabsTrigger>
            </TabsList>
            <TabsContent value="MCQ">
                <div className="grid grid-cols-3 gap-5">
                    <QuestionBankItem type="mcq" />
                    <QuestionBankItem type="mcq" />
                    <QuestionBankItem type="mcq" />
                    <QuestionBankItem type="mcq" />
                </div>
            </TabsContent>
            <TabsContent value="coding">
                <div className="grid grid-cols-3 gap-5">
                    <QuestionBankItem type="coding" />
                    <QuestionBankItem type="coding" />
                    <QuestionBankItem type="coding" />
                    <QuestionBankItem type="coding" />
                    <QuestionBankItem type="coding" />
                    <QuestionBankItem type="coding" />
                    <QuestionBankItem type="coding" />
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default QuestionBankList;
