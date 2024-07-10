import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const Success = () => {
    return (
        <div className="m-auto flex flex-col items-center">
            <img src="/success1.png" className="h-20 w-20" alt="success" />
            <div className="mt-4 text-center font-serif text-3xl font-semibold">You just subscribed! 🎉</div>
            <Button asChild variant="outline" className="mt-7 rounded-xl">
                <Link to={`/app`}>Go home</Link>
            </Button>
        </div>
    );
};

export default Success;
