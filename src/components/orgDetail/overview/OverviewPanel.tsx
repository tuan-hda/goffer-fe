import { User } from '@/types/user.type';
import FounderCard from './FounderCard';
import PostCard from './PostCard';

interface Props {
    data: User[];
}

const OverviewPanel = ({ data }: Props) => {
    return (
        <div className="w-1/3 px-6">
            <div className="mb-6 mt-12 flex w-full items-center justify-between">
                <p className="text-2xl font-semibold text-text">Posts</p>
                <p className="cursor-pointer text-sm font-semibold text-blue-400">View all</p>
            </div>
            {Array(3)
                .fill(0)
                .map((_, index) => (
                    <PostCard key={index} />
                ))}
            <p className="mb-6 mt-12 text-2xl font-semibold text-text">Founder</p>
            {data.map((user) => (
                <FounderCard data={user} key={user.id} role={'CEO'} />
            ))}
        </div>
    );
};

export default OverviewPanel;
