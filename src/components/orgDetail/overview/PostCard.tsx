import { Card } from '@nextui-org/react';
import moment from 'moment';

type Post = {
    image: string;
    title: string;
    time: number;
};
interface Props {
    data: Post;
}

const PostCard = ({ data }: Props) => {
    return (
        <Card radius="lg" isPressable className="mb-4 flex h-20 w-full flex-row justify-between gap-2 shadow-none">
            <img src={data.image} alt="logo" className="aspect-[4/3] h-20 rounded-[14px]" />
            <div className="flex h-full flex-col justify-around">
                <p className="line-clamp-2 overflow-hidden text-ellipsis text-start font-semibold text-text">
                    {data.title}
                </p>
                <p className="text-start text-sm text-muted-foreground">
                    <span>{moment(data.time).format('ll')}</span>
                </p>
            </div>
        </Card>
    );
};

export default PostCard;
