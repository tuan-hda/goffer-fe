import useListOrgAssessment from '@/hooks/useListOrgAssessment';
import AssessmentOrgItem from './AssessmentOrgItem';
import { TbLoader } from 'react-icons/tb';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const AssessmentOrgList = () => {
    const [searchParams] = useSearchParams();

    const {
        refetch,
        list: data,
        isLoading,
        isFetching,
        hasNextPage,
        fetchNextPage,
    } = useListOrgAssessment({
        populate: 'owner',
    });

    useEffect(() => {
        refetch();
    }, [searchParams]);

    if (isLoading) {
        return (
            <div className="mt-10 flex h-[calc(100vh-280px)] items-center justify-center">
                <TbLoader className="animate-spin text-xl" />
            </div>
        );
    }

    if (!data || data.length === 0) {
        return <div className="mt-10">No assessment here.</div>;
    }

    return (
        <div>
            <div className="mt-10 grid grid-cols-4 gap-6">
                {data.map((assessment) => (
                    <AssessmentOrgItem key={assessment.id} assessment={assessment} />
                ))}
            </div>
            <div className="mt-10 flex w-full flex-col justify-center">
                {isFetching && <p className="text-center">Loading...</p>}
                {!isFetching && hasNextPage && (
                    <Button variant="outline" className="mx-auto" onClick={() => fetchNextPage()}>
                        Load more
                    </Button>
                )}
                {!isFetching && !hasNextPage && <p className="text-center">You've reached the end of the list.</p>}
            </div>
        </div>
    );
};

export default AssessmentOrgList;
