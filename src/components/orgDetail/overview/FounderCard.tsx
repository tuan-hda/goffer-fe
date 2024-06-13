import { User } from '@/types/user.type';
import { getExperienceYear } from '@/utils/profile';
import { Avatar } from '@nextui-org/react';

interface Props {
    data: User;
    role: string;
    onClick?: () => void;
}

const FounderCard = ({ data, role, onClick }: Props) => {
    return (
        <div onClick={onClick} className="mb-4 flex h-16 w-full flex-row items-center gap-2">
            <Avatar size="lg" className="" src={data.avatar} />

            <div className="flex h-full flex-col justify-around py-1">
                <p className="line-clamp-2 overflow-hidden text-ellipsis text-start font-semibold text-text">
                    {data.name}
                </p>
                <p className="text-start text-sm text-muted-foreground">
                    <span>{role}</span>
                    {data.experiences && data.experiences.length > 0 && (
                        <>
                            <span className="mx-2 text-lg">•</span>
                            <span>{getExperienceYear(data.experiences)}</span>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default FounderCard;
