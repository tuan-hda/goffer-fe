import { getUserInfo } from '@/services/users.service';
import { useQuery } from '@tanstack/react-query';

const useUserInfo = (userId: string) => {
    return useQuery({ queryKey: ['getUserInfo', userId], queryFn: () => getUserInfo(userId), enabled: !!userId });
};

export default useUserInfo;
