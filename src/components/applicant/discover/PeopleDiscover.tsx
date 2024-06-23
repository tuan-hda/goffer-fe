import useListPeople from '@/hooks/useListPeople';
import PersonCard from '../common/PersonCard';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { UserDetail } from '@/components/userDetail';
import useUsersRecommender from '@/hooks/useUsersRecommender';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

const PeopleDiscover = () => {
    const { data, refetch } = useUsersRecommender();
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('searchQuery');

    const filterResults = useMemo(() => {
        if (!searchQuery) return data?.results || [];

        return (
            data?.results.filter((person) => {
                return (
                    person.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    person.email?.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }) || []
        );
    }, [data, searchQuery]);

    return (
        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-rows-4">
            {filterResults.map((person) => (
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
