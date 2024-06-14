import { ProjectCreate, Project, ProjectUpdate } from '@/types/project.type';
import { baseAxios } from './base';
import { List } from '@/types/list.type';
import { ListQueryOptions } from '@/types/common.type';

export const createProjectService = async (data: ProjectCreate) =>
    (await baseAxios.post<Project>('/projects', data)).data;

export const listProjectsService = async (options?: Partial<Record<keyof (Project & ListQueryOptions), string>>) =>
    (
        await baseAxios.get<List<Project>>('/projects', {
            params: options,
        })
    ).data;

export const getProjectService = async (id: string) => (await baseAxios.get<Project>(`/projects/${id}`)).data;

export const updateProjectService = async (id: string, data: ProjectUpdate) =>
    (await baseAxios.patch<Project>(`/projects/${id}`, data)).data;

export const deleteProjectService = (id: string) => baseAxios.delete(`/projects/${id}`);
