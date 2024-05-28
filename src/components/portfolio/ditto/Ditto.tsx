import { Reveal } from '@/components/common';
import Opening from './Opening';
import ProjectList from './ProjectList';

const Ditto = () => {
    return (
        <>
            <Reveal threshold={0}>
                <Opening />
            </Reveal>
            <div className="h-[1000px]">
                <ProjectList />
            </div>
        </>
    );
};

export default Ditto;
