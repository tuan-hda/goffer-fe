import { listProjectsService } from '@/services/projects.service';
import { ListQueryOptions } from '@/types/common.type';
import { Project } from '@/types/project.type';
import { useQuery } from '@tanstack/react-query';

const useListProject = (options?: Partial<Record<keyof (Project & ListQueryOptions), string>>) => {
    if (!options) {
        options = {};
    }

    if (!options.sortBy) {
        options.sortBy = 'createdAt:desc';
    }

    return useQuery({ queryKey: ['listProject', options], queryFn: () => listProjectsService(options) });
};

export default useListProject;
