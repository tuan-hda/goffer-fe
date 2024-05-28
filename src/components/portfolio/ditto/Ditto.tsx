import { Reveal } from '@/components/common';
import Opening from './Opening';
import ProjectList from './ProjectList';
import Experiences from './Experiences';
import Recommendations from './Recommendation';
import About from './About';

const Ditto = () => {
    return (
        <>
            <Reveal threshold={0}>
                <Opening />
            </Reveal>
            <ProjectList />
            <div className="h-[28vh]"></div>
            <Reveal>
                <Experiences />
            </Reveal>
            <div className="h-[28vh]"></div>
            <Reveal>
                <Recommendations />
            </Reveal>
            <div className="h-[32vh]"></div>
            <Reveal>
                <About />
            </Reveal>
        </>
    );
};

export default Ditto;
