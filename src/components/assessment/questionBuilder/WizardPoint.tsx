import classNames from 'classnames';

type WizardPointProps = {
    active?: boolean;
    onClick: () => void;
    isCurrent?: boolean;
    title?: string;
};

const WizardPoint = ({ active, isCurrent, onClick, title }: WizardPointProps) => {
    return (
        <div className="relative">
            <button
                onClick={onClick}
                disabled
                className={classNames('flex h-8 w-8 rounded-full', active ? 'bg-black' : 'border')}
            >
                {isCurrent && <div className="m-auto h-5 w-5 rounded-full bg-white"></div>}
            </button>
            <p
                className={classNames(
                    'absolute -left-[calc(32px)] -top-6 w-[100px] text-center',
                    !active ? 'text-gray-400' : 'font-semibold text-text',
                )}
            >
                {title}
            </p>
        </div>
    );
};

export default WizardPoint;
