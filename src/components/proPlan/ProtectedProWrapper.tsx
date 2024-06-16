import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';

type ProtectedProWrapperProps = {
    children?: React.ReactNode;
    fallback?: React.ReactNode;
};

const ProtectedProWrapper = ({ children, fallback }: ProtectedProWrapperProps) => {
    const { data: self } = useSelfProfileQuery();
    return self?.isPro ? <>{children}</> : fallback ?? null;
};

export default ProtectedProWrapper;
