import useListPeople from '@/hooks/useListPeople';
import PersonCard from '../common/PersonCard';

const PeopleDiscover = () => {
    const { data } = useListPeople();

    return (
        <div className="mx-aut grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-rows-4">
            {data?.results.map((person, index) => <PersonCard key={index} data={person} />)}
        </div>
    );
};

export default PeopleDiscover;
