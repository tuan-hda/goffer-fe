import useUserInfo from '@/hooks/useUserInfo';
import FounderCard from './FounderCard';
import PostCard from './PostCard';
import { Organization } from '@/types/organization.type';

interface Props {
    data: Organization;
}

const postData = [
    {
        image: 'https://s3.amazonaws.com/www-inside-design/uploads/2019/02/Design-maturity-report-with-cute-dog-1024x1024.png',
        title: 'Design maturity: Yesterday vs. today',
        time: 1630524800000,
    },
    {
        image: 'https://a.storyblok.com/f/167095/1204x678/64c1f0dffc/what-is-design-maturity-and-how-it-affects-your-business.jpg',
        title: 'What is design maturity and how it affects your business | Honest Fox',
        time: 1678857600000,
    },
    {
        image: 'https://cubyts-website-assets.s3.amazonaws.com/levels_of_design_maturity_8d11e6ca5d.jpg',
        title: 'The 5 Levels of Design Maturity',
        time: 1689457600000,
    },
];

const OverviewPanel = ({ data }: Props) => {
    const { data: owner } = useUserInfo(data.owner);
    return (
        <div className="w-1/3 px-6">
            <div className="mb-6 mt-12 flex w-full items-center justify-between">
                <p className="text-2xl font-semibold text-text">Posts</p>
                <p className="cursor-pointer text-sm font-semibold text-blue-400">View all</p>
            </div>
            {postData.map((post, index) => (
                <PostCard key={index} data={post} />
            ))}
            <p className="mb-6 mt-12 text-2xl font-semibold text-text">Founder</p>
            {owner && <FounderCard data={owner} role={'CEO'} />}
        </div>
    );
};

export default OverviewPanel;
