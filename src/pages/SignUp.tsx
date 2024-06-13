import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import IndividualSignUp from '@/components/auth/IndividualSignUp';

const SignUp = () => {
    const location = useLocation();

    const type = useMemo(() => {
        const searchParams = new URLSearchParams(location.search);
        if (!searchParams.has('type')) return undefined;
        return searchParams.get('type') === 'individual' ? 'individual' : 'organization';
    }, [location]);

    return (
        <div className="flex min-h-screen">
            <div className="flex-1">
                <IndividualSignUp />
            </div>
        </div>
    );
};

export default SignUp;
