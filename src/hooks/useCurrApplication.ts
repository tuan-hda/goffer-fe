import { useParams } from 'react-router-dom';
import useApplicationById from './useApplicationById';

const useCurrApplication = () => {
    const { applicationId } = useParams();
    return useApplicationById(applicationId);
};

export default useCurrApplication;
