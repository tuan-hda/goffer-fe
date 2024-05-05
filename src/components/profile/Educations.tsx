import useUpdateProfile from '@/hooks/useUpdateProfile';
import EducationEditable from './EducationEditable';
import moment from 'moment';

const ProfileEducation = () => {
    const { profile, updateProfile } = useUpdateProfile();

    const educations = profile?.education || [];

    return (
        <div>
            {educations.map((education, index) => (
                <EducationEditable key={index} educations={educations} index={index} updateProfile={updateProfile}>
                    <div>
                        <p className="font-medium text-black">
                            {education.degree && `${education.degree} at `} {education.school}
                        </p>
                        <div className="flex gap-2">
                            {education.major && (
                                <>
                                    <p>{education.major}</p>
                                    <span>•</span>
                                </>
                            )}
                            {(education.startDate || education.endDate) && (
                                <p className="text-sm">
                                    {education.startDate && moment(education.startDate).format('MM/YYYY')}
                                    {education.endDate && ' - ' + moment(education.endDate).format('MM/YYYY')}
                                </p>
                            )}
                        </div>
                        <p className="text-gray-500">{education.description}</p>
                    </div>
                </EducationEditable>
            ))}
            <EducationEditable updateProfile={updateProfile} isCreating educations={educations} />
        </div>
    );
};

export default ProfileEducation;
