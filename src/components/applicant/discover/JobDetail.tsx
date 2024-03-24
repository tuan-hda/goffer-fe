import { Button, Card, CardBody, CardHeader, Chip, Divider } from '@nextui-org/react';
import classNames from 'classnames';
import useDiscoverStore from 'src/stores/discoverStore';
import { MdOutlineArrowRight } from 'react-icons/md';
import { TbBuilding, TbHeart, TbHeartFilled, TbMapPin } from 'react-icons/tb';
import { CgMoreAlt } from 'react-icons/cg';
import { GiDuration } from 'react-icons/gi';
import Process from '../common/Process';
import Editor from 'src/components/common/editor/Editor';
import useJobStore from 'src/stores/jobStore';

const JobDetail = () => {
    const tags = ['TypeScript', 'Material UI', 'Redux', 'React', 'Axios', 'RESTfull API'];
    const { sideBarPinned } = useDiscoverStore();
    const { jobDetailOpening, updateJobDetailOpening } = useJobStore();
    const liked = false;

    return (
        <Card
            isBlurred
            isFooterBlurred
            className={classNames(
                'bg-image fixed right-0 top-[68px] h-[calc(100vh-72px)] pb-2 transition dark:bg-default-100/50 md:max-w-[624px]',
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
            <CardHeader className="justify-between">
                <div>
                    <p className="text-xl font-semibold text-default-700">Senior Frontend Developer (React)</p>
                </div>
                <div className="flex flex-row gap-4">
                    <Button color="primary" variant="solid" radius="full">
                        Apply
                    </Button>
                    <Button
                        className=" text-default-foreground"
                        color={liked ? 'primary' : undefined}
                        isIconOnly
                        variant="flat"
                        radius="full"
                        onPress={() => {}}
                    >
                        {liked ? <TbHeartFilled size={28} /> : <TbHeart size={28} />}
                    </Button>
                    <Button
                        className=" text-default-foreground"
                        color={liked ? 'primary' : undefined}
                        isIconOnly
                        variant="light"
                        radius="full"
                        onPress={() => {}}
                    >
                        <CgMoreAlt size={28} />
                    </Button>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <div className="flex flex-col">
                    <Chip startContent={<TbMapPin />} variant="light" className=" text-sm font-medium text-default-500">
                        <span className=" font-semibold text-default-600">{'Goffer Building' + ', '}</span>
                        Ho Chi Minh City, Vietnam
                    </Chip>
                    <Chip
                        startContent={<GiDuration />}
                        variant="light"
                        className=" text-sm font-medium text-default-500"
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
                <p className="my-4 text-lg font-semibold text-default-700">Process</p>
                <Process />
                <p className="my-4 text-lg font-semibold text-default-700">Skills and Expertise</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <Chip size="sm" key={index} variant="flat">
                            {tag}
                        </Chip>
                    ))}
                </div>
                <p className="my-4 text-lg font-semibold text-default-700">About the job</p>
                <Editor />
            </CardBody>
        </Card>
    );
};

export default JobDetail;
