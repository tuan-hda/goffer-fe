import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/common';

const ApplicantLayout = () => {
    return (
        <div className={classNames('transition-all duration-500 ease-in-out')}>
            <Header />
            <Outlet />
        </div>
    );
};

export default ApplicantLayout;
