import useJobStore from '@/stores/jobStore';
import { Chip } from '@nextui-org/chip';
import { GiDuration } from 'react-icons/gi';
import { TbBuilding, TbMapPin } from 'react-icons/tb';

const AboutCompany = () => {
    const { detail } = useJobStore();
    const org = detail?.org;

    return (
        org && (
            <>
                <p className="mb-2 mt-10 font-serif text-lg font-semibold text-default-700">About company</p>

                <div className="flex flex-col">
                    <Chip startContent={<TbMapPin />} variant="light" className=" text-sm font-medium text-default-500">
                        <span className="font-semibold text-default-600">{org.name + ' Building' + ', '}</span>
                        Ho Chi Minh City, Vietnam
                    </Chip>
                    <Chip
                        startContent={<GiDuration />}
                        variant="light"
                        className="text-sm font-medium text-default-500"
                    >
                        Posted 3 weeks ago
                    </Chip>
                    <Chip
                        startContent={<TbBuilding />}
                        variant="light"
                        className="text-sm font-medium text-default-500"
                    >
                        1-10 employees
                    </Chip>
                </div>
                <p className="mt-2 text-sm font-medium text-text">{org.description}</p>
            </>
        )
    );
};

export default AboutCompany;
