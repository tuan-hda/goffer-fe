import useListPeople from '@/hooks/useListPeople';
import PersonCard from '../common/PersonCard';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { UserDetail } from '@/components/userDetail';
import useUsersRecommender from '@/hooks/useUsersRecommender';

const PeopleDiscover = () => {
    const { refetch } = useListPeople();
    const { data } = useUsersRecommender();

    return (
        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-rows-4">
            {data?.map((person) => (
                <Sheet key={person.id} onOpenChange={async (open) => !open && (await refetch())}>
                    <PersonCard data={person} />

                    <SheetContent className="!max-w-screen-lg overflow-y-auto p-8 pr-0">
                        <UserDetail id={person.id} />
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    );
};

export default PeopleDiscover;
