import useListOrganizations from '@/hooks/useListOrganizations';
import CompanyCard from './CompanyCard';
import useCompaniesRecommender from '@/hooks/useCompaniesRecommender';

const CompaniesDiscover = () => {
    const { refetch } = useListOrganizations();
    const { data } = useCompaniesRecommender();

    return (
        <div className="mx-aut grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-rows-4">
            {data?.map((org, index) => <CompanyCard key={index} data={org} />)}
        </div>
    );
};

export default CompaniesDiscover;
