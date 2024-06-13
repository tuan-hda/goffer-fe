import useUserInfo from '@/hooks/useUserInfo';
import FounderCard from './FounderCard';
import { Organization } from '@/types/organization.type';

interface Props {
    data: Organization;
}

const OverviewPanel = ({ data }: Props) => {
    const { data: owner } = useUserInfo(data.owner);
    return (
        <div className="w-1/3 px-6">
            <p className="mb-6 mt-12 text-2xl font-semibold text-text">Founder</p>
            {owner && <FounderCard data={owner} role={'CEO'} />}
            <div className="mb-6 mt-12 flex w-full items-center justify-between">
                <p className="text-2xl font-semibold text-text">Staff</p>
                <p className="cursor-pointer text-sm font-semibold text-blue-400">View all</p>
            </div>
            {data.members &&
                data.members.length > 0 &&
                data.members.map((member) => <FounderCard key={member.id} data={member} role={'Staff'} />)}
        </div>
    );
};

export default OverviewPanel;
