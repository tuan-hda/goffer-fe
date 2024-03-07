import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Individual, Organization } from 'src/components/trustedBy';

const TrustedBy = () => {
    const [type, setType] = useState<'organization' | 'individual'>('organization');
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const type = searchParams.get('type');
        if (type === 'individual' || type === 'organization') {
            setType(type);
        } else {
            setType('organization');
        }
    }, [location.search]);

    return type === 'organization' ? <Organization /> : <Individual />;
};

export default TrustedBy;
