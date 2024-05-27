import GetInTouch from './GetInTouch';

type HeaderProps = {
    logo?: React.ReactNode;
    hideProjects?: boolean;
    hideExperiences?: boolean;
    hideRecommendations?: boolean;
};

const Header = ({ logo, hideProjects, hideExperiences, hideRecommendations }: HeaderProps) => {
    return (
        <div className="sticky top-10 z-[11] mx-auto mt-10 flex w-[90vw] items-center gap-10 self-start">
            <p className="font-serif text-5xl font-semibold">{logo}</p>
            <div className="flex-1"></div>
            {!hideProjects && (
                <a href="#projects" className="uppercase">
                    Projects
                </a>
            )}
            {!hideExperiences && (
                <a href="#experiences" className="uppercase">
                    Experiences
                </a>
            )}
            {!hideRecommendations && (
                <a href="#recommendations" className="uppercase">
                    Recommendations
                </a>
            )}
            <GetInTouch />
        </div>
    );
};

export default Header;
