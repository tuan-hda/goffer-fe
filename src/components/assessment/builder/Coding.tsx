import { Button } from '@/components/ui/button';
import CodingQuestion from './CodingQuestion';
import CodingTestCase from './CodingTestCase';

const Coding = () => {
    return (
        <div className="relative grid grid-cols-12 flex-col gap-x-16 gap-y-6">
            <div className="col-span-full flex items-center justify-between">
                <h1 className="text-2xl">Question Coding Builder</h1>
                <Button variant="black">Finish</Button>
            </div>
            <div className="col-span-12 pt-5">
                <CodingQuestion />
                <div className="h-20" />
                <CodingTestCase />
            </div>
        </div>
    );
};

export default Coding;
