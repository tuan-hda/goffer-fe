import { Avatar, Tab, Tabs } from '@nextui-org/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import CursorTrailEffect from '../components/common/CursorTrailEffect';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { TbArrowRight } from 'react-icons/tb';

const paths = [
    '/',
    '/who-are-we',
    '/features',
    '/features?step=2',
    '/features?step=3',
    '/features?step=4',
    '/trusted-by',
    '/trusted-by?type=individual',
    '/pricing',
];

const LandingLayout = () => {
    const location = useLocation();
    const { data: user } = useSelfProfileQuery();
    const navigate = useNavigate();

    // This one prevent focus on the tab, so we can use space-bar normally to navigate
    const ref = useRef<HTMLButtonElement | null>(null);

    const [barInfo, setBarInfo] = useState({ top: 0, left: 0, width: 0, height: 0 });
    const barRef = useRef<HTMLDivElement | null>(null);

    const handleSelectionChange = (k: React.Key) => {
        navigate(k as string);
        ref.current?.focus();
    };

    const moveLocation = useCallback(
        (value: number) => {
            const index = paths.indexOf(window.location.pathname + (window.location.search || ''));
            if (index + value < 0 || index + value >= paths.length) return;
            navigate(paths[index + value]);
        },
        [navigate],
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'ArrowRight') {
                moveLocation(1);
                e.preventDefault();
            }
            if (e.key === 'ArrowLeft') {
                moveLocation(-1);
                e.preventDefault();
            }
        },
        [moveLocation],
    );

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [moveLocation, onKeyDown]);

    useEffect(() => {
        const handleResize = () => {
            setBarInfo({
                top: barRef.current?.getBoundingClientRect().top || 0,
                left: barRef.current?.getBoundingClientRect().left || 0,
                width: barRef.current?.getBoundingClientRect().width || 0,
                height: barRef.current?.getBoundingClientRect().height || 0,
            });
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="paper-noise h-screen w-full">
            <Outlet />
            <button ref={ref} className="absolute" />
            <CursorTrailEffect />
            <div
                style={{
                    position: 'fixed',
                    borderRadius: '13px',
                    zIndex: 2,
                    top: barInfo.top,
                    left: barInfo.left,
                    width: barInfo.width,
                    height: barInfo.height,
                    backgroundColor: 'white',
                }}
            />
            <div className="fixed top-[84vh] z-[4] flex w-full flex-col items-center justify-center mix-blend-difference">
                <div ref={barRef} className="flex items-center">
                    <Tabs
                        onSelectionChange={handleSelectionChange}
                        selectedKey={location.pathname}
                        classNames={{ tabList: 'bg-beige invert shadow-xl relative z-10' }}
                        size="lg"
                        color="primary"
                    >
                        <Tab key="/" title="Home" />
                        <Tab key="/who-are-we" title="Who are we" />
                        <Tab key="/features" title="Features" />
                        <Tab key="/trusted-by" title="Trusted by" />
                        <Tab key="/pricing" title="Pricing" />
                    </Tabs>
                    {user ? (
                        <Link
                            to="/app"
                            className="-ml-5 flex h-11 w-[120px] cursor-pointer items-center gap-2 rounded-r-xl bg-gray-50 pl-10 text-gray-600 opacity-90 shadow-xl invert transition hover:bg-gray-100 hover:opacity-100"
                        >
                            <Avatar className="h-7 w-7" size="sm" src={user.avatar} alt={user.name || user.email} />
                            <TbArrowRight className="text-xl text-black" />
                        </Link>
                    ) : (
                        <Link
                            to={'/auth/sign-up'}
                            className="relative -ml-5 flex h-11 w-[120px] cursor-pointer items-center rounded-r-xl bg-gray-50 pl-10 font-semibold text-gray-600 shadow-xl invert transition hover:bg-gray-100"
                        >
                            Sign Up
                        </Link>
                    )}
                </div>
                <div className="mt-3 flex items-center justify-center gap-4">
                    <Link to="/about-us" className="text-sm text-white/30 transition hover:text-white hover:underline">
                        About us
                    </Link>
                    <Link to="/contact" className="text-sm text-white/30 transition hover:text-white hover:underline">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingLayout;
