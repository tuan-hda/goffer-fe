import Header from './Header';
import QuestionBehavioralForm from './QuestionBehavioralForm';
import useCreateQuestionBehavioral from '@/hooks/useCreateQuestionBehavioral';

const Behavioral = () => {
    const { data, create, update } = useCreateQuestionBehavioral();

    const handleSubmit = () => {
        if (data) {
            update();
        } else {
            create();
        }
    };

    return (
        <div>
            <Header onFinish={handleSubmit} isUpdating={!!data} title="Question Behavioral Builder" />
            <div className="mt-8 flex gap-10">
                <div className="max-w-[560px] flex-1">
                    <QuestionBehavioralForm />
                </div>
                <div className="bg-image-doodles flex-1 rounded-xl opacity-50" />
            </div>
        </div>
    );
};

export default Behavioral;
