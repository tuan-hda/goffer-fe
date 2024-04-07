import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Avatar,
    Breadcrumbs,
    BreadcrumbItem,
} from '@nextui-org/react';
import useJobStore from '@/stores/jobStore';
import { Badge } from '@/components/ui/badge';
import { TbCheck } from 'react-icons/tb';

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

const JobAppliedCard = () => {
    const { updateJobDetailOpening, jobDetailOpening } = useJobStore();
    const currentStep = 'applied';

    const openDetail = () => {
        updateJobDetailOpening(!jobDetailOpening);
    };
    return (
        <Card
            onPress={openDetail}
            isPressable
            isBlurred
            isFooterBlurred
            className="max-h-96 w-full border-none bg-background/60 transition dark:bg-default-100/50"
            shadow="md"
        >
            <CardHeader className="gap-4 px-4 py-2">
                <Avatar alt="Album cover" radius="sm" size="md" src="/lovers.png" />
                <div className="flex flex-1 flex-col items-start">
                    <p className="font-serif text-lg font-semibold text-default-700">Goffer</p>
                    <p className="text-sm font-normal text-default-500">Posted 18h ago</p>
                </div>
                <Badge className="gap-1 bg-[hsl(var(--nextui-success))] font-bold text-white">
                    <TbCheck size={16} />
                    Applied 2 days ago
                </Badge>
            </CardHeader>
            <Divider />
            <CardBody className="gap-4 p-4 font-light">
                <div>
                    <p className="font-serif text-xl font-semibold text-text">React Front-End Development</p>
                    <p className="text-[12px] font-semibold text-default-500">Ho Chi Minh City, Vietnam</p>
                </div>
                <div className="flex flex-row flex-wrap gap-2">
                    {benefits.map((benefit, index) => (
                        <Badge className="border-beige" variant="outline" key={index}>
                            {benefit}
                        </Badge>
                    ))}
                </div>
            </CardBody>
            <Divider />
            <CardFooter className="flex-wrap gap-2 p-4">
                <Breadcrumbs classNames={{ list: 'bg-beige/60' }} radius={'full'} variant="solid">
                    {process.map((step) => (
                        <BreadcrumbItem
                            classNames={{ item: 'data-[current=true]:text-primary data-[current=true]:font-semibold' }}
                            isCurrent={step === currentStep}
                            key={step}
                        >
                            {step}
                        </BreadcrumbItem>
                    ))}
                </Breadcrumbs>
            </CardFooter>
        </Card>
    );
};

export default JobAppliedCard;
