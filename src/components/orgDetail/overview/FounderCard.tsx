import { Avatar } from '@nextui-org/react';

interface Props {
    data: {
        avt: string;
        name: string;
        role: string;
        time: string;
    };
}

const FounderCard = ({ data }: Props) => {
    const { avt, name, role, time } = data;

    return (
        <div className="mb-4 flex h-16 w-full flex-row items-center gap-2">
            <Avatar size="lg" className="" src={avt} />

            <div className="flex h-full flex-col justify-around py-1">
                <p className="line-clamp-2 overflow-hidden text-ellipsis text-start font-semibold text-text">{name}</p>
                <p className="text-start text-sm text-muted-foreground">
                    <span>{role}</span>
                    <span className="mx-2 text-lg">•</span>
                    <span>{time}</span>
                </p>
            </div>
        </div>
    );
};

export default FounderCard;
