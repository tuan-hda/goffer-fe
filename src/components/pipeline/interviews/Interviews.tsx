import { Answer } from '@/types/answer.type';
import { Question } from '@/types/question.type';
import classNames from 'classnames';
import { useState } from 'react';
import { TbMicrophone, TbVideo } from 'react-icons/tb';
import DetailPanel from './DetailPanel';

interface Props {
    questions: Question[];
    answers: Answer[];
}

const Interviews = ({ questions, answers }: Props) => {
    const [selected, setSelected] = useState(questions[0]);
    return (
        <div className="mt-8 flex flex-row">
            <div className="h-[calc(100vh-260px)] w-[400px] overflow-y-scroll pr-8">
                {questions.map((question, index) => (
                    <div className="border-b-1 !border-b-gray-200/70 py-2 ">
                        <button
                            className={classNames(
                                'flex w-full flex-col justify-start rounded-xl p-3 hover:bg-beige/20',
                                question.id === selected.id && 'bg-beige/40',
                            )}
                            onClick={() => setSelected(question)}
                        >
                            <p className="text-xs font-medium text-black underline">Question {index + 1}</p>
                            <div className="mt-4 flex flex-row items-center">
                                <div className="rounded-full bg-secondary p-2">
                                    {question.kind === 'audio' ? <TbMicrophone /> : <TbVideo />}
                                </div>
                                <p className="mx-4 w-full truncate text-xs text-gray-600">{question.content}</p>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
            <DetailPanel question={selected} />
        </div>
    );
};

export default Interviews;
