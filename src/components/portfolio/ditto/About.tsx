import { User } from '@/types/user.type';
import { Image } from '@nextui-org/react';

type AboutProps = {
    user: User;
};

const About = ({ user }: AboutProps) => {
    return (
        <div
            className="relative mx-auto w-[84vw] rounded-[4vh] px-[16vh] py-[12vh]"
            style={{
                color: 'var(--p-bg-color)',
            }}
        >
            <div
                className="absolute left-0 top-0 h-full w-full rounded-[4vh] opacity-90"
                style={{ backgroundColor: 'var(--text-color)' }}
            ></div>
            <div className="relative z-[1] flex flex-col items-center gap-[6vh]">
                <div className="flex items-center gap-[3vh]">
                    <Image src={user.avatar} className="aspect-square h-[10vh] rounded-full" />
                    <div className="text-[3vh] font-medium">
                        <p>{user.name?.toUpperCase()}</p>
                        <p className="mt-[1vh] text-[2vh] font-medium">{user.location?.toUpperCase()}</p>
                    </div>
                </div>
                <p className="mt-[3vh] text-[4vh] leading-[150%]">{user.bio}</p>
            </div>
        </div>
    );
};

export default About;
