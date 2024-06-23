import useListPeople from '@/hooks/useListPeople';
import PersonCard from '../common/PersonCard';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { UserDetail } from '@/components/userDetail';
import useUsersRecommender from '@/hooks/useUsersRecommender';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { User } from '@/types/user.type';
import { Button } from '@/components/ui/button';

const PeopleDiscover = () => {
    const { data, refetch, isFetching, hasNextPage, fetchNextPage } = useUsersRecommender();
    const [searchParams] = useSearchParams();

    const users = useMemo(() => {
        if (!data) return [];
        return data.pages.reduce((acc: User[], page) => {
            return [...acc, ...page.results];
        }, []);
    }, [data]);

    return (
        <>
            <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {users.map((person) => (
                    <Sheet key={person.id} onOpenChange={async (open) => !open && (await refetch())}>
                        <PersonCard data={person} />

                        <SheetContent className="!max-w-screen-lg overflow-y-auto p-8 pr-0">
                            <UserDetail id={person.id} />
                        </SheetContent>
                    </Sheet>
                ))}
            </div>
            <div className="mt-14 flex w-full flex-col justify-center">
                {isFetching && <p className="text-center">Loading...</p>}
                {!isFetching && hasNextPage && (
                    <Button variant="outline" className="mx-auto" onClick={() => fetchNextPage()}>
                        Load more
                    </Button>
                )}
                {!isFetching && !hasNextPage && <p className="text-center">You've reached the end of the list</p>}
            </div>
        </>
    );
};

export default PeopleDiscover;
