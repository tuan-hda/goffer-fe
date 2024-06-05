import Header from './Header';
import QuestionBehavioralForm from './QuestionBehavioralForm';

const Behavioral = () => {
    return (
        <div>
            <Header title="Question Behavioral Builder" />
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
