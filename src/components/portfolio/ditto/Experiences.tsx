import useUpdateProfile from '@/hooks/useUpdateProfile';
import { Avatar } from '@nextui-org/react';
import moment from 'moment';

const Experiences = () => {
    const { profile } = useUpdateProfile();
    const experiences = profile?.experiences || [];

    if (experiences.length === 0) return null;

    return (
        <div id="experiences" className="mx-auto w-full max-w-[84vw]">
            <p className="mb-[10vh] text-center uppercase">EXPERIENCES</p>
            <div className="space-y-[7vh]">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="portfolio-border flex items-center gap-[4vh] rounded-[3vh] border p-[6vh]"
                    >
                        {experience.logo ? (
                            <Avatar src={experience.logo} className="h-[16vh] w-[16vh] flex-shrink-0" />
                        ) : (
                            <img src="/gradient.jpg" className="h-[16vh] w-[16vh] flex-shrink-0 rounded-full" />
                        )}
                        <div className="text-[4vh] font-medium leading-[100%]">
                            {experience.title} @ {experience.company} • {moment(experience.startDate).format('MM/YYYY')}
                            {' - '}
                            {experience.endDate ? moment(experience.endDate).format('MM/YYYY') : 'Now'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experiences;
