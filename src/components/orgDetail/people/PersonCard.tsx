import { Card, CardContent } from '@/components/ui/card';
import { User } from '@/types/user.type';
import { getLatestExperience } from '@/utils/profile';
import { Avatar } from '@nextui-org/react';
import { Badge } from '@/components/ui/badge';
import { TbStarFilled } from 'react-icons/tb';

interface Props {
    data: User;
}

const PersonCard = ({ data }: Props) => {
    const latestExp = getLatestExperience(data.experiences ?? []);

    return (
        <Card className="rounded-3xl shadow-none">
            <CardContent className="-mx-[20px] pb-0 pt-1">
                <div className="flex flex-col items-center rounded-[22px] pb-6 pt-4">
                    <div className="mb-4 flex max-w-full items-center gap-1 px-4 text-[13px] text-gray-600">
                        <TbStarFilled className="text-[#FDB022]" /> {+(Math.random() * 10).toFixed(1)} (
                        {Math.floor(Math.random() * 100)}){data.location && ' | '}
                        <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-gray-500">
                            {data.location}
                        </span>
                    </div>
                    <div className="rounded-full bg-white p-1">
                        <Avatar className="h-16 w-16" src={data.avatar} />
                    </div>
                    {data.oneLiner && (
                        <p className="mt-6 w-2/3 text-center font-serif text-xl font-semibold">"{data.oneLiner}"</p>
                    )}
                    <p className="mt-4 text-lg font-medium">{data.name}</p>
                    {latestExp && (
                        <p className="mt-1 text-gray-500">
                            {latestExp.title} @ {latestExp.company}
                        </p>
                    )}
                    <div className="mt-4 flex h-[66px] w-full flex-wrap justify-center gap-[6px] overflow-hidden px-4 font-mono">
                        {(data.skills ?? []).map((skill, index) => (
                            <Badge key={index} className="h-[30px] rounded-full py-[6px] font-normal" variant="outline">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PersonCard;
