import useGetCurrentOrgJob from '@/hooks/useGetCurrentOrgJob';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useNewJobStore from '@/stores/newJob';
import { shallow } from 'zustand/shallow';

const NewJobLayout = () => {
    const { data: job } = useGetCurrentOrgJob();

    const [setData, clear] = useNewJobStore((state) => [state.setData, state.clear], shallow);
    const location = useLocation();

    useEffect(() => {
        if (job) {
            setData({
                ...job,
                org: job.org?.id,
            });
        } else {
            clear();
        }
    }, [job, location]);

    return <Outlet />;
};

export default NewJobLayout;
