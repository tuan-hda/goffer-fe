import { NotFound } from '@/pages';
import { getJobService } from '@/services/jobs.service';
import useNewJobStore from '@/stores/newJob';
import { useEffect, useState } from 'react';
import { TbLoader } from 'react-icons/tb';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

const NewJobLayout = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [failed, setFailed] = useState(false);
    const [setData, clear] = useNewJobStore((state) => [state.setData, state.clear], shallow);
    const location = useLocation();

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await getJobService(id!);
            setData({
                ...data,
                org: data.org?.id || '',
            });
            setFailed(false);
        } catch (error) {
            setFailed(true);
            console.log('Error fetching job', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchData();
        } else {
            clear();
        }
    }, [id, location]);

    if (loading) {
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <TbLoader className="animate-spin text-2xl" />
            </div>
        );
    }

    if (failed) {
        return <NotFound />;
    }

    return <Outlet />;
};

export default NewJobLayout;
