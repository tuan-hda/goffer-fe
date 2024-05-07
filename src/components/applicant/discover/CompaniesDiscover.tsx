import CompanyCard from './CompanyCard';

const CompaniesDiscover = () => {
    return (
        <div className="mx-aut grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-rows-4">
            {Array(12)
                .fill(0)
                .map((_, index) => (
                    <CompanyCard key={index} />
                ))}
        </div>
    );
};

export default CompaniesDiscover;
