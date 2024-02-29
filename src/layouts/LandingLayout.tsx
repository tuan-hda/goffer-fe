import { Tab, Tabs } from '@nextui-org/react';
import { useCallback, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import CursorTrailEffect from '../components/common/CursorTrailEffect';

const paths = ['/', '/who-are-we', '/features', '/trusted-by', '/pricing'];

const LandingLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // This one prevent focus on the tab, so we can use space-bar normally to navigate
    const ref = useRef<HTMLButtonElement | null>(null);

    const handleSelectionChange = (k: React.Key) => {
        navigate(k as string);
        ref.current?.focus();
    };

    const moveLocation = useCallback(
        (value: number) => {
            const index = paths.indexOf(window.location.pathname);
            if (index + value < 0 || index + value >= paths.length) return;
            navigate(paths[index + value]);
        },
        [navigate],
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'ArrowRight') {
                moveLocation(1);
            }
            if (e.key === 'ArrowLeft') {
                moveLocation(-1);
            }
            e.preventDefault();
        },
        [moveLocation],
    );

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [moveLocation, onKeyDown]);

    return (
        <div className="h-screen w-full">
            <Outlet />
            <button ref={ref} className="absolute" />
            <CursorTrailEffect />
            <div className="absolute bottom-12 flex flex-col items-center justify-center w-full">
                <div className="flex items-center">
                    <Tabs
                        onSelectionChange={handleSelectionChange}
                        selectedKey={location.pathname}
                        classNames={{ tabList: 'bg-beige shadow-xl relative z-10' }}
                        size="lg"
                        color="primary"
                    >
                        <Tab key="/" title="Home" />
                        <Tab key="/who-are-we" title="Who are we" />
                        <Tab key="/features" title="Features" />
                        <Tab key="/trusted-by" title="Trusted by" />
                        <Tab key="/pricing" title="Pricing" />
                    </Tabs>
                    <div className="rounded-r-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition h-11 flex items-center -ml-5 relative w-[120px] text-gray-600 pl-10 shadow-xl font-semibold">
                        Sign Up
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3">
                    <Link to="/about-us" className="hover:underline hover:text-text transition text-sm text-black/40">
                        About us
                    </Link>
                    <Link to="/about-us" className="hover:underline hover:text-text transition text-sm text-black/40">
                        Support
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingLayout;
