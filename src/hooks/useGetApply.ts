import { getApplicationById, listApplicationService } from '@/services/apply.service';
import { Apply } from '@/types/application.type';
import { useQuery } from '@tanstack/react-query';

const useGetApply = (id: string) => {
    return useQuery({ queryKey: ['getApplyById', id], queryFn: () => getApplicationById(id) });
};

const useQueryApply = (query?: Partial<Record<keyof Apply, string>>) => {
    return useQuery({ queryKey: ['getApply', query], queryFn: () => listApplicationService(query) });
};

export { useGetApply, useQueryApply };
