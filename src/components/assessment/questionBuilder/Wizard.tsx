import classNames from 'classnames';
import WizardPoint from './WizardPoint';

type WizardProps = {
    activeStep: number;
    setActiveStep: (step: number) => void;
};

const Wizard = ({ activeStep, setActiveStep }: WizardProps) => {
    return (
        <div className="relative flex items-center">
            <div className="h-1 w-[50px] bg-black"></div>
            <WizardPoint
                title="Question"
                isCurrent={activeStep === 0}
                active={activeStep >= 0}
                onClick={() => setActiveStep(0)}
            />

            <div className={classNames('h-1 flex-1', activeStep >= 1 ? 'bg-black' : 'bg-gray-100')}></div>
            <WizardPoint
                title="Test cases"
                isCurrent={activeStep === 1}
                active={activeStep >= 1}
                onClick={() => setActiveStep(1)}
            />

            <div className="h-1 w-[50px] bg-gray-100"></div>
        </div>
    );
};

export default Wizard;
