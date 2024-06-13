import useUserInfo from '@/hooks/useUserInfo';
import FounderCard from './FounderCard';
import { Organization } from '@/types/organization.type';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { UserDetail } from '@/components/userDetail';

interface Props {
    data: Organization;
}

const OverviewPanel = ({ data }: Props) => {
    const { data: owner } = useUserInfo(data.owner);
    return (
        <div className="w-1/3 px-6">
            <p className="mb-6 mt-12 text-2xl font-semibold text-text">Founder</p>
            {owner && (
                <Sheet>
                    <SheetTrigger>
                        <FounderCard data={owner} role={'CEO'} />
                    </SheetTrigger>

                    <SheetContent className="!max-w-screen-lg overflow-y-auto p-8 pr-0">
                        <UserDetail id={owner.id} />
                    </SheetContent>
                </Sheet>
            )}
            <p className="mb-6 mt-12 text-2xl font-semibold text-text">Staff</p>
            {data.members &&
                data.members.length > 0 &&
                data.members.map((member) => (
                    <Sheet key={member.id}>
                        <SheetTrigger>
                            <FounderCard key={member.id} data={member} role={'Staff'} />
                        </SheetTrigger>

                        <SheetContent className="!max-w-screen-lg overflow-y-auto p-8 pr-0">
                            <UserDetail id={member.id} />
                        </SheetContent>
                    </Sheet>
                ))}
        </div>
    );
};

export default OverviewPanel;
