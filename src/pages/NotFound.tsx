import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import useSelfProfileQuery from 'src/hooks/useSelfProfileQuery';

const NotFound = () => {
    const { data: user } = useSelfProfileQuery();

    return (
        <div className="flex h-screen w-screen flex-col">
            <div className="m-auto flex flex-col items-center">
                <p className="text-2xl font-black">Oops!</p>
                <p className="mt-2 font-bold">There is no fish</p>
                <img src="/not_found.png" alt="not-found" className="h-[280px] w-[280px] rounded-lg" />

                <Button color="primary" className="mt-6" variant="shadow" as={Link} to={user ? '/app/individual' : '/'}>
                    Go Home
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
