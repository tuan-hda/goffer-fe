import FounderCard from './FounderCard';
import PostCard from './PostCard';

const founders = [
    {
        avt: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        name: 'Alex Yurkowski',
        role: 'CTO',
        time: '6 years',
    },
    {
        avt: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
        name: 'Zeb Evans',
        role: 'CEO',
        time: '6 years',
    },
];

const OverviewPanel = () => {
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
            {founders.map((item, index) => (
                <FounderCard data={item} key={index} />
            ))}
        </div>
    );
};

export default OverviewPanel;
