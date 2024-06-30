import { useParams } from 'react-router-dom';
import useGetOrganizationJob from './useGetOrganizationJob';

const useCurrOrganizationJob = () => {
    const { id } = useParams();
    return useGetOrganizationJob(id);
};

export default useCurrOrganizationJob;
