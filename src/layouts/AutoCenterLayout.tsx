import classNames from 'classnames';
import { matchRoutes, useLocation } from 'react-router-dom';

type AutoCenterLayoutProps = {
    children: React.ReactNode;
};
const AutoCenterLayout = ({ children }: AutoCenterLayoutProps) => {
    const location = useLocation();
    const fullScreenRoute = [
        {
            path: '/app/discover',
            children: [
                {
                    path: 'people',
                },
            ],
        },
        {
            path: '/app/messages',
        },
        {
            path: '/app/enhance',
        },
    ];

    const match = matchRoutes(fullScreenRoute, location.pathname);

    return (
        <div className="flex w-full">
            <div
                className={classNames('m-auto w-full', {
                    'max-w-7xl': !match || match.length === 0,
                })}
            >
                {children}
            </div>
        </div>
    );
};

export default AutoCenterLayout;
