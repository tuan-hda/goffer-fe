import useCurrOrganization from './useCurrOrganization';
import useSelfMemberships from './useSelfMemberships';

const useCurrentMembership = () => {
    const { data: org, isLoading } = useCurrOrganization();
    const { data: memberships, isLoading: isLoading2 } = useSelfMemberships();
    const currentMembership = memberships?.data.find((item) => item.org.id === org?.id);
    if (!currentMembership) return { data: null };
    return {
        data: currentMembership,
        isLoading: isLoading || isLoading2,
    };
};

export default useCurrentMembership;
