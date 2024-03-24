import useDiscoverStore from 'src/stores/discoverStore';
import Filter from '../filter/Filter';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Discover = () => {
    const navigate = useNavigate();
    // const tabKey = useDiscoverStore((state) => state.tabKey);
    // useEffect(() => {
    //     navigate(`${tabKey}`, { replace: true });
    // }, [tabKey, navigate]);

    return (
        <div className="flex flex-col">
            {/* <Filter /> */}
            <Outlet />
        </div>
    );
};

export default Discover;
