import Experiences from './Experiences';
import ImagesShowcase from './ImagesShowcase';
import ProjectList from './ProjectList';
import Recommendations from './Recommendations';
import About from './About';
import GetInTouch from '../GetInTouch';
import { Fade, Reveal } from '@/components/common';
import { PortfolioConfiguration } from '@/types/portfolio.type';
import { User } from '@/types/user.type';
import useListProject from '@/hooks/useListProject';

type OnceInAMoonProps = {
    portfolio: PortfolioConfiguration;
    user: User;
};

const OnceInAMoon = ({ portfolio, user }: OnceInAMoonProps) => {
    const words = Array(30)
        .fill(0)
        .map((_) => portfolio.brandName?.toUpperCase());

    const { data: projects } = useListProject({
        owner: user.id,
    });

    return (
        <>
            <Fade>
                <p className="mb-[2vh] mt-[calc(48vh-200px)] text-center uppercase">{user.oneLiner}</p>
            </Fade>
            <div className="infinite-words-slide relative h-[200px] w-full overflow-hidden">
                <div className="words-loop relative z-[1] mt-20 flex items-center gap-24 font-serif text-[20vh] font-black">
                    {words.map((word, index) => (
                        <span key={index}>{word}</span>
                    ))}
                </div>
                <div className="portfolio-special absolute top-1/2 h-4 w-full -translate-y-1/2"></div>
            </div>

            {/* Showcase images part */}
            <ImagesShowcase portfolio={portfolio} />

            <GetInTouch className="mx-auto mt-[24vh] w-fit" />

            <div className="h-[calc(55vh-200px)]"></div>
            {/* Projects */}
            <Reveal threshold={0.3}>
                <ProjectList projects={projects?.results || []} />
            </Reveal>

            <div className="h-[calc(55vh-200px)]"></div>
            <Reveal threshold={0.49}>
                <Experiences experiences={user.experiences || []} />
            </Reveal>

            <div className="h-[calc(55vh-200px)]"></div>
            <Reveal threshold={0.6}>
                <Recommendations />
            </Reveal>

            <div className="h-[calc(55vh-200px)]"></div>
            <Reveal threshold={0.7}>
                <About portfolio={portfolio} user={user} />
            </Reveal>
        </>
    );
};

export default OnceInAMoon;
