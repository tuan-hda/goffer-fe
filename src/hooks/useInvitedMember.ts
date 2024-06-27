import { getOrgMembers } from '@/services/membership.service';
import { getQuestions } from '@/services/question.service';
import { useQuery } from '@tanstack/react-query';

const useInvitedMember = (orgId: string) => {
    return useQuery({ queryKey: ['getOrgMembers', orgId], queryFn: () => getOrgMembers(orgId), enabled: !!orgId });
};

export default useInvitedMember;
