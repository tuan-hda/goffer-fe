import { QuestionBankHeader, QuestionBankList } from '@/components/assessment';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { PiBank } from 'react-icons/pi';

const QuestionBank = () => {
    return (
        <div className="px-6 py-5 text-sm">
            <Breadcrumbs className="mt-[5px]">
                <BreadcrumbItem>
                    <PiBank className="text-lg" /> Question bank
                </BreadcrumbItem>
            </Breadcrumbs>
            <div className="pt-5">
                <QuestionBankHeader />
                <QuestionBankList />
            </div>
        </div>
    );
};

export default QuestionBank;
