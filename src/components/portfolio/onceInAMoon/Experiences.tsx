import useUpdateProfile from '@/hooks/useUpdateProfile';
import { Avatar } from '@nextui-org/react';
import moment from 'moment';
import { Fragment } from 'react';

const Experiences = () => {
    const { profile } = useUpdateProfile();
    const experiences = profile?.experiences || [];

    return (
        <div className="mx-auto w-full max-w-[64vw]">
            <p className="mb-[10vh] mt-[calc(55vh-200px)] text-center uppercase">EXPERIENCES</p>
            <div className="space-y-[7vh]">
                {experiences.map((experience, index) => (
                    <Fragment key={index}>
                        <div className="flex flex-col items-center gap-6">
                            {experience.logo ? (
                                <Avatar src={experience.logo} className="h-[16vh] w-[16vh] flex-shrink-0" />
                            ) : (
                                <img src="/gradient.jpg" className="h-[16vh] w-[16vh] flex-shrink-0 rounded-full" />
                            )}
                            <div className="min-w-0 text-center">
                                <p className="text-[5vh] font-medium leading-[calc(6vh)] text-black">
                                    {experience.title} @ {experience.company}
                                </p>
                                <div className="flex justify-center gap-2">
                                    <p className="mt-1 text-[2vh]">
                                        {moment(experience.startDate).format('MM/YYYY')} {' - '}
                                        {experience.endDate ? moment(experience.endDate).format('MM/YYYY') : 'Now'}
                                    </p>
                                </div>
                                <p className="mt-5 text-[2.5vh] font-light text-gray-600">{experience.description}</p>
                            </div>
                        </div>
                        {index < experiences.length - 1 && <div className="border-t"></div>}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default Experiences;
