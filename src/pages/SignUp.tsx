import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FirstStep, OrganizationSignUp } from '@/components/auth';
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
            {type === 'individual' && (
                <div className="flex-1">
                    <IndividualSignUp />
                </div>
            )}
            {type === 'organization' && (
                <div className="flex-1">
                    <OrganizationSignUp />
                </div>
            )}
            <div className="m-auto">
                {type === undefined && <FirstStep />}

                {type === undefined && (
                    <Link to="/auth/login" className="mt-10 block text-center hover:underline">
                        Already have an account? <span className="text-primary">Login</span>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default SignUp;
