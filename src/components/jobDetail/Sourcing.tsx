import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Candidate from './Candidate';

const Sourcing = () => {
    return (
        <div className="w-full items-start gap-6 text-sm">
            <div className="mb-3 flex w-full items-center">
                <h2 className="text-xl font-semibold">3000 potential</h2>
                <Input className="ml-auto max-w-[300px]" placeholder="Filter candidates..." />
            </div>
            <Candidate />
        </div>
    );
};

export default Sourcing;
