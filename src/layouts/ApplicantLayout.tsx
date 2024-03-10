import Discover from 'src/components/applicant/discover/Discover';
import { Footer, Header } from '../components/applicant';

const ApplicantLayout = () => {
    return (
        <div className="flex flex-col flex-1">
            <Header />
            <Discover/>
            <Footer />
        </div>
    );
};

export default ApplicantLayout;
