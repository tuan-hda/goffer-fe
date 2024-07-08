import { Button } from '@/components/ui/button';
import { ApplyResponse } from '@/types/application.type';
import { useState } from 'react';
import ApplySuccess from './ApplySuccess';

type ApplicantFeedbackProps = {
    data: ApplyResponse;
};

const ApplicantFeedback = ({ data }: ApplicantFeedbackProps) => {
    const [step, setStep] = useState(0);

    return (
        <div>
            {step === 0 && (
                <div className="text-base">
                    <p>
                        Thank you for your time. Please leave us a feedback so we can improve the experience for job
                        application.
                    </p>
                    <div className="mt-4 flex gap-4">
                        <Button variant="black" onClick={() => setStep(1)}>
                            Leave feedback
                        </Button>
                        <Button variant="outline" onClick={() => setStep(2)}>
                            Skip
                        </Button>
                    </div>
                </div>
            )}
            {step === 2 && <ApplySuccess />}
        </div>
    );
};

export default ApplicantFeedback;
