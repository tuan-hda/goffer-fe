import { Avatar } from '@nextui-org/react';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { Badge } from '../ui/badge';

type CommentProps = {
    setReplying: (value: boolean) => void;
};

const Comment = ({ setReplying }: CommentProps) => {
    return (
        <div className="flex gap-3">
            <Avatar
                size="sm"
                src="https://res.cloudinary.com/doxsstgkc/image/upload/v1714493760/goffer/rklmzhk6m6abekce57ha.jpg"
                radius="md"
            />
            <div className="min-w-0 flex-1">
                <p className="font-semibold">Tuan Anh</p>
                <p className="text-xs text-text/70">3 hours ago</p>
                <p className="mt-2 text-sm">
                    Hey I need this guy in my team ASAP. <span className="underline">@wdym</span> What do you say? Do a
                    review ASAP.
                </p>
                <div className="mt-2 flex items-center">
                    <MdOutlineEmojiEmotions className="cursor-pointer text-lg text-[#969696]" />
                    <Badge className="ml-3 border border-[#E9E9E9] bg-[#F7F7F7] px-1 py-0 text-[13px] font-normal text-text shadow-none">
                        👍 <span className="ml-1">4</span>
                    </Badge>
                    <Badge className="ml-1 border border-[#E9E9E9] bg-[#F7F7F7] px-1 py-0 text-[13px] font-normal text-text shadow-none">
                        😈 <span className="ml-1">4</span>
                    </Badge>
                    <div className="mx-3 h-3 border-l" />
                    <button className="text-xs font-medium" onClick={() => setReplying(true)}>
                        Reply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comment;
