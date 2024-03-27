import { NewOrganization } from 'src/types/organization.type';
import { baseAxios } from './base';

export const createOrganizationService = async (organization: NewOrganization) =>
    baseAxios.post('/organizations', organization);
