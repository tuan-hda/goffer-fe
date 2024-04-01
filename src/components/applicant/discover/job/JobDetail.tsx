import { BreadcrumbItem, Breadcrumbs, Button, Card, CardBody, CardFooter, Chip } from '@nextui-org/react';
import classNames from 'classnames';
import useDiscoverStore from '@/stores/discoverStore';
import { MdOutlineArrowRight } from 'react-icons/md';
import { TbBuilding, TbHeart, TbHeartFilled, TbMapPin } from 'react-icons/tb';
import { CgMoreAlt } from 'react-icons/cg';
import { GiDuration } from 'react-icons/gi';
import useJobStore from '@/stores/jobStore';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const benefits = [
    'Competitive pay',
    'Learning Stipend',
    'Desk setup',
    'Unlimited PTO',
    'Paid Parental Leave',
    '401K match',
    'Gym Stipend',
    'MacBook Pro + Accessories',
];
const process = ['sourced', 'applied', 'manager screen', 'on-site', 'hired'];

export const JobContent = () => {
    return (
        <>
            {/* Title */}
            <p className="font-serif text-lg font-medium text-default-500 underline">Goffer</p>
            <p className="font-serif text-4xl font-black text-text">Senior Frontend Developer (React)</p>
            <p>
                <span className="font-serif text-sm font-medium text-default-500">Tu Phan</span>
                <span className="mx-2 font-serif text-sm font-medium text-default-500">•</span>
                <span className="font-serif text-sm font-medium text-default-500">Full time</span>
            </p>

            {/* Benefits */}
            <p className="mb-2 mt-10 font-serif text-lg font-semibold text-default-700">Benefits</p>
            <div className="flex flex-row flex-wrap gap-2">
                {benefits.map((benefit, index) => (
                    <Badge className="border-beige" variant="outline" key={index}>
                        {benefit}
                    </Badge>
                ))}
            </div>

            {/* About company */}
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

            {/* About the job */}
            <p className="mb-2 mt-10 font-serif text-lg  font-semibold text-default-700">About the job</p>
            <p className="text-sm font-medium text-text">
                You will be the first or one of the first sales professionals at Teller, meaning that there is little to
                no process, playbook, or motion already defined for you. It's your job to create it. If you are someone
                that's used to selling from behind a well-known logo and being a cog in a well oiled go-to-market
                machine do not apply for this job, you will not be successful here (although feel free to come back in
                12-18 months). However, if you want to roll your sleeves up, work your backside off, work directly with
                the CEO, and be promoted and progressed as far as your antitude and ability allows then this might be
                the place for
            </p>
        </>
    );
};

const JobDetail = () => {
    const navigate = useNavigate();
    const { sideBarPinned } = useDiscoverStore();
    const { jobDetailOpening, updateJobDetailOpening } = useJobStore();
    const liked = false;

    const onApply = () => {
        navigate('/job/029');
    };

    return (
        <Card
            isFooterBlurred
            className={classNames(
                'fixed right-0 top-[68px] h-[calc(100vh-72px)] border-none bg-background/60 pt-2 transition dark:bg-default-100/50 md:max-w-[624px]',
                jobDetailOpening ? 'translate-x-0' : 'translate-x-[calc(50vw-40px)]  shadow-none',
                sideBarPinned
                    ? 'left-[calc(50vw+136px)] w-[calc(50vw-160px)] xl:left-[calc(50vw+136px)]'
                    : 'left-[calc(50vw+32px)] w-[calc(50vw-56px)] xl:left-[calc(50vw+32px)]',
            )}
        >
            <Button
                variant="flat"
                color="default"
                className="fixed -left-36 top-1/2 z-50 -mt-28 h-56 w-56 pl-28 text-default-foreground/20 opacity-0 hover:opacity-10"
                isIconOnly
                radius="full"
                onPress={() => updateJobDetailOpening(false)}
            >
                <MdOutlineArrowRight size={80} />
            </Button>
            <CardBody className="pb-24">
                <JobContent />
            </CardBody>
            <CardFooter className="absolute bottom-0 z-10 flex-col items-start overflow-hidden border-t-1 border-zinc-100/50 py-2 shadow-small before:bg-background/10">
                <div className="mb-2 flex w-full flex-row  items-center justify-between">
                    <p className="w-3/5 truncate font-serif text-xl font-black text-text">
                        Senior Frontend Developer (React) Senior Frontend Developer (React) Senior Frontend Developer
                        (React)
                    </p>
                    <div className="flex flex-row items-center gap-4">
                        <Button color="primary" size="sm" variant="solid" radius="full" onPress={onApply}>
                            Apply
                        </Button>
                        <Button
                            className=" text-default-foreground"
                            color={liked ? 'primary' : undefined}
                            isIconOnly
                            variant="flat"
                            size="sm"
                            radius="full"
                            onPress={() => {}}
                        >
                            {liked ? <TbHeartFilled size={28} /> : <TbHeart size={20} />}
                        </Button>
                        <Button
                            className=" text-default-foreground"
                            color={liked ? 'primary' : undefined}
                            isIconOnly
                            size="sm"
                            variant="light"
                            radius="full"
                            onPress={() => {}}
                        >
                            <CgMoreAlt size={24} />
                        </Button>
                    </div>
                </div>

                <Breadcrumbs
                    size="sm"
                    variant="light"
                    radius="full"
                    classNames={{
                        list: 'gap-y-2',
                    }}
                >
                    {process.map((item, index) => (
                        <BreadcrumbItem key={index} isCurrent={true} className="capitalize">
                            {item}
                        </BreadcrumbItem>
                    ))}
                </Breadcrumbs>
            </CardFooter>
        </Card>
    );
};

export default JobDetail;
