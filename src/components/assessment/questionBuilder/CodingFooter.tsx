import { Button } from '@/components/ui/button';

type CodingFooterProps = {
    move: (step: number) => void;
    activeStep: number;
};

const CodingFooter = ({ move, activeStep }: CodingFooterProps) => {
    return (
        <div className="mt-5 flex items-center justify-between">
            <Button variant="outline" onClick={() => move(activeStep - 1)}>
                Back
            </Button>
            <Button variant="outline" onClick={() => move(activeStep + 1)}>
                Next
            </Button>
        </div>
    );
};

export default CodingFooter;
