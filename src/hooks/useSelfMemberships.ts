import { useQuery } from '@tanstack/react-query';
import { getSelfMemberships } from '@/services/membership.service';

const useSelfMemberships = () => {
    return useQuery({ queryKey: ['getSelfMemberships'], queryFn: getSelfMemberships });
};

export default useSelfMemberships;
