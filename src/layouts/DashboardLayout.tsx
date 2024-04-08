import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import SideBar from '@/components/navigation/SideBar';
import useListOrganizations from '@/hooks/useListOrganizations';
import useDiscoverStore from '@/stores/discoverStore';

type DashboardLayoutProps = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const sideBarPinned = useDiscoverStore((state) => state.sideBarPinned);
    const { data } = useListOrganizations();
    const { domain } = useParams();
    const org = data?.results.find((org) => org.domain === domain);

    return (
        <div className="relative flex bg-pale">
            <SideBar org={org} />
            <div
                className={classNames(
                    'transition-all',
                    !sideBarPinned ? 'ml-[67px] w-[calc(100%-67px)]' : 'ml-[280px] w-[calc(100%-280px)]',
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
