import Discover from 'src/components/applicant/discover/Discover';
import { Footer, Header } from '../components/applicant';
import SideBar from 'src/components/applicant/navigation/SideBar';

const ApplicantLayout = () => {
    return (
        <div className="flex flex-1 flex-col">
            {/* <Header />  
            <Discover/>
            <Footer /> */}
            <SideBar />
        </div>
    );
};

export default ApplicantLayout;
