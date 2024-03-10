import PersonCard from '../common/PersonCard';

const PeopleDiscover = () => {
    const peoples = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
        <div className="py-8 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-rows-4">
            {peoples.map((person, index) => (
                <PersonCard key={index} />
            ))}
        </div>
    );
};

export default PeopleDiscover;
