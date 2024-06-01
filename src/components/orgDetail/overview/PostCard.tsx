import { Card } from '@nextui-org/react';

const PostCard = () => {
    return (
        <Card radius="lg" isPressable className="mb-4 flex h-20 w-full flex-row justify-between gap-2 shadow-none">
            <img
                src="https://s3.amazonaws.com/www-inside-design/uploads/2019/02/Design-maturity-report-with-cute-dog-1024x1024.png"
                alt="logo"
                className="aspect-[4/3] h-20 rounded-[14px]"
            />
            <div className="flex h-full flex-col justify-around">
                <p className="line-clamp-2 overflow-hidden text-ellipsis text-start font-semibold text-text">
                    Design maturity: Yesterday vs. today
                </p>
                <p className="text-start text-sm text-muted-foreground">
                    <span>Sep 1, 2021</span>
                </p>
            </div>
        </Card>
    );
};

export default PostCard;
