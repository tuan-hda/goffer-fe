import { listPeopleService } from '@/services/users.service';
import { useQuery } from '@tanstack/react-query';

const useListPeople = () => {
    return useQuery({ queryKey: ['listPeople'], queryFn: listPeopleService });
};

export default useListPeople;
