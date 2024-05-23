import useUpdateProfile from '@/hooks/useUpdateProfile';
import ExperienceEditable from './ExperienceEditable';
import moment from 'moment';
import { Avatar } from '@nextui-org/react';

const Experiences = () => {
    const { profile, updateProfile } = useUpdateProfile();

    const experiences = profile?.experiences || [];

    return (
        <div>
            {experiences.map((experience, index) => (
                <ExperienceEditable key={index} experiences={experiences} index={index} updateProfile={updateProfile}>
                    <div className="flex items-center gap-4">
                        {experience.logo ? (
                            <Avatar src={experience.logo} className="h-14 w-14" />
                        ) : (
                            <img src="/gradient.jpg" className="h-14 w-14 rounded-full" />
                        )}
                        <div>
                            <p className="font-medium text-black">
                                {experience.title} @ {experience.company}
                            </p>
                            <div className="flex gap-2">
                                <p className="text-sm">
                                    {experience.startDate && moment(experience.startDate).format('MM/YYYY')} {' - '}
                                    {experience.endDate ? moment(experience.endDate).format('MM/YYYY') : 'Now'}
                                </p>
                            </div>
                            <p className="text-gray-500">{experience.description}</p>
                        </div>
                    </div>
                </ExperienceEditable>
            ))}
            <ExperienceEditable updateProfile={updateProfile} isCreating experiences={experiences} />
        </div>
    );
};

export default Experiences;
