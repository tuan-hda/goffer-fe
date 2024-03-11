import * as React from 'react';
import { useEffect } from 'react';

type AuthTwoSectionProps = {
    children?: React.ReactNode;
    right?: React.ReactNode;
};

const AuthTwoSection = ({ children, right }: AuthTwoSectionProps) => {
    useEffect(() => {
        document.title = 'Sign Up | Goffer';
    }, []);

    return (
        <div className="flex h-screen w-full">
            <div className="flex flex-1 flex-col">{children}</div>
            <div className="relative hidden h-full flex-1 bg-black/90 md:flex">{right}</div>
        </div>
    );
};

export default AuthTwoSection;
