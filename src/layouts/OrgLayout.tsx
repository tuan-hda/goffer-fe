import { AppBreadcrumb } from '@/components/common';

type OrgLayoutProps = {
    children: React.ReactNode;
};

const OrgLayout = ({ children }: OrgLayoutProps) => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-pale px-6 py-5 text-text">
            <div className="mt-[6px] flex flex-shrink-0 items-center gap-1 text-sm">
                <AppBreadcrumb />
            </div>
            {children}
        </div>
    );
};

export default OrgLayout;
