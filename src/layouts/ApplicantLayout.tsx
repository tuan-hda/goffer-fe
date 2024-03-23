import Discover from 'src/components/applicant/discover/Discover';
import { Footer, Header } from '../components/applicant';
import useDiscoverStore from 'src/stores/discoverStore';
import classNames from 'classnames';

const ApplicantLayout = () => {
    const sideBarPinned = useDiscoverStore((state) => state.sideBarPinned);
    return (
        <div className={classNames('transition-all duration-500 ease-in-out', sideBarPinned ? 'pl-64' : 'pl-20')}>
            <Header />
            <Discover />
        </div>
    );
};

export default ApplicantLayout;
