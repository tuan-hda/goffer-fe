import { Button } from '@/components/ui/button';
import useCurrPublicAssessment from '@/hooks/useCurrPublicAssessment';
import { Image } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const AssessmentSuccess = () => {
    const { data, isLoading } = useCurrPublicAssessment();

    return (
        <div className="relative flex h-screen w-screen flex-col text-sm">
            <img src="/diamond.png" alt="bloom" className="fixed left-[16vw] top-[4vh] w-[35vw] opacity-50" />
            <img
                src="/flower.png"
                alt="bloom"
                className="fixed bottom-[16vh] left-[65vw] w-[35vw] -translate-x-1/2 opacity-50"
            />
            <div className="relative flex h-full w-full flex-col bg-white/60 backdrop-blur-xl">
                <div className="flex h-full">
                    <div className="relative m-auto flex max-w-[400px] flex-col items-center gap-4 text-center">
                        <Image className="h-20 w-20" src="/success1.png" />
                        <p className="mt-2 text-base font-medium">You already submitted this assessment</p>
                        <p>
                            Thank you for spending time taking the assessment. We will inform you through email about
                            the result.
                        </p>
                        <Button asChild variant="outline" className="mt-2">
                            <Link to={`/app/job/${data?.job?.id}/pipeline`}>Go to your application</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssessmentSuccess;
