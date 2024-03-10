import { Filter, Footer, Header } from '../components/applicant';
import PeopleDiscover from '../components/applicant/discover/PeopleDiscover';

const ApplicantLayout = () => {
    return (
        <div className="flex flex-col flex-1">
            <Header />
            <Filter />
            <PeopleDiscover />
            <Footer />
        </div>
    );
};

export default ApplicantLayout;
