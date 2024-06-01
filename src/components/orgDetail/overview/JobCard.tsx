import { Button } from '@nextui-org/react';
import { TbArrowRight } from 'react-icons/tb';

const JobCard = () => {
    return (
        <Button
            variant="light"
            radius="lg"
            className="mb-4 w-full justify-between px-6 py-10"
            endContent={<TbArrowRight size={20} />}
        >
            <div>
                <p className="text-start font-semibold text-text">Enterprise Account Executive @ ClickUp</p>
                <p className="text-start text-sm text-muted-foreground">
                    <span>San Diego</span>
                    <span className="mx-2 text-lg">•</span>
                    <span>$60k - $80k</span>
                </p>
            </div>
        </Button>
    );
};

export default JobCard;
