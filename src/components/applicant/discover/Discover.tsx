import useDiscoverStore from 'src/stores/discoverStore';
import Filter from '../filter/Filter';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import JobDetail from './JobDetail';

const Discover = () => {
    const navigate = useNavigate();
    const tabKey = useDiscoverStore((state) => state.tabKey);
    useEffect(() => {
        navigate(`${tabKey}`, { replace: true });
    }, [tabKey, navigate]);

    return (
        <div>
            <div className="flex flex-col">
                <Filter />
                <Outlet />
            </div>
            <JobDetail />
        </div>
    );
};

export default Discover;
