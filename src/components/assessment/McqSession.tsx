import { Image } from '@nextui-org/react';
import QuestionList from './questionBank/QuestionList';
import SessionTracker from './SessionTracker';
import useCurrPublicAssessment from '@/hooks/useCurrPublicAssessment';

const McqSession = () => {
    const { data } = useCurrPublicAssessment();

    return (
        <div className="flex min-h-screen w-full text-sm">
            <div className="mx-auto flex w-full max-w-screen-xl gap-20 p-10">
                <div className="flex-1">
                    <p className="mt-4 font-serif text-3xl font-bold">{data?.title}</p>
                    <div className="mt-5 flex items-center gap-2">
                        <div className="flex h-fit w-fit items-center gap-4 overflow-hidden">
                            by
                            <Image src={data?.org?.logo} className="h-12 w-12 rounded-3xl" />
                            <div>
                                <p className="font-semibold">{data?.org?.name}</p>
                                <p>{data?.org?.field}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />
                    <QuestionList />
                </div>

                <SessionTracker />
            </div>
        </div>
    );
};

export default McqSession;
