import { Reveal } from '@/components/common';
import Opening from './Opening';

const Ditto = () => {
    return (
        <>
            <Reveal threshold={0}>
                <Opening />
            </Reveal>
            <div className="h-[1000px]"></div>
        </>
    );
};

export default Ditto;
