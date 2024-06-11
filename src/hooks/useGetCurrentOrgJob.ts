import { useParams } from 'react-router-dom';
import useGetOrganizationJob from './useGetOrganizationJob';

const useGetCurrentOrgJob = () => {
    const { id } = useParams();
    return useGetOrganizationJob(id);
};

export default useGetCurrentOrgJob;
