import { useQuery } from '@tanstack/react-query';
import { getMembershipService } from '@/services/membership.service';

const useGetInvitation = (id: string) => {
    return useQuery({
        queryKey: ['getMembership', id],
        queryFn: () => getMembershipService(id),
        enabled: !!id,
    });
};

export default useGetInvitation;
