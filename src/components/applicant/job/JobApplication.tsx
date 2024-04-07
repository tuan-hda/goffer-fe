import { Badge } from '@/components/ui/badge';
import { Avatar } from '@nextui-org/avatar';
import { Card, CardHeader } from '@nextui-org/card';
import { TbCheck } from 'react-icons/tb';

const JobApplication = () => {
    return (
        <Card shadow="none" className="my-4 bg-transparent">
            <CardHeader className="gap-4 bg-transparent px-4 py-2 shadow-none">
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
        </Card>
    );
};

export default JobApplication;
