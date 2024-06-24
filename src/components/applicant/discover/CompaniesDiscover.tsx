import { useSearchParams } from 'react-router-dom';
import CompanyCard from './CompanyCard';
import useCompaniesRecommender from '@/hooks/useCompaniesRecommender';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';

const CompaniesDiscover = () => {
    const { data, refetch, isFetching, hasNextPage, fetchNextPage } = useCompaniesRecommender();

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('searchQuery');

    const companies = useMemo(() => {
        if (!data) return [];
        return data.pages.reduce((acc: any[], page) => {
            return [...acc, ...page.results];
        }, []);
    }, [data]);

    const filterResults = useMemo(() => {
        if (!searchQuery) return companies;

        return companies.filter((org) => {
            return (
                org.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                org.location?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
    }, [companies, searchQuery]);

    return (
        <>
            <div className="mx-aut grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {companies.map((org, index) => (
                    <CompanyCard key={index} data={org} />
                ))}
            </div>
            <div className="mt-14 flex w-full flex-col justify-center">
                {isFetching && <p className="text-center">Loading...</p>}
                {!isFetching && hasNextPage && (
                    <Button variant="outline" className="mx-auto" onClick={() => fetchNextPage()}>
                        Load more
                    </Button>
                )}
                {!isFetching && !hasNextPage && <p className="text-center">You've reached the end of the list.</p>}
            </div>
        </>
    );
};

export default CompaniesDiscover;
