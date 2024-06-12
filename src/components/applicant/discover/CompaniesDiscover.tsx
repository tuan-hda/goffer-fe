import useListOrganizations from '@/hooks/useListOrganizations';
import CompanyCard from './CompanyCard';

const CompaniesDiscover = () => {
    const { data } = useListOrganizations();
    return (
        <div className="mx-aut grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-rows-4">
            {data?.results.map((org, index) => <CompanyCard key={index} data={org} />)}
        </div>
    );
};

export default CompaniesDiscover;
