import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const Success = () => {
    const name = new URLSearchParams(location.search).get('name');

    return (
        <div className="flex flex-col items-center">
            <img src="/success1.png" className="h-20 w-20" alt="success" />
            <div className="mt-4 text-center font-serif text-3xl font-semibold">{name} was created successfully 🎉</div>
            <Button asChild variant="outline" className="mt-7 rounded-xl">
                <Link to="/app/organization">Go to organization</Link>
            </Button>
        </div>
    );
};

export default Success;
