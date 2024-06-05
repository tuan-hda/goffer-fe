import CodingQuestion from './CodingQuestion';
import CodingTestCase from './CodingTestCase';
import Header from './Header';

const Coding = () => {
    return (
        <div className="relative grid grid-cols-12 flex-col gap-x-16 gap-y-6">
            <Header />
            <div className="col-span-12 pt-5">
                <CodingQuestion />
                <div className="h-20" />
                <CodingTestCase />
            </div>
        </div>
    );
};

export default Coding;
