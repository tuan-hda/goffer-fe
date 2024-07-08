import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { TbArrowRight, TbPencilStar } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import GiveFeedback from './GiveFeedback';

const ApplySuccess = () => {
    const navigate = useNavigate();
    const { data } = useSelfProfileQuery();

    return (
        <div className="space-y-8 text-2xl font-normal text-text">
            <p className="font-serif">Hi {data?.name} 👋,</p>
            <p className="font-serif">
                We received your application, our hiring team is excited to listen 👂 to your answers and learning more
                about you.
            </p>
            <p className="font-serif">You should be hearing back from us shortly!</p>
            <div className="flex gap-x-2">
                <Dialog defaultOpen>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <DialogTrigger asChild>
                                    <Button size="icon" variant="outline" className="size-10 items-center">
                                        <TbPencilStar size={24} />
                                    </Button>
                                </DialogTrigger>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Give Feedback</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Give Feedback</DialogTitle>
                        </DialogHeader>
                        <GiveFeedback />
                    </DialogContent>
                </Dialog>
                <Button size="lg" className="gap-x-2" onClick={() => navigate('/app/jobs')} variant="black">
                    View more jobs
                    <TbArrowRight size={24} />
                </Button>
            </div>
        </div>
    );
};

export default ApplySuccess;
