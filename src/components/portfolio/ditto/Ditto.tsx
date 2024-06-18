import { Reveal } from '@/components/common';
import Opening from './Opening';
import ProjectList from './ProjectList';
import Experiences from './Experiences';
import Recommendations from './Recommendation';
import About from './About';
import useListProject from '@/hooks/useListProject';
import { PortfolioConfiguration } from '@/types/portfolio.type';
import { User } from '@/types/user.type';

type Props = {
    portfolio: PortfolioConfiguration;
    user: User;
};

const Ditto = ({ portfolio, user }: Props) => {
    const { data: projects } = useListProject({
        owner: user?.id,
    });

    if (!portfolio || !user) return null;

    return (
        <>
            <Reveal threshold={0}>
                <Opening portfolio={portfolio} user={user} />
            </Reveal>
            <ProjectList projects={projects?.results || []} />
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
                <About user={user} />
            </Reveal>
        </>
    );
};

export default Ditto;
