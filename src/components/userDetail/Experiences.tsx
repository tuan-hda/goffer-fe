import moment from 'moment';
import { Avatar } from '@nextui-org/react';
import { User } from '@/types/user.type';

interface Props {
    data: User;
}

const Experiences = ({ data }: Props) => {
    const experiences = data.experiences || [];

    return (
        <div className="mt-8">
            {experiences.map((experience, index) => (
                <div key={index} className="flex items-center gap-4">
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
            ))}
        </div>
    );
};

export default Experiences;
