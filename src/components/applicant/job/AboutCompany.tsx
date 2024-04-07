import { Chip } from '@nextui-org/chip';
import { GiDuration } from 'react-icons/gi';
import { TbBuilding, TbMapPin } from 'react-icons/tb';

const AboutCompany = () => {
    return (
        <>
            <p className="mb-2 mt-10 font-serif text-lg font-semibold text-default-700">About company</p>

            <div className="flex flex-col">
                <Chip startContent={<TbMapPin />} variant="light" className=" text-sm font-medium text-default-500">
                    <span className="font-semibold text-default-600">{'Goffer Building' + ', '}</span>
                    Ho Chi Minh City, Vietnam
                </Chip>
                <Chip startContent={<GiDuration />} variant="light" className="text-sm font-medium text-default-500">
                    Posted 3 weeks ago
                </Chip>
                <Chip startContent={<TbBuilding />} variant="light" className="text-sm font-medium text-default-500">
                    1-10 employees
                </Chip>
            </div>
            <p className="mt-2 text-sm font-medium text-text">
                Teller builds APIs that enable developers to safely and reliably connect their apps with their users'
                financial accounts. We have a reputation for quality product and engineering excellence, and despite
                being relatively early stage we have some of the best fintechs in the world like Ramp, Brex, Pipe, and
                Capchase depending on our product. Teller is backed by leading Silicon Valley investors such as Founders
                Fund, SciFi, Craft, and Lightspeed Venture Partners.
            </p>
        </>
    );
};

export default AboutCompany;
