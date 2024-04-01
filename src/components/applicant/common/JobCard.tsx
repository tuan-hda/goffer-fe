import { Card, CardBody, Button, Image, CardFooter, CardHeader, Chip } from '@nextui-org/react';
import { useState } from 'react';
import { TbHeart, TbHeartFilled } from 'react-icons/tb';
import { MdVerified, MdOutlinePayments } from 'react-icons/md';
import { GiDuration } from 'react-icons/gi';
import useJobStore from '@/stores/jobStore';
import { Badge } from '@/components/ui/badge';

const JobCard = () => {
    const [liked, setLiked] = useState(false);
    const toggleLike = () => setLiked(!liked);
    const tags = ['TypeScript', 'Material UI', 'Redux', 'React', 'Axios', 'RESTfull API'];
    const { updateJobDetailOpening, jobDetailOpening } = useJobStore();

    const openDetail = () => {
        updateJobDetailOpening(!jobDetailOpening);
    };

    return (
        <Card
            onPress={openDetail}
            isPressable
            isBlurred
            className="w-full max-w-screen-lg border-none bg-background/60 p-4 transition dark:bg-default-100/50"
            shadow="md"
        >
            <CardHeader className="gap-4">
                <Image alt="Album cover" className="object-cover" height={60} width={60} src="/logo.svg" />
                <div className="flex flex-1 flex-col items-start">
                    <p className="text-xl font-semibold text-default-700">React Front-End Development</p>
                    <p className="text-sm font-normal text-default-500">
                        <span>Goffer</span>
                        <span className="text-default-300"> • </span>
                        <span>18h ago</span>
                    </p>
                </div>
                <Button
                    className=" self-start"
                    color={liked ? 'primary' : undefined}
                    isIconOnly
                    variant="light"
                    radius="full"
                    onPress={toggleLike}
                >
                    {liked ? <TbHeartFilled size={28} /> : <TbHeart size={28} />}
                </Button>
            </CardHeader>
            <CardBody className="gap-4 font-light">
                <p>Ho Chi Minh City, Vietnam (Hybrid)</p>
                <div className="flex gap-x-8">
                    <Chip startContent={<MdVerified />} variant="light" className=" font-medium text-default-500">
                        Payment verified
                    </Chip>
                    <Chip
                        startContent={<MdOutlinePayments />}
                        variant="light"
                        className=" font-medium text-default-500"
                    >
                        $30 - $40/hr
                    </Chip>
                    <Chip startContent={<GiDuration />} variant="light" className=" font-medium text-default-500">
                        Ongoing
                    </Chip>
                </div>
            </CardBody>
            <CardFooter className="gap-2">
                {tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                        {tag}
                    </Badge>
                ))}
            </CardFooter>
        </Card>
    );
};

export default JobCard;
