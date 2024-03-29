import classNames from 'classnames';
import { Button } from '../ui/button';

type SelectCardProps = {
    className?: string;
    children?: React.ReactNode;
    isSelected?: boolean;
};

const SelectCard = ({ className, children, isSelected }: SelectCardProps) => {
    return (
        <Button
            variant="outline"
            type="button"
            className={classNames(
                'relative h-fit w-full justify-start rounded-xl p-4',
                isSelected ? 'bg-orange-300/30 hover:bg-orange-300/30' : 'bg-white/30',
                className,
            )}
        >
            {children}
            <div className="absolute right-4 top-4 h-4 w-4 rounded-full border border-gray-500" />
        </Button>
    );
};

export default SelectCard;
