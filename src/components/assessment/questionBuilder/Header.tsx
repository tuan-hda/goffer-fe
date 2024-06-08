import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';
import useNewQuestionStore from '@/stores/newQuestionStore';
import { TbLoader, TbTrash } from 'react-icons/tb';
import QuestionBankDelete from '../questionBank/QuestionBankDelete';
import { useParams } from 'react-router-dom';
import useGetQuestion from '@/hooks/useGetQuestion';
import { QUESTION_TYPE } from '@/types/question.type';

type HeaderProps = {
    title: string;
    onFinish?: () => void;
    isUpdating?: boolean;
};

const Header = ({ title, onFinish, isUpdating }: HeaderProps) => {
    const loading = useNewQuestionStore((state) => state.loading);
    const { id } = useParams();
    const { data } = useGetQuestion(id);

    return (
        <div className="col-span-full flex items-center gap-4">
            <h1 className="mr-auto text-2xl">{title}</h1>
            {isUpdating && data && (
                <QuestionBankDelete type={data.type as QUESTION_TYPE} id={id}>
                    <DialogTrigger asChild>
                        <Button size="icon" variant="ghost" className="ml-auto">
                            <TbTrash className="text-lg" />
                        </Button>
                    </DialogTrigger>
                </QuestionBankDelete>
            )}
            <Button disabled={loading} variant="black" onClick={onFinish}>
                {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                {isUpdating ? 'Update' : 'Finish'}
            </Button>
        </div>
    );
};

export default Header;
