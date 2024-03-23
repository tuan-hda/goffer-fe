import SideBar from 'src/components/applicant/navigation/SideBar';

type DashboardLayoutProps = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="relative">
            <SideBar />
            {children}
        </div>
    );
};

export default DashboardLayout;
