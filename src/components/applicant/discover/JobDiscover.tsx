import SearchJob from './SearchJob';
import VacancyList from './VacancyList';

const JobDiscover = () => {
    return (
        <div className="mx-auto flex max-w-screen-xl flex-col px-5 text-sm">
            <SearchJob />
            <VacancyList />
        </div>
    );
};

export default JobDiscover;
