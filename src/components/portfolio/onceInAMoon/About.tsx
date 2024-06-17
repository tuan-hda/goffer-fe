import { PortfolioConfiguration } from '@/types/portfolio.type';
import { User } from '@/types/user.type';
import { Image } from '@nextui-org/react';

type AboutProps = {
    user: User;
    portfolio: PortfolioConfiguration;
};

const About = ({ user, portfolio }: AboutProps) => {
    return (
        <div className="mx-auto flex w-full items-center gap-[10vh] px-[10vh]">
            <Image src={user.avatar} className="aspect-square h-[52vh] rounded-none" />
            <div className="min-w-0 flex-1">
                <p className="text-left text-[6.5vh] leading-[150%]">Meet {portfolio.brandName}</p>
                <p className="mt-[4vh] text-[2vh]">
                    {user.skills?.map((skill) => (
                        <span key={skill} className="mr-[1vh]">
                            {skill.toUpperCase()};
                        </span>
                    ))}
                </p>
                <p className="mt-[3vh] text-[3vh] leading-[150%]">{user.bio}</p>
                <p className="mt-[3vh] text-[2vh] font-medium">{user.location?.toUpperCase()}</p>
            </div>
        </div>
    );
};

export default About;
