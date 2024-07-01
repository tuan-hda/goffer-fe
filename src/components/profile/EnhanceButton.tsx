import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { User } from '@/types/user.type';

type EnhanceButtonProps = {
    user: User;
};

const EnhanceButton = ({ user }: EnhanceButtonProps) => {
    if (!user || !user.resume) return null;

    return (
        <Button
            asChild
            size="sm"
            variant="black"
            className={'ml-auto h-7 opacity-0 transition group-hover:opacity-100'}
        >
            {user?.isPro ? (
                <Link to="/app/enhance">Enhance resume with AI ✨</Link>
            ) : (
                <div>Enhance resume with AI ✨</div>
            )}
        </Button>
    );
};

export default EnhanceButton;
