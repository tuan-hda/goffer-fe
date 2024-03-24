import classNames from 'classnames';
import SideBar from 'src/components/applicant/navigation/SideBar';
import useDiscoverStore from 'src/stores/discoverStore';

type DashboardLayoutProps = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const sideBarPinned = useDiscoverStore((state) => state.sideBarPinned);

    return (
        <div className="relative bg-pale">
            <SideBar />
            <div className={classNames('transition-all', !sideBarPinned ? '' : 'ml-[280px] w-[calc(100%-280px)]')}>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
