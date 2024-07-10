import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { User } from '@/types/user.type';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type EnhanceButtonProps = {
    user: User;
};

const EnhanceButton = ({ user }: EnhanceButtonProps) => {
    if (!user || !user.resume) return null;

    return (
        <TooltipProvider>
            <Tooltip open={user.isPro ? false : undefined}>
                <TooltipTrigger asChild>
                    <Button
                        asChild
                        size="sm"
                        variant="black"
                        className={'ml-auto h-7 opacity-0 transition group-hover:opacity-100'}
                    >
                        {user?.isPro ? (
                            <Link to="/app/enhance">Enhance resume with AI ✨</Link>
                        ) : (
                            <div className="cursor-default group-hover:opacity-30">Enhance resume with AI ✨</div>
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Subscribe to Pro to unlock this feature</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default EnhanceButton;
