import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="m-auto flex flex-col items-center">
                <p className="font-black text-2xl">Oops!</p>
                <p className="font-bold mt-2">There is no fish</p>
                <img src="/not_found.png" alt="not-found" className="rounded-lg w-[280px] h-[280px]" />

                <Button color="primary" className="mt-6" variant="shadow" as={Link} to={'/'}>
                    Go Home
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
