import useUpdateProfile from '@/hooks/useUpdateProfile';
import ExperienceEditable from './ExperienceEditable';
import moment from 'moment';

const Experiences = () => {
    const { profile, updateProfile } = useUpdateProfile();

    const experiences = profile?.experiences || [];

    return (
        <div>
            {experiences.map((experience, index) => (
                <ExperienceEditable key={index} experiences={experiences} index={index} updateProfile={updateProfile}>
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
                </ExperienceEditable>
            ))}
            <ExperienceEditable updateProfile={updateProfile} isCreating experiences={experiences} />
        </div>
    );
};

export default Experiences;
