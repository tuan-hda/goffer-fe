import { Card, CardBody, Button, CardFooter, CardHeader, Chip, Divider, Avatar } from '@nextui-org/react';
import { useState } from 'react';
import { TbBriefcase, TbCheck, TbHeart, TbHeartFilled } from 'react-icons/tb';
import { MdOutlinePayments } from 'react-icons/md';
import { GiDuration } from 'react-icons/gi';
import useJobStore from '@/stores/jobStore';
import { Badge } from '@/components/ui/badge';
import { IndividualJob } from '@/types/job.type';

interface Props {
    data: IndividualJob;
}

const JobCard = ({ data }: Props) => {
    const { org } = data;

    const [liked, setLiked] = useState(false);
    const toggleLike = () => setLiked(!liked);
    const { updateJobDetailOpening, jobDetailOpening, setDetail } = useJobStore();

    const openDetail = () => {
        setDetail(data);
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
                <Avatar alt="Album cover" radius="md" size="lg" src={org.logo} />
                <div className="flex flex-1 flex-col items-start">
                    <p className="text-xl font-semibold text-default-700">{org.name}</p>
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
                    <p className="text-xl font-semibold text-default-700">{data.title}</p>
                    <p>{data.location}</p>
                </div>
                <div className="flex gap-x-8">
                    <Chip startContent={<TbBriefcase />} variant="light" className=" font-medium text-default-500">
                        {data.time}
                    </Chip>
                    <Chip
                        startContent={<MdOutlinePayments />}
                        variant="light"
                        className=" font-medium text-default-500"
                    >
                        `$${data.salaryFrom} - $${data.salaryTo}`
                    </Chip>
                    <Chip startContent={<GiDuration />} variant="light" className=" font-medium text-default-500">
                        Ongoing
                    </Chip>
                </div>
            </CardBody>
            <CardFooter className="flex-wrap gap-2 p-4">
                {data.skills?.map((skill, index) => (
                    <Badge key={index} variant="outline">
                        {skill}
                    </Badge>
                ))}
            </CardFooter>
        </Card>
    );
};

export default JobCard;
