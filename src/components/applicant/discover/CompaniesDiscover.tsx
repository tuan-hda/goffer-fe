import CompanyCard from './CompanyCard';
import useCompaniesRecommender from '@/hooks/useCompaniesRecommender';

const CompaniesDiscover = () => {
    const { data, refetch } = useCompaniesRecommender();

    return (
        <div className="mx-aut grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-rows-4">
            {data?.results.map((org, index) => <CompanyCard key={index} data={org} />)}
        </div>
    );
};

export default CompaniesDiscover;
