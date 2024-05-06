import classNames from 'classnames';
import { Outlet } from 'react-router-dom';

const ApplicantLayout = () => {
    return (
        <div className={classNames('transition-all duration-500 ease-in-out')}>
            <Outlet />
        </div>
    );
};

export default ApplicantLayout;
