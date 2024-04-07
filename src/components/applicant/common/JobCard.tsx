import { Card, CardBody, Button, Image, CardFooter, CardHeader, Chip, Divider, Avatar } from '@nextui-org/react';
import { useState } from 'react';
import { TbBriefcase, TbCheck, TbHeart, TbHeartFilled } from 'react-icons/tb';
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
            className="w-full border-none bg-background/60 transition dark:bg-default-100/50"
            shadow="md"
        >
            <CardHeader className="gap-4 p-4">
                <Avatar alt="Album cover" radius="md" size="lg" src="/lovers.png" />
                <div className="flex flex-1 flex-col items-start">
                    <p className="text-xl font-semibold text-default-700">Goffer</p>
                    <p className="text-sm font-normal text-default-500">Posted 18h ago</p>
                </div>
                <Button
                    color={liked ? 'primary' : undefined}
                    isIconOnly
                    variant="light"
                    radius="full"
                    onPress={toggleLike}
                >
                    {liked ? <TbHeartFilled size={28} /> : <TbHeart size={28} />}
                </Button>
            </CardHeader>
            <Divider />
            <CardBody className="gap-4 p-4 font-light">
                <div>
                    <p className="text-xl font-semibold text-default-700">React Front-End Development</p>
                    <p>Ho Chi Minh City, Vietnam</p>
                </div>
                <div className="flex gap-x-8">
                    <Chip startContent={<TbBriefcase />} variant="light" className=" font-medium text-default-500">
                        Hybrid
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
            <CardFooter className="flex-wrap gap-2 p-4">
                {tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                        {tag}
                    </Badge>
                ))}
                <Badge className="gap-1 bg-[hsl(var(--nextui-success))] font-bold text-white">
                    <TbCheck size={16} />
                    Applied 2 days ago
                </Badge>
            </CardFooter>
        </Card>
    );
};

export default JobCard;
