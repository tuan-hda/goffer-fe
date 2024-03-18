import { useQuery } from '@tanstack/react-query';
import { getSelfService } from 'src/services/users.service';

const useSelfProfileQuery = () => {
    return useQuery({ queryKey: ['getSelf'], queryFn: getSelfService });
};

export default useSelfProfileQuery;
