import { User } from '@/types/user.type';
import { getExperienceYear } from '@/utils/profile';
import { Avatar } from '@nextui-org/react';

interface Props {
    data: User;
    role: string;
}

const FounderCard = ({ data, role }: Props) => {
    return (
        <div className="mb-4 flex h-16 w-full flex-row items-center gap-2">
            <Avatar size="lg" className="" src={data.avatar} />

            <div className="flex h-full flex-col justify-around py-1">
                <p className="line-clamp-2 overflow-hidden text-ellipsis text-start font-semibold text-text">
                    {data.name}
                </p>
                <p className="text-start text-sm text-muted-foreground">
                    <span>{role}</span>
                    <span className="mx-2 text-lg">•</span>
                    {data.experiences && <span>{getExperienceYear(data.experiences)}</span>}
                </p>
            </div>
        </div>
    );
};

export default FounderCard;
