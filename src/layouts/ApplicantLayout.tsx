import { Header } from '../components/applicant';
import useDiscoverStore from 'src/stores/discoverStore';
import classNames from 'classnames';
import { Outlet } from 'react-router-dom';

const ApplicantLayout = () => {
    const sideBarPinned = useDiscoverStore((state) => state.sideBarPinned);
    return (
        <div className={classNames('transition-all duration-500 ease-in-out', sideBarPinned ? '' : 'pl-[68px]')}>
            <Header />
            <Outlet />
        </div>
    );
};

export default ApplicantLayout;
