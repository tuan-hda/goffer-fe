import { listPeopleService } from '@/services/users.service';
import { ListQueryOptions } from '@/types/common.type';
import { SeparatedDomainUser } from '@/types/user.type';
import { useQuery } from '@tanstack/react-query';

const useListPeople = (query?: Partial<Record<keyof (SeparatedDomainUser & ListQueryOptions), unknown>>) => {
    return useQuery({ queryKey: ['listPeople', query], queryFn: () => listPeopleService(query) });
};

export default useListPeople;
