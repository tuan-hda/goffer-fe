import { useSearchParams } from 'react-router-dom';
import CompanyCard from './CompanyCard';
import useCompaniesRecommender from '@/hooks/useCompaniesRecommender';
import { useMemo } from 'react';

const CompaniesDiscover = () => {
    const { data, refetch } = useCompaniesRecommender();

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('searchQuery');

    const filterResults = useMemo(() => {
        if (!searchQuery) return data?.results || [];

        return (
            data?.results.filter((org) => {
                return (
                    org.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    org.location?.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }) || []
        );
    }, [data, searchQuery]);

    return (
        <div className="mx-aut grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-rows-4">
            {filterResults.map((org, index) => (
                <CompanyCard key={index} data={org} />
            ))}
        </div>
    );
};

export default CompaniesDiscover;
